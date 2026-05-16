import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="login-layout">
      <div className="login-card glass">
        <h2>{isLogin ? 'Welcome to Metronome' : 'Create an Account'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: 'var(--accent-hover)', fontWeight: '600', textDecoration: 'underline' }}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem' }}>
        © 2026 metronome 24071A05F1. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
