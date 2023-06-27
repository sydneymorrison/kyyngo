import { useState } from 'react';
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
  function onSubmitGoalPostForm (evt) {
    evt.preventDefault();
  }

  
  return (
    <div>
      <form onSubmit={onSubmitGoalPostForm}>
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

          {/* //Input for icon */}
          <label> Icon</label>
          <input
            name="icon"
            value={goalFormData.icon}
            onChange={handleChange}
          />

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
          <label> Category</label>
          <input
            name="category"
            value={goalFormData.category}
            onChange={handleChange}
          />


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
