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

//Profile Components
import ProfilePage from '../ProfilePage/ProfilePage';
import ProfileFormPage from '../ProfileFormPage/ProfileFormPage'


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Goals Routes */}
              <Route path="/" element={<GoalExplorePage user={user} setUser={setUser} />} />
              <Route path="/goals/chat" element={<GoalChatPage user={user} setUser={setUser} />} />
              <Route path="/goals/settings" element={<NavBarDropdown user={user} setUser={setUser} />} />
              <Route path="/goals/new" element={<GoalPostFormPage user={user} setUser={setUser} />} />

              {/* Track Routes */}
              <Route path="/milestones/new" element={<GoalTrackPage user={user} setUser={setUser} />} />

              {/* Profile Routes */}
              <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
              <Route path="/profiles/new" element={<ProfileFormPage user={user} setUser={setUser} />} />

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
