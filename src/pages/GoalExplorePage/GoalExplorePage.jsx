import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';
import'./GoalExplorePage.css';
import GoalList from '../../components/GoalList/GoalList';
import { useNavigate } from 'react-router-dom';
// import GoalPostFormUpdate from '../../components/GoalPostFormUpdate/GoalPostFormUpdate';
//API Routes
import { getGoalList, deleteGoal, getGoalById } from '../../utilities/goals-api';



export default function GoalExplorePage() {

  const [goalListItems, setGoalListItems] = useState([]);
  const navigate = useNavigate();


  //Set up useEffect to fetch goal List items
  useEffect(() => {
    async function fetchGoalList() {
    try {
      const goalsList = await getGoalList();
      setGoalListItems(goalsList);
    } catch (error) {
      console.log('Failed to retrieve goal items:', error);
    }
  }
    fetchGoalList();
}, []);


//UPDATE a Goal
async function handleUpdateGoal(goalId) {

  try {
    const goal = await getGoalById(goalId);
    navigate(`/goals/${goalId}/edit`, { state: { goal } });
  } catch (error) {
    console.log('Failed to retrieve goal:', error);
  }

}


//DELETE a goal
async function handleDeleteGoal(goalId) {
  console.log('Deleting goal with ID:', goalId); 
  try {
    await deleteGoal(goalId);
    //Remove the deleted goal from the list of items   
    setGoalListItems((goalListItems) =>
    goalListItems.filter((goal) => goal._id !== goalId)
  );
  console.log('Goal deleted successfully!');
  console.log('Updated goalListItems:', goalListItems);
  } catch (error) {
    console.log('Failed to delete goal:', error);
  }

  console.log('delete goal list items', goalListItems);
}

  return (
    <div className="goalExplorePageContainer">
    <div>Explore Goals</div>
    <GoalList 
      goalListItems={goalListItems}
      handleUpdateGoal={handleUpdateGoal} 
      handleDeleteGoal={handleDeleteGoal}
    />
{/* 
     {/* {Add the route for the Goal Post Form Update } */}
      {/* <Route
      path="/goals/:id/edit"
      element={<GoalPostFormUpdate />}
      /> */} 

    </div>


  )
}
