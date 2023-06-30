import React from 'react';
import './GoalTrackList.css';

import GoalTrackForm from '../../components/GoalTrackForm/GoalTrackForm'


export default function GoalTrackList( { goalTrackListItems } ) {
    return (
    <div className="goalTrackListContainer">
        <GoalTrackForm goalTrackListItems={goalTrackListItems} />
      </div>
);
}
