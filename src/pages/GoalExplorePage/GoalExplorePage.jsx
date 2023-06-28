import React, { useState, useEffect } from 'react';
import'./GoalExplorePage.css';
import GoalList from '../../components/GoalList/GoalList';

//API Routes
import { getGoalList } from '../../utilities/goals-api';


export default function GoalExplorePage() {

  const [goalListItems, setGoalListItems] = useState([]);


  //Set up useEffect to fetch goal List items
  useEffect(() => {
    async function fetchGoalList() {
    try {
      const goalsList = await getGoalList();
      setGoalListItems(goalsList);
    } catch (error) {
      console.log('Failed to retrieve goal items:', error);
    }
  }
    fetchGoalList();
}, []);

  return (
    <div>
    <div>GoalExplorePage</div>
    <GoalList goalListItems={goalListItems} />
    </div>
  )
}
