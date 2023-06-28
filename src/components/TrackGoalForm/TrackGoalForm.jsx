import { useState } from 'react';
import './TrackGoalForm.css';

import React from 'react'

export default function TrackGoalForm() {
    const [trackGoalFormData, setTrackGoalFormData] = useState({
        currentDate: "",
        title: "",
        milestoneDescription: "",
        timeAllocation: "",
        isCompleted: "",
      });
    
      //Handle Change Function
    
      function handleChange(evt) {
        const newTrackGoalFormData = { ...trackGoalFormData, [evt.target.name]: evt.target.value };
        setTrackGoalFormData(newTrackGoalFormData);
      }
    
      //Handle Submit Function
      function onSubmitTrackGoalPostForm (evt) {
        evt.preventDefault();
      }
    
      //Form Leverages Milestone Model
      
      return (
        <div className="goalTrackFormContainer">
          <form className="goalTrackForm" goalTrackFormContainer onSubmit={onSubmitTrackGoalPostForm}>
            {/* //Input for Title */}
            <label> Today's Date</label>
            <input
              name="currentDate"
              value={trackGoalFormData.currentDate}
              onChange={handleChange}
            />
    
              {/* //Input for Description */}
              <label>Title</label>
              <input
                name="title"
                value={trackGoalFormData.title}
                onChange={handleChange}
              />
    
              {/* //Input for Milestone Description */}
              <label>Milestone Description</label>
              <input
                name="milestoneDescription"
                value={trackGoalFormData.milestoneDescription}
                onChange={handleChange}
              />
    
              {/* //Input for Time Allocation */}
              <label>Time Allocation</label>
              <input
                name="timeAllocation"
                value={trackGoalFormData.timeAllocation}
                onChange={handleChange}
              />
    
              {/* //Input for Completion */}
              <label>Completion Status</label>
              <input
                name="isCompleted"
                value={trackGoalFormData.isCompleted}
                onChange={handleChange}
              />
    
              {/* //Submit Button */}
              <button type="submit">Submit</button>
    
        </form>
        </div>
      )
}
