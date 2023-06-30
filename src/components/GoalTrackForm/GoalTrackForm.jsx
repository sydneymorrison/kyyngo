import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { createGoalTrackForm } from '../../utilities/milestones-api';
// import { getTrackGoalList } from '../../utilities/milestones-api';
import './GoalTrackForm.css';


export default function TrackGoalForm( { goalTrackListItems } ) {
    const [trackGoalFormData, setTrackGoalFormData] = useState({
        currentDate: "",
        milestoneDescription: "",
        timeAllocation: { hours: 0, minutes: 0 },
        isCompleted: "",
        goalId: "",
      });
    

    //Handle Change parse to numbers
    function handleChange(evt) {
      const {name, value} = evt.target;

      if (name === "timeAllocation.hours" || name === "timeAllocation.minutes") {
        const field = name.split(".")[1];

        setTrackGoalFormData(function(prevState) {
          return {
            ...prevState,
            timeAllocation: {
              ...(prevState.timeAllocation || {}),
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
          console.log("Form Data:", trackGoalFormData);
          //Send a POST request to create a new Milestone from the Milestone Schema
          const newMilestone = await createGoalTrackForm({ 
            currentDate: trackGoalFormData.currentDate,
            milestoneDescription: trackGoalFormData.milestoneDescription,
            timeAllocation: {
              hours: trackGoalFormData.timeAllocation.hours,
              minutes: trackGoalFormData.timeAllocation.minutes,
            },
            isCompleted: trackGoalFormData.isCompleted,
            goalId: trackGoalFormData.goalId,
          });
      
          //Clear the form data
          setTrackGoalFormData({
            currentDate: "",
            // goalId: "",
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
            
            {/* //Input for Current Date */}
            <label> Today's Date</label>
            <input
              name="currentDate"
              value={trackGoalFormData.currentDate}
              onChange={handleChange}
            />


            {/* Input for Goal */}
            <label>Goal</label>
            <select
              name="goalId"
              value={trackGoalFormData.goalId}
              onChange={handleChange}
            >
              <option value="" className="goalTrackFormOption">
                Select a goal
              </option>
              {goalTrackListItems &&
                goalTrackListItems.length > 0 &&
                goalTrackListItems[0].goalId.map((goal) => (
                  <option key={goal._id} value={goal._id}>
                    {goal.title}
                  </option>
                ))}
            </select>
      
    
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
