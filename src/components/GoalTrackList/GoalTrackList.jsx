import React from 'react';
import './GoalTrackList.css';

import GoalTrackForm from '../../components/GoalTrackForm/GoalTrackForm'


export default function GoalTrackList( { goals }  ) {
    return (
    <div className="goalTrackListContainer">
        <GoalTrackForm goalTrackListItems={goals} />
      </div>
);
}
