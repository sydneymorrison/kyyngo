import React, { useState, useEffect } from 'react';
import './GoalTrackPage.css';

//API Routes
import { getTrackGoalList } from '../../utilities/milestones-api';
import GoalTrackList from '../../components/GoalTrackList/GoalTrackList';


// Includes the Calendar Component and the Track Goal Form

export default function TrackGoalPage() {

  const [goalTrackListItems, setGoalTrackListItems] = useState([]);
    
    useEffect(() => {
      async function fetchGoals() {
        try{
          const goalTrackList = await getTrackGoalList();
          setGoalTrackListItems(goalTrackList);

          console.log('goalTrackList', goalTrackList);
        
        } catch (error) {
          console.error("Failed to fetch goals:", error);
        }
      }  
      fetchGoals();
    }, []);



  return (
    <div>
    <div>GoalTrackPage</div>
    <GoalTrackList goalTrackListItems={goalTrackListItems} />
    </div>
  );
}
