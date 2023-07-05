import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './GoalListCard.css';

// Images
import starIcon from '../../images/star-icon-dropshadow.png';
import progressSVG100 from '../../images/progress-75.svg';


export default function GoalListCard({ goalListItem, handleUpdateGoal, handleDeleteGoal }) {

  // const navigate = useNavigate();

  //Update date to readable format
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
      <div className="goalListCard">
        
        {/* Has the goal icon in the center of the circle */}
      
        <div className="goalListCard-Row1 goalListCard-Row-1">
          <div>
                <div className="goalListCardIconContainer goalListCard-Column-1">
                  <div className="goalListCardIconContainer">
                  <div className="goalListCardIcon">
                  {goalListItem.icon}
                  </div>
                  </div>
                </div>
            </div>

            {/* GoalListCard Content */}
            <div className="goalListCardContent goalListCard-Column-2 goalListCardFont">
              {/* Created at date */}
              {formattedDate}
              <div>@sydneymorrison</div>
              {/* username from profile model */}
              {/* goal title */}

              {/* Wrap the title in a link that navigates to the Goal Detail Page */}
              
              <Link className="goalListCardTitleLink" to={`/goals/${goalListItem._id}`}>
              {goalListItem.title}
              </Link>
              {goalListItem.description}
            </div>

            
            <div className="goalListCard-Column-3">
              {/* Follower Count */}

              {/* Star icon */}
              <img className="goalListCard-Star" src={starIcon} alt="star icon" style={{ width: '25px', height: '25px' }} />
              {/* Progress Bar */}
              <img className="goalListCard-ProgressBar" src={progressSVG100} alt="progress bar" style={{ width: '150px', height: '26px' }} />

          </div>
        </div>
  
      <div className="goalListCard-Row-2">
        <div className="goalCardListButtonEditAndDeleteContainer">
              {/* {Edit a Goal} */}
              {/* <Route path="`/goals/${goalId}/edit`" element={<ProfilePage user={user} setUser={setUser} />} /> */}
              <button className="goalListCardButton" onClick={handleUpdateClick}>Edit</button>
              {/* Delete a Goal} */}
              <button className="goalListCardButton" onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
      </div>
    </div>
  );
}