import { NavLink } from 'react-router-dom';
import { Home, ListMusic, Disc3, CreditCard, PlayCircle, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <PlayCircle size={32} />
        <span>Metronome</span>
      </div>
      
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        
        <NavLink 
          to="/playlist" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <ListMusic size={20} />
          <span>Playlist</span>
        </NavLink>
        
        <NavLink 
          to="/albums" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <Disc3 size={20} />
          <span>Albums</span>
        </NavLink>
        
        <NavLink 
          to="/subscription" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <CreditCard size={20} />
          <span>Subscription</span>
        </NavLink>
      </div>

      <div style={{ marginTop: 'auto' }} className="nav-links">
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <User size={20} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
