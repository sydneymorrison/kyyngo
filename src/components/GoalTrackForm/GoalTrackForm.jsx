import { useState } from 'react';
import { createGoalTrackForm } from '../../utilities/goals-api';
import './GoalTrackForm.css';
import React from 'react'

export default function TrackGoalForm() {
    const [trackGoalFormData, setTrackGoalFormData] = useState({
        currentDate: "",
        title: "",
        milestoneDescription: "",
        timeAllocation: { hours: 0, minutes: 0 },
        isCompleted: "",
      });
    
      //Handle Change Function
    
      function handleChange(evt) {
        const newTrackGoalFormData = { ...trackGoalFormData, [evt.target.name]: evt.target.value };
        setTrackGoalFormData(newTrackGoalFormData);
      }
    
      //Handle Submit Function
    async function onSubmitTrackGoalPostForm(evt) {
        evt.preventDefault();

        try {
          //Send a POST request to create a new Milestone from the Milestone Schema
          const newMilestone = await createGoalTrackForm({ 
            currentDate: trackGoalFormData.currentDate,
            title: trackGoalFormData.title,
            milestoneDescription: trackGoalFormData.milestoneDescription,
            timeAllocation: trackGoalFormData.timeAllocation,
            isCompleted: trackGoalFormData.isCompleted,
 
          });
      
          //Clear the form data
          setTrackGoalFormData({
            currentDate: "",
            title: "",
            milestoneDescription: "",
            timeAllocation: "",
            isCompleted: "",
          });
      
          // Handle the successful response
          console.log("New milestone goal created:", newMilestone);
      
        } catch (error) {
          // Handle the error
          console.error("Failed to create new milestone:", error.message);
      
        }

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
              <select
                name="isCompleted"
                value={trackGoalFormData.isCompleted}
                onChange={handleChange}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
    
              {/* //Submit Button */}
              <button type="submit">Submit</button>
    
        </form>
        </div>
      )
}
