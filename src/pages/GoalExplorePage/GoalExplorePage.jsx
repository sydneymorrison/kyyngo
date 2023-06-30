import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';
import'./GoalExplorePage.css';
import GoalList from '../../components/GoalList/GoalList';
import { useNavigate } from 'react-router-dom';
// import GoalPostFormUpdate from '../../components/GoalPostFormUpdate/GoalPostFormUpdate';
//API Routes
import { getGoalList, deleteGoal, updateGoalForm, updateGoal } from '../../utilities/goals-api';



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
    const goal = await updateGoal(goalId);
    navigate(`/goals/${goalId}/edit`, { state: { goal } });
  } catch (error) {
    console.log('Failed to retrieve goal:', error);
  }

  // //Retrieve the goal from the database
  // const goal = await updateGoalForm(goalId);

  // //Update goal in the database
  // const updatedGoalData ={ 
  //   ...goal,
  //   title: goalListItems.title,
  //   description: goalListItems.description,
  //   icon: goalListItems.icon,
  //   startDate: goalListItems.startDate,
  //   endDate: goalListItems.endDate,
  //   category: goalListItems.category,
  //   link: goalListItems.link,

  // };
  // const updatedGoal = await updateGoal(goalId, updatedGoalData);

  // // console.log(`Goal Updated Successfully: ${goalId}`);
  // console.log('Goal Updated Successfully!', updatedGoal);
}


//DELETE a goal
async function handleDeleteGoal(goalId) {
  try {
    await deleteGoal(goalId);
    //Remove the deleted goal from the list of items   
    setGoalListItems((prevItems) =>
      prevItems.filter((goal) => goal._id !== goalId)
  );
  console.log('Goal deleted successfully!');
  } catch (error) {
    console.log('Failed to delete goal:', error);
  }
}

  return (
    <div>
    <div>GoalExplorePage</div>
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
