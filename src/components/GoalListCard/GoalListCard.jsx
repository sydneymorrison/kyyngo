import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Route, useNavigate } from 'react-router-dom';
import './GoalListCard.css';
// import GoalPostFormUpdate from '../GoalPostFormUpdate/GoalPostFormUpdate';

export default function GoalListCard({ goalListItem, handleUpdateGoal, handleDeleteGoal }) {

  const navigate = useNavigate();

  const createdAt = new Date(goalListItem.createdAt);
  const date = createdAt.getDate();
  const month = createdAt.toLocaleString('default', { month: 'long' });
  const year = createdAt.getFullYear();
  const formattedDate = month + ' ' + date + ', ' + year;

  

  function handleUpdateClick (evt) {
    handleUpdateGoal(goalListItem._id);
    // navigate(`/api/goals/${goalListItem._id}`);
    // navigate(`/goals/${goalListItem._id}/edit`);
  }

 function handleDeleteClick (evt) {
  handleDeleteGoal(goalListItem._id);
 }


  return (
    <div className="goalListCardContainer">
      <div>
          {/* Has the goal icon in the center of the circle */}
          {goalListItem.icon}
      </div>
      <div>
        {/* Created at date */}
        {formattedDate}
        {/* username from profile model */}
        {/* goal title */}
        {goalListItem.title}
        {goalListItem.description}
      </div>
      <div>
          {/* Follower Count */}
          {/* Star icon */}
          {/* Progress Bar */}
      </div>
      <div>
            {/* {Edit a Goal} */}
            {/* <Route path="`/goals/${goalId}/edit`" element={<ProfilePage user={user} setUser={setUser} />} /> */}
            <button onClick={handleUpdateClick}>Edit</button>
            {/* Delete a Goal} */}
            <button onClick={handleDeleteClick}>Delete</button>
      </div>

      {/* {Add the route for the Goal Post Form Update } */}
      {/* <Route
      path="/goals/:id/edit"
      element={<GoalPostFormUpdate />}
      /> */}
    </div>
  );
}