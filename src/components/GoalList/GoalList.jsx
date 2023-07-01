import React from 'react';
import './GoalList.css';
import GoalListCard from '../../components/GoalListCard/GoalListCard';

export default function GoalList({ goalListItems, handleUpdateGoal, handleDeleteGoal }) {
  return (
    <div className="goalListContainer">
        {goalListItems.length > 0 ? (
          //Render the list of goals
          <div className="goalList">
            {goalListItems.map((goal) => (
              <GoalListCard 
                key={goal._id} 
                goalListItem={goal}
                handleUpdateGoal={handleUpdateGoal}
                handleDeleteGoal={handleDeleteGoal}
              />
            ))}
          </div>
        ) : (
          //Render no notes
          <p>No Goals Yet!</p>
        )}
    </div>
  )
}
