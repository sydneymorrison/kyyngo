import React, { useState, useEffect } from 'react';
import { createGoalTrackForm } from '../../utilities/milestones-api';
import { getTrackGoalList } from '../../utilities/milestones-api';
import './GoalTrackForm.css';


export default function TrackGoalForm() {
    const [trackGoalFormData, setTrackGoalFormData] = useState({
        currentDate: "",
        goalId: "",
        milestoneDescription: "",
        timeAllocation: { hours: 0, minutes: 0 },
        isCompleted: "",
      });
    
    //Fetch Goals
    const [goals, setGoals] = useState([]);
    
    useEffect(() => {
      async function fetchGoals() {
        try{
          const goalTrackList = await getTrackGoalList();
          setGoals(goalTrackList);
        } catch (error) {
          console.error("Failed to fetch goals:", error.message);
        }
      }  
      fetchGoals();
    }, []);


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
            goalId: trackGoalFormData.goalId,
            milestoneDescription: trackGoalFormData.milestoneDescription,
            timeAllocation: trackGoalFormData.timeAllocation,
            isCompleted: trackGoalFormData.isCompleted,
 
          });
      
          //Clear the form data
          setTrackGoalFormData({
            currentDate: "",
            goalId: "",
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
    
              {/* //Select for Goal */}
              <label>Goal</label>
              <select 
                name="goalId"
                value={trackGoalFormData.goalId}
                onChange={handleChange}
              >
                <option value="">Select a goal</option>
                {goals.map((goal) => (
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
