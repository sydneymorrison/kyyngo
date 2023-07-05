import React, { useState } from "react";
// import React, { useState, useEffect } from 'react';
import { createGoalTrackForm } from "../../utilities/milestones-api";
// import { getTrackGoalList } from '../../utilities/milestones-api';
import "./GoalTrackForm.css";

export default function TrackGoalForm({ goals, goalTrackListItems }) {
  const [trackGoalFormData, setTrackGoalFormData] = useState({
    currentDate: "",
    milestoneDescription: "",
    timeAllocation: { hours: 0, minutes: 0 },
    isCompleted: "",
    goalId: "",
  });

  //Handle Change parse to numbers
  function handleChange(evt) {
    const { name, value } = evt.target;

    if (name === "timeAllocation.hours" || name === "timeAllocation.minutes") {
      const field = name.split(".")[1];

      setTrackGoalFormData(function (prevState) {
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

        //MADE UPDATE HERE
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
      <div className="goalTrackFormComponent">
        <form className="goalTrackForm" onSubmit={onSubmitTrackGoalPostForm}>
          {/* //Input for Current Date */}
          <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel"> Today's Date</label>
            <input
              name="currentDate"
              value={trackGoalFormData.currentDate}
              onChange={handleChange}
              className="goalTrackFormInput"
            />
          </div>


  {/* DO NOT DELETE */}
          {/* Input for Goal */}
          {/* <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel">Goal</label>
            <select
              name="goalId"
              value={trackGoalFormData.goalId}
              onChange={handleChange}
              className="goalTrackFormSelect"
            >
              <option value="" className="goalTrackFormOption">
                Select a goal
              </option>
              {goals &&
                goals.length > 0 &&
                goals.map((goal) => (
                  <option key={goal._id} value={goal._id}>
                    {goal.title}
                  </option>
                ))}
            </select>
          </div> */}
    {/* DO NOT DELETE */}

          {/* //Input for Milestone Description */}
          <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel">Milestone Description</label>
            <input
              name="milestoneDescription"
              value={trackGoalFormData.milestoneDescription}
              onChange={handleChange}
              className="goalTrackFormInput"
            />
          </div>

          {/* //Input for Time Allocation - Hours */}
          <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel">Hours</label>
            <input
              type="number"
              name="timeAllocation.hours"
              value={trackGoalFormData.timeAllocation.hours}
              onChange={handleChange}
              inputMode="numeric"
              min="0"
              className="goalTrackFormInput"
            />
          </div>

          {/* //Input for Time Allocation - Hours */}
          <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel">Minutes</label>
            <input
              type="number"
              name="timeAllocation.minutes"
              value={trackGoalFormData.timeAllocation.minutes}
              onChange={handleChange}
              inputMode="numeric"
              min="0"
              className="goalTrackFormInput"
            />
          </div>

          {/* //Input for Completion */}
          <div className="goalTrackFormRow">
            <label className="goalTrackFormLabel">Completion Status</label>
            <select
              name="isCompleted"
              value={trackGoalFormData.isCompleted}
              onChange={handleChange}
              className="goalTrackFormSelect"
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* //Submit Button */}
          <div className="goalPostFormButtonContainer">
            <button className="goalTrackFormButton" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
