import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GoalPostFormPage.css';
import { getGoalById } from '../../utilities/goals-api';
import GoalPostForm from '../../components/GoalPostForm/GoalPostForm';

//APIS


export default function GoalPostFormPage() {
  const { goalId } = useParams();
  const [goal, setGoal] = useState(null);

  //Query for a single goal in the database so that I can pass it as a prop to the Post form
  useEffect (() => {
    async function fetchGoalById() {
      try {
        if (goalId) {
        const fetchedGoalById = await getGoalById(goalId);
        setGoal(fetchedGoalById);
        }
      } catch (error) {
        console.error('Failed to fetch goal', error )
      }
    }

    fetchGoalById();
  }, [goalId]);



  return (
    <div className="goalPostFormPageContainer">
    <h1>Add a New Goal</h1>
    <GoalPostForm goal={goal} />
    </div>
  )
}
