import './GoalDetailList.css';
import GoalDetailCard from '../../components/GoalDetailCard/GoalDetailCard';
import React from 'react'

export default function GoalDetailList( { goalDetailItems, handleUpdateGoal, handleDeleteGoal  }) {


  return (
    <div>
    <GoalDetailCard 
        goalDetailItems={ goalDetailItems } 
        handleUpdateGoal={handleUpdateGoal}
        handleDeleteGoal={handleDeleteGoal}
    />
    </div>
  )
}
