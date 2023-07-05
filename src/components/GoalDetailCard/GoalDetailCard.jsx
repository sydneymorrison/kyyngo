import './GoalDetailCard.css'
// import '../../components/GoalDetailCard/GoalDetailCard.css';
import React from 'react'

// Images
import starIcon from '../../images/star-icon-dropshadow.png';
import progressSVG100 from '../../images/progress-75.svg';



export default function GoalDetailCard( { goalDetailItems, handleUpdateGoal, handleDeleteGoal } ) {

//Update date to readable format
const createdAt = new Date(goalDetailItems.createdAt);
const date = createdAt.getDate();
const month = createdAt.toLocaleString('default', { month: 'long' });
const year = createdAt.getFullYear();
const formattedDate = month + ' ' + date + ', ' + year;


function handleUpdateClick (evt) {
  handleUpdateGoal(goalDetailItems._id);
  // navigate(`/api/goals/${goalDetailItems._id}`);
  // navigate(`/goals/${goalDetailItems._id}/edit`);
}

function handleDeleteClick (evt) {
handleDeleteGoal(goalDetailItems._id);
}



  return (
    <div className="goalDetailCardContainer">
      <div className="goalDetailCard">

      {/* Has the goal icon in the center of the circle */}
      <div className="goalDetailCard-Row1 goalDetailCard-Row-1">
          <div>

            <div className="goalDetailCardIconContainer goalDetailCard-Column-1">
            <div className="goalDetailCardIconContainer">
                <div className="goalDetailCardIcon">
                {goalDetailItems.icon}
                </div>
              </div>
        </div>
      </div>


      {/* GoalDetailCard Content */}
      <div className="goalDetailCardContent goalDetailCard-Column-2 goalDetailCardFont">
        {/* Created at date */}
        <div className="goalFormattedDate">
        {formattedDate}
        <div>@sydneymorrison</div>
        </div>
        {/* username from profile model */}
        {/* goal title */}

        {/* Wrap the title in a link that navigates to the Goal Detail Page */}
        <div className="goalTitle">
        {goalDetailItems.title}
        </div>
        <div className="goalDescription">
        {goalDetailItems.description}
        </div>
      </div>


      <div className="goalDetailCard-Column-3">
          {/* Follower Count */}
          {/* Star icon */}
          <img className="goalDetailCard-Star" src={starIcon} alt="star icon" style={{ width: '25px', height: '25px' }} />
              {/* Progress Bar */}
              <img className="goalDetailCard-ProgressBar" src={progressSVG100} alt="progress bar" style={{ width: '150px', height: '26px' }} />
      </div>
      </div>
      
      <div className="goalDetailCard-Row-2">
      <div className="goalCardDetailButtonEditAndDeleteContainer">
            {/* {Edit a Goal} */}
            {/* <Route path="`/goals/${goalId}/edit`" element={<ProfilePage user={user} setUser={setUser} />} /> */}
            <button className="goalDetailCardButton" onClick={handleUpdateClick}>Edit</button>
            {/* Delete a Goal} */}
            <button className="goalDetailCardButton" onClick={handleDeleteClick}>Delete</button>
            </div>
      </div>
      </div>
    </div>
  );
}
