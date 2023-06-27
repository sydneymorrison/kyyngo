import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

//Goal Import Components
import GoalExplorePage from '../GoalExplorePage/GoalExplorePage';
import GoalTrackPage from '../GoalTrackPage/GoalTrackPage';
import GoalChatPage from '../GoalChatPage/GoalChatPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBarDropdown from '../../components/NavBarDropdown/NavBarDropdown';
import GoalPostFormPage from '../GoalPostFormPage/GoalPostFormPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<GoalExplorePage user={user} setUser={setUser} />} />
              <Route path="/goals/track" element={<GoalTrackPage user={user} setUser={setUser} />} />
              <Route path="/goals/chat" element={<GoalChatPage user={user} setUser={setUser} />} />
              <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
              <Route path="/goals/settings" element={<NavBarDropdown user={user} setUser={setUser} />} />
              <Route path="/goals/new" element={<GoalPostFormPage user={user} setUser={setUser} />} />
              <Route path="/profiles/new" element={<ProfilePage user={user} setUser={setUser} />} />

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
