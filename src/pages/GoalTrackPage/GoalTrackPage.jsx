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
      try {
        const goalTrackList = await getTrackGoalList();
        setGoalTrackListItems(goalTrackList);
        console.log('goalTrackList_milestone', goalTrackList);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      }
    }
    fetchGoals();
  }, []);



  return (
    <div className="goalTrackPageContainer">
    <h1>Track a Goal</h1>
    <GoalTrackList goals={goalTrackListItems} />
    </div>
  );
}
