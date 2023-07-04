import './GoalCommentList.css'
import GoalCommentCard from '../../components/GoalCommentCard/GoalCommentCard';
import React from 'react'

export default function GoalCommentList( { goalDetailItems } ) {

  const comments = goalDetailItems?.comments || [];
  
  return (
        <div className="goalCommentListContainer">
            <h1>Kyyngo Community</h1>
            {comments.length > 0 ? (
                      <div>
                        {comments.map((comment) => (
                        <GoalCommentCard
                            key={comment._id}
                            comment={comment.comment}
                            createdAt={comment.createdAt}
                            goalDetailItems={goalDetailItems}

                        />
                        ))}
                        </div>
                ) : (
                <p>No comments yet!</p>
                )}
                </div>
              );
            }     
