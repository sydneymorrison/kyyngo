import { useState } from 'react';
// import iconDatabase from '../../database/iconDatabase';
import emojiDatabase from '../../database/emojiDatabase';
import goalsCategoryDatabase from '../../database/goalsCategoryDatabase';
import { createGoal } from '../../utilities/goals-api';
import './GoalPostForm.css';



export default function GoalPostForm() {

  const [goalFormData, setGoalFormData] = useState({
    title: "",
    description: "",
    icon: "",
    startDate: "",
    endDate: "",
    category: "",
    link: "",
  });

  //Handle Change Function

  function handleChange(evt) {
    const newGoalFormData = { ...goalFormData, [evt.target.name]: evt.target.value };
    setGoalFormData(newGoalFormData);
  }


  //Handle Submit Function
  async function onSubmitGoalPostForm (evt) {
    evt.preventDefault();

  try {
    //Send a POST request to create a new Goal
    const newGoal = await createGoal({ 
      title: goalFormData.title,
      description: goalFormData.description,
      icon: goalFormData.icon,
      startDate: goalFormData.startDate,
      endDate: goalFormData.endDate,
      category: goalFormData.category,
      link: goalFormData.link, 
    });

    //Clear the form data
    setGoalFormData({
      title: "",
      description: "",
      icon: "",
      startDate: "",
      endDate: "",
      category: "",
      link: ""
    });

    // Handle the successful response
    console.log("New goal created:", newGoal);

  } catch (error) {
    // Handle the error
    console.error("Failed to create goal:", error.message);

  }

    // Send goalFormData to the backend to calculate progress
    // Update the goal progress value in the backend/database
    // Redirect to the appropriate page or update the UI as needed

  }

  
  return (
    <div className="goalPostFormContainer">
      <form className="goalPostForm" onSubmit={onSubmitGoalPostForm}>
        {/* //Input for Title */}
        <label> Title</label>
        <input
          name="title"
          value={goalFormData.title}
          onChange={handleChange}
        />

          {/* //Input for Description */}
          <label> Description</label>
          <input
            name="description"
            value={goalFormData.description}
            onChange={handleChange}
          />

          {/* //Input for Icon */}
          <label>Icon</label>
          <select name="icon" value={goalFormData.icon} onChange={handleChange}>
            <option value="">Select an icon</option>
            {emojiDatabase.map((emoji) => (
              <option key={emoji.icon} value={emoji.icon}>
                {emoji.icon}
              </option>
            ))}
          </select>

          {/* //Input for Start Date */}
          <label> Start Date</label>
          <input
            name="startDate"
            value={goalFormData.startDate}
            onChange={handleChange}
          />

          {/* //Input for End Date */}
          <label> End Date</label>
          <input
            name="endDate"
            value={goalFormData.endDate}
            onChange={handleChange}
          />

          {/* //Input for Category */}
          <label>Category</label>
          <select name="category" value={goalFormData.category} onChange={handleChange}>
            {goalsCategoryDatabase.map((category) => (
              <option key={category.label} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>


          {/* //Input for Link */}
          <label> Link</label>
          <input
            name="link"
            value={goalFormData.link}
            onChange={handleChange}
          />

          {/* //Submit Button */}
          <button type="submit">Submit</button>

    </form>
    </div>
  )
}
