import './GoalCommentList.css'
import GoalCommentCard from '../../components/GoalCommentCard/GoalCommentCard';
import React from 'react'

export default function GoalCommentList( { goalDetailItems } ) {

  const comments = goalDetailItems?.comments || [];
  
  return (
        <div>
            <div>GoalCommentList</div>
            {comments.length > 0 ? (
                    <ul>
                        {comments.map((comment) => (
                        <GoalCommentCard
                            key={comment._id}
                            comment={comment.comment}
                            createdAt={comment.createdAt}
                        />
                        ))}
                    </ul>
                ) : (
                <p>No comments yet!</p>
                )}
                </div>
              );
            }     
