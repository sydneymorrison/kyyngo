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


    //Handle Change parse to numbers
    function handleChange(evt) {
      const {name, value} = evt.target;

      if (name === "timeAllocation.hours" || name === "timeAllocation.minutes" ) {
        const field = name.split(".")[1];

        setTrackGoalFormData(function(prevState) {
          return {
            ...prevState,
            timeAllocation: {
              ...prevState.timeAllocation,
              [field]: parseInt(value, 10) || 0,
              },
           };
        });
      } else {
        setTrackGoalFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    }  

      //Handle Submit Function
    async function onSubmitTrackGoalPostForm(evt) {
        evt.preventDefault();

        try {
          //Send a POST request to create a new Milestone from the Milestone Schema
          const newMilestone = await createGoalTrackForm({ 
            currentDate: new Date(),
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
            timeAllocation: { hours: 0, minutes: 0 },
            isCompleted: "Not Completed",
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
          <form className="goalTrackForm" onSubmit={onSubmitTrackGoalPostForm}>
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
    
              {/* //Input for Time Allocation - Hours */}
              <label>Hours</label>
              <input
                type="number"
                name="timeAllocation.hours"
                value={trackGoalFormData.timeAllocation.hours}
                onChange={handleChange}
                inputMode="numeric"
                min="0" 
              />

              {/* //Input for Time Allocation - Hours */}
              <label>Minutes</label>
              <input
                type="number"
                name="timeAllocation.minutes"
                value={trackGoalFormData.timeAllocation.minutes}
                onChange={handleChange}
                inputMode="numeric"
                min="0" 
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
