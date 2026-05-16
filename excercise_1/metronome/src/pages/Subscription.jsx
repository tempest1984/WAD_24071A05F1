import { Check } from 'lucide-react';

const Subscription = () => {
  return (
    <div className="page-container">
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>Choose Your Plan</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Listen without limits on your terms.</p>
      </div>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Free</h3>
          <div className="price">₹0<span>/month</span></div>
          <ul className="features-list">
            <li><Check size={18} color="var(--success)" /> Ad-supported music</li>
            <li><Check size={18} color="var(--success)" /> Standard audio quality</li>
            <li><Check size={18} color="var(--success)" /> Play on any device</li>
            <li style={{ color: 'var(--text-secondary)' }}> Offline listening</li>
          </ul>
          <button className="subscribe-btn">Current Plan</button>
        </div>

        <div className="pricing-card premium">
          <h3>Premium</h3>
          <div className="price">₹119<span>/month</span></div>
          <ul className="features-list">
            <li><Check size={18} color="var(--success)" /> Ad-free music listening</li>
            <li><Check size={18} color="var(--success)" /> High fidelity audio</li>
            <li><Check size={18} color="var(--success)" /> Play on any device</li>
            <li><Check size={18} color="var(--success)" /> Download to listen offline</li>
          </ul>
          <button className="subscribe-btn">Get Premium</button>
        </div>

        <div className="pricing-card">
          <h3>Family</h3>
          <div className="price">₹179<span>/month</span></div>
          <ul className="features-list">
            <li><Check size={18} color="var(--success)" /> Up to 6 Premium accounts</li>
            <li><Check size={18} color="var(--success)" /> Block explicit music</li>
            <li><Check size={18} color="var(--success)" /> High fidelity audio</li>
            <li><Check size={18} color="var(--success)" /> Download to listen offline</li>
          </ul>
          <button className="subscribe-btn">Get Family</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
