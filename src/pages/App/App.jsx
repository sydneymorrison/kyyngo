import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

//Goal Components
import GoalExplorePage from '../GoalExplorePage/GoalExplorePage';
import GoalTrackPage from '../GoalTrackPage/GoalTrackPage';
import GoalChatPage from '../GoalChatPage/GoalChatPage';
import NavBarDropdown from '../../components/NavBarDropdown/NavBarDropdown';
import GoalPostFormPage from '../GoalPostFormPage/GoalPostFormPage';
import GoalPostFormUpdate from '../../components/GoalPostFormUpdate/GoalPostFormUpdate';
import GoalDetailPage from '../GoalDetailPage/GoalDetailPage';
import GoalCommentForm from '../../components/GoalCommentForm/GoalCommentForm';

//Profile Components
import ProfilePage from '../ProfilePage/ProfilePage';
import ProfileFormPage from '../ProfileFormPage/ProfileFormPage'


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar className="navContainer" user={user} setUser={setUser} />
            <Routes>
              {/* Goals Routes */}
              <Route path="/" element={<GoalExplorePage user={user} setUser={setUser} />} />
              <Route path="/goals/chat" element={<GoalChatPage user={user} setUser={setUser} />} />
              <Route path="/goals/settings" element={<NavBarDropdown user={user} setUser={setUser} />} />
              <Route path="/goals/new" element={<GoalPostFormPage user={user} setUser={setUser} />} />
              <Route path="/goals/:id/edit" element={<GoalPostFormUpdate user={user} setUser={setUser} />} />
              <Route path="/goals/:id" element={<GoalDetailPage user={user} setUser={setUser} />} />
              /api/profiles/existing-profile

              {/* Track Routes */}
              <Route path="/milestones/new" element={<GoalTrackPage user={user} setUser={setUser} />} />

              {/* Profile Routes */}
              <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
              <Route path="/profiles/new" element={<ProfileFormPage user={user} setUser={setUser} />} />
              <Route path="/profiles/existing-profile" element={<ProfileFormPage user={user} setUser={setUser} />} />

              {/* Comments Routes */}
              <Route path="/goals/:id/comments" element={<GoalCommentForm user={user} setUser={setUser} />} />
              <Route path="/goals/:id/comments" element={<GoalDetailPage user={user} setUser={setUser} />} />


              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
