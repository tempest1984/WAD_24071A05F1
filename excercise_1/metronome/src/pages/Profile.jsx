import { Mail, CreditCard, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="page-container">
      <div className="page-header" style={{ marginBottom: '3rem' }}>
        <h1>Profile</h1>
      </div>

      <div className="glass" style={{ padding: '2rem', borderRadius: '16px', maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
            JD
          </div>
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>John Doe</h2>
            <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> john.doe@example.com
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CreditCard size={20} color="var(--accent-hover)" />
              <span style={{ fontWeight: '500' }}>Current Plan</span>
            </div>
            <span style={{ color: 'var(--text-secondary)' }}>Premium (₹119/month)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.3s' }} className="profile-btn">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Settings size={20} color="var(--text-secondary)" />
              <span style={{ fontWeight: '500' }}>Account Settings</span>
            </div>
          </div>

          <div 
            onClick={handleLogout}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', cursor: 'pointer', color: 'var(--danger)', marginTop: '1rem', transition: 'background 0.3s' }} 
            className="logout-btn"
          >
            <LogOut size={20} />
            <span style={{ fontWeight: '500' }}>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
