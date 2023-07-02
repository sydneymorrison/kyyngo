import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './GoalDetailList.css';
import GoalDetailCard from '../../components/GoalDetailCard/GoalDetailCard';


export default function GoalDetailList( { goalDetailItems, handleUpdateGoal, handleDeleteGoal  }) {

  const navigate = useNavigate();
  const { id } = useParams();
  
  function handleClick() {
    navigate(`/goals/${id}/comments`)
    // navigate(`/goals/${id}`)
  }

  return (
    <div>
    <GoalDetailCard 
        goalDetailItems={goalDetailItems } 
        handleUpdateGoal={handleUpdateGoal}
        handleDeleteGoal={handleDeleteGoal}
    />
    
    {/* Button to navigate to create comment form */}
    <button onClick={handleClick}>Add Comment</button>

    </div>
  )
}
