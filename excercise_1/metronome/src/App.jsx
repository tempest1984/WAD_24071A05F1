import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import Albums from './pages/Albums';
import Subscription from './pages/Subscription';
import Profile from './pages/Profile';

function AppLayout({ children }) {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  if (isLogin) {
    return <>{children}</>;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {children}
        <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: 'auto' }}>
          © 2026 metronome 24071A05F1. All rights reserved.
        </div>
      </div>
      <Player />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
