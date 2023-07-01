import React, { useState, useEffect } from 'react';
import './GoalDetailPage.css';
import { useParams } from 'react-router-dom';
import GoalDetailList from '../../components/GoalDetailList/GoalDetailList';

//API Routs
import { getGoalById } from '../../utilities/goals-api';



export default function GoalDetailPage() {

  //Fetch the goal Id of the selected goal from the Explore page from the URL parameter
  const {id} = useParams(); 
  const [goalDetailItems, setGoalDetailItems] = useState(null);

  useEffect(() => {
  //Use a use effect to fetch the goal from the database by ID
  async function fetchGoal() {
    try{
      //Fetch the goal ID from the URL parameter that was clicked
      const goalDetailData = await getGoalById(id);
      setGoalDetailItems(goalDetailData);
    } catch (error) {
      console.log('Failed to retrieve goal', error);
    }
  }
    fetchGoal();
}, [id]);

if (!goalDetailItems) {
  return <div> Goal Loading</div>;
}

  return (
    <div>
    <div>GoalDetailPage</div>
    <GoalDetailList goalDetailItems={goalDetailItems}  />
    </div>
  )
}
