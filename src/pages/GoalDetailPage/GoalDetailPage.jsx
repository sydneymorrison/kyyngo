import React, { useState, useEffect } from 'react';
import './GoalDetailPage.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GoalDetailList from '../../components/GoalDetailList/GoalDetailList';
// import GoalCommentForm from '../../components/GoalCommentForm/GoalCommentForm'

//API Routs
import { deleteGoal, getGoalById } from '../../utilities/goals-api';
import { getCommentsById } from '../../utilities/comments-api';




export default function GoalDetailPage() {

  //Fetch the goal Id of the selected goal from the Explore page from the URL parameter
  const {id} = useParams(); 
  const [goalDetailItems, setGoalDetailItems] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  //Use a use effect to fetch the goal from the database by ID
  async function fetchGoal() {
    try{
      if (id) {
      //Fetch the goal ID from the URL parameter that was clicked
      const goalDetailData = await getGoalById(id);
      setGoalDetailItems(goalDetailData);
    } 
     } catch (error) {
      console.log('Failed to retrieve goal', error);
    }
  }
    fetchGoal();
}, [id]);



//Fetch the comments associated with a goal
useEffect(() => {
  async function fetchComments() {
    try {
      if (id) {
        const comments = await getCommentsById(id);
        setGoalDetailItems((prevItems) => ({
          ...prevItems,
          comments: comments,
        }));
      }
    } catch (error) {
      console.log('Failed to retrieve comments', error);
    }
  }
  fetchComments();
}, [id]);


if (!goalDetailItems) {
  return <div> Goal Loading</div>;
}




//Update a Goal
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
    setGoalDetailItems(null);
    console.log('Goal deleted successfully!');
  } catch (error) {
    console.log('Failed to delete goal:', error);
  }
}





  return (
    <div className="goalDetailPageContainer">
    <div>Goal Details</div>
    <GoalDetailList 
      goalDetailItems={goalDetailItems}
      handleUpdateGoal={handleUpdateGoal} 
      handleDeleteGoal={handleDeleteGoal}
    />

    </div>
  )
}
