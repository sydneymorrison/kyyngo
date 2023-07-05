import React, { useState } from 'react';
import { createComment } from '../../utilities/comments-api';
// import { createComment } from '../../utilities/goals-api';
import { useParams } from 'react-router-dom';
// import { useAuth } from '../../hooks/auth';
import './GoalCommentForm.css';


export default function GoalCommentForm() {


// const { user } = useAuth();
// const userId = user._id;

const [commentFormData, setCommentFormData] = useState({
    comment: ''
});


//Capture the id from the goal id from the GoalDetailList Page using Params
const { id } = useParams(); 


function handleChange(evt) {
    const newCommentFormData = { ...commentFormData, [evt.target.name]: evt.target.value };
    setCommentFormData(newCommentFormData);
  }



async function handleSubmit(evt) {
    evt.preventDefault();

    console.log(commentFormData);

    try {
        const newComment = await createComment(id,
        commentFormData
        );
    
        console.log('Submitted comment', newComment);
    

        //Clear the comment
        setCommentFormData({ comment: '' });
    
    } catch (error) {
        console.error('Failed to submit comment:', error.message);
    }
}



  return (
    <div className="goalCommentFormContainer">
    {/* Form for comment */}
    <form onSubmit={handleSubmit}>
        <label className="goalCommentFormLabel">
            <input
                type="text"
                name="comment"
                value={commentFormData.comment}
                onChange={handleChange}
                className="goalCommentFormInput"
            />
        </label>
        <button className="goalCommentFormButton" type="submit">Add Comment</button>
    </form>
    </div>
  );
}
