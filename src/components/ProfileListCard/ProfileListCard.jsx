import React from 'react';
import './ProfileListCard.css';

// Images
import starIcon from '/Users/sydneymorrison/code/kyyngo/src/images/star-icon-dropshadow.png';
import progressSVG100 from '/Users/sydneymorrison/code/kyyngo/src/images/progress-75.svg';



export default function ProfileListCard( { profileListItem } ) {
    const createdAt = new Date(profileListItem.createdAt);
    const date = createdAt.getDate();
    const month = createdAt.toLocaleString('default', { month: 'long' });
    const year = createdAt.getFullYear();
    const formattedDate = month + ' ' + date + ', ' + year;
    
    const goals = profileListItem.goals;

    return (
      <div className="profileListCardContainer">
        {goals.map((goal) => (
        <div className="profileListCard" key={goal._id} >
            {/* Has the goal icon in the center of the circle */}
                {/* Goal Icon */}

                <div className="goalListCard-Row1 goalListCard-Row-1">
                <div>
                <div className="profileListCardIconContainer profileListCard-Column-1">
                <div className="profileCardIconContainer">
                <div className="profileListCardIcon">
                  {goal.icon}
                </div>
                </div>
                </div>
                </div>

                {/* Created at date */}
                <div className="profileListCardContent profileListCard-Column-2 profileListCardFont">
                  <div>{formattedDate}</div>
                  <div>@sydneymorrison</div>

                  {/* Goal Title */}
                  <div>{goal.title}</div>

                  {/* Goal Description */}
                  <div>{goal.description}</div>
                </div>

              <div className="profileListCard-Column-3">
              {/* Follower Count */}

              {/* Star icon */}
              <img className="goalListCard-Star" src={starIcon} alt="star icon" style={{ width: '25px', height: '25px' }} />
              {/* Progress Bar */}
              <img className="goalListCard-ProgressBar" src={progressSVG100} alt="progress bar" style={{ width: '150px', height: '26px' }} />
             </div>

        </div>

        <div className="profileListCard-Row-2">
        <div className="profileCardListButtonEditAndDeleteContainer">
              {/* {Edit a Goal} */}
              {/* <Route path="`/goals/${goalId}/edit`" element={<ProfilePage user={user} setUser={setUser} />} /> */}
              <button className="profileListCardButton profileListCardButtonEdit" >Edit</button>
              {/* Delete a Goal} */}
              <button className="profileListCardButton profileListCardButtonDelete" >Delete</button>
        </div>
      </div>

        </div>
      ))}
    </div>
  );
}



