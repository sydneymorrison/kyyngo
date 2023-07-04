import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import NavBarDropdown from '../NavBarDropdown/NavBarDropdown';
import KyyngoLogo from '../../components/KyyngoLogo/KyyngoLogo'
import './NavBar.css';

//Images


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="navContainer">
      <nav className="nav navFont">
        <KyyngoLogo className="navBarLogo" />
        <span>Welcome, {user.name}</span>
        <Link to="/">Explore</Link>
        &nbsp; | &nbsp;
        <Link to="/milestones/new">Track</Link>
        &nbsp;&nbsp;
        <Link to="/goals/chat">Goals</Link>
        &nbsp;&nbsp;
        <Link to="/profile">Profile</Link>
        &nbsp;&nbsp;
        {/* <Link to="/settings">Settings</Link> */}
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        <div><NavBarDropdown /></div>
      </nav>
    </div>
  );
}