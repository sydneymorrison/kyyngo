import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './GoalDetailList.css';
import GoalDetailCard from '../../components/GoalDetailCard/GoalDetailCard';
import GoalCommentForm from '../../components/GoalCommentForm/GoalCommentForm';
import GoalCommentList from '../../components/GoalCommentList/GoalCommentList';



export default function GoalDetailList( { goalDetailItems, handleUpdateGoal, handleDeleteGoal  }) {

  const navigate = useNavigate();
  const { id } = useParams();

  const [showCommentForm, setShowCommentForm] = useState(false);



  function handleClick() {
    //When the Add Comment is clicked show the GoalCommentForm
    setShowCommentForm((prevShowCommentForm) => !prevShowCommentForm);
    // navigate(`/goals/${id}/comments`)
  }

  //When the Add Comment Form button is not clicked don't show the GoalComment Form Component
  function handleCommentFormSubmit() {
    setShowCommentForm(false);
  }

  return (
    <div className="goalDetailListContainer">
      <div className="goalDetailList">
        <GoalDetailCard 
            goalDetailItems={goalDetailItems} 
            handleUpdateGoal={handleUpdateGoal}
            handleDeleteGoal={handleDeleteGoal}
        />
    </div>

    {/* Button to navigate to create comment form */}

    {/* Toggle between Hide Comment and Add Comment */}
    <button className="goalDetailButton" onClick={handleClick}>
      {showCommentForm ? 'Hide Comment' : 'Add Comment'}
    </button>


    {/* If the comment form is not showing  */}
    <div className="goalCommentFormComponent">
    {showCommentForm && (
    <GoalCommentForm
     goalId={id}
     onCommentFormSubmit={handleCommentFormSubmit}
    />
    )}
    </div>

    <div className="goalCommentListContainer">
    <GoalCommentList
      goalDetailItems={goalDetailItems} 
      handleUpdateGoal={handleUpdateGoal}
      handleDeleteGoal={handleDeleteGoal}
    />
    </div>
    </div>
  )
}
