import './GoalDetailList.css';
import GoalDetailCard from '../../components/GoalDetailCard/GoalDetailCard';
import React from 'react'

export default function GoalDetailList( { goalDetailItems }) {


  return (
    <div>
    <GoalDetailCard goalDetailItems={ goalDetailItems } />
    </div>
  )
}
