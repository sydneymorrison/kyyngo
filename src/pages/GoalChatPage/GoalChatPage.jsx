import './GoalChatPage.css';
import React from 'react'
import ChatComponent from '../../components/ChatComponent/ChatComponent';



export default function GoalChatPage() {
  return (
    <div className="goalChatPageContainer">
    <h1>Goals Ai</h1>
    <div>
    <ChatComponent />
    </div>
    </div>
  )
}
