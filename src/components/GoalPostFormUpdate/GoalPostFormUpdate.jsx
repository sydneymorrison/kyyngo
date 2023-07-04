import { useState, useEffect } from 'react';
// import iconDatabase from '../../database/iconDatabase';
import emojiDatabase from '../../database/emojiDatabase';
import goalsCategoryDatabase from '../../database/goalsCategoryDatabase';
import { updateGoal } from '../../utilities/goals-api';
import { useLocation } from 'react-router-dom';
import './GoalPostFormUpdate.css';



export default function GoalPostFormUpdate( ) {

  const [goalFormData, setGoalFormData] = useState({
    title: "",
    description: "",
    icon: "",
    startDate: "",
    endDate: "",
    category: "",
    link: "",
  });

 //Transfering state from GoalExplorePage - transfering goal to this page
  const location = useLocation();
  const goal = location.state?.goal || null;


  //Use Effect for Update Functionality
  useEffect(() => {
    if (goal) {
      //Populate the form data with the existing goal

      setGoalFormData({
        title: goal.title || '',
        description: goal.description || '',
        icon: goal.icon || '',
        startDate: goal.startDate || '',
        endDate: goal.endDate || '',
        category: goal.category || '',
        link: goal.link || '', 
      });
    }
  }, [goal]);

  //Handle Change Function

  function handleChange(evt) {
    const newGoalFormData = { ...goalFormData, [evt.target.name]: evt.target.value };
    setGoalFormData(newGoalFormData);
  }


  //Handle Submit Function
  async function onSubmitGoalPostForm (evt) {
    evt.preventDefault();

  try {

    //UPDATE Functionality
    if (goal) {
      await updateGoal(goal._id, goalFormData);

      
      console.log('Goal updated successfully!');
    
  }
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

  } catch (error) {
    // Handle the error
    console.error("Failed to create/update goal:", error.message);

  }

  }

  
  return (
    <div>
    <h1 className="goalPostFormHeading">Update Goal</h1>
    <div className="goalPostUpdateFormContainer">
      <div className="goalPostFormComponent">
      <form className="goalPostForm" onSubmit={onSubmitGoalPostForm}>
        
        {/* //Input for Title */}
        <div className="goalPostFormRow">
        <label className="goalPostFormLabel"> Title</label>
        <input
          name="title"
          value={goalFormData.title}
          onChange={handleChange}
          className="goalPostFormInput"
        />
        </div>


          {/* //Input for Description */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel"> Description</label>
          <input
            name="description"
            value={goalFormData.description}
            onChange={handleChange}
            className="goalPostFormInput"
          />
          </div>


          {/* //Input for Icon */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel">Icon</label>
          <select className="goalPostFormSelect" name="icon" value={goalFormData.icon} onChange={handleChange}>
            <option value="">Select an icon</option>
            {emojiDatabase.map((emoji) => (
              <option key={emoji.icon} value={emoji.icon}>
                {emoji.icon}
              </option>
            ))}
          </select>
          </div>

          {/* //Input for Start Date */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel"> Start Date</label>
          <input
            name="startDate"
            value={goalFormData.startDate}
            onChange={handleChange}
            className="goalPostFormInput"
          />
          </div>

          {/* //Input for End Date */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel"> End Date</label>
          <input
            name="endDate"
            value={goalFormData.endDate}
            onChange={handleChange}
            className="goalPostFormInput"
          />
          </div>

          {/* //Input for Category */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel">Category</label>
          <select className="goalPostFormSelect" name="category" value={goalFormData.category} onChange={handleChange}>
            {goalsCategoryDatabase.map((category) => (
              <option key={category.label} value={category.label}>
                {category.label}
              </option>
            ))}
          </select>
          </div>


          {/* //Input for Link */}
          <div className="goalPostFormRow">
          <label className="goalPostFormLabel"> Link</label>
          <input
            name="link"
            value={goalFormData.link}
            onChange={handleChange}
            className="goalPostFormInput"
          />
          </div>

          {/* //Submit Button */}
          <div className="goalPostFormButtonContainer">
          <button className="goalPostFormButton" type="submit">Update</button>
          </div>

    </form>
    </div>
    </div>
    </div>
  )
}
