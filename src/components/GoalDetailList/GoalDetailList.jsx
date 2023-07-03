import React from 'react'
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
    //When the Add Commnent is clicked show the GoalCommentForm
    setShowCommentForm(true);
    navigate(`/goals/${id}/comments`)
  }

  //When the Add Comment Form button is not clicked don't show the GoalComment Form Component
  function handleCommentFormSubmit() {
    setShowCommentForm(false);
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


    {showCommentForm && (
    <GoalCommentForm
     goalId={}
    />

    )}

    <GoalCommentList
      goalDetailItems={goalDetailItems } 
      handleUpdateGoal={handleUpdateGoal}
      handleDeleteGoal={handleDeleteGoal}
    />


    </div>
  )
}
