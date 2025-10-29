import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Heart, DollarSign, Users, Target } from 'lucide-react';
import '../styles/Donate.css';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [25, 50, 100, 250, 500, 1000];

  const impactAreas = [
    {
      icon: <Heart size={48} />,
      title: 'Crisis Support',
      description: 'Fund 24/7 crisis intervention services and immediate support for veterans in need.'
    },
    {
      icon: <Users size={48} />,
      title: 'Community Programs',
      description: 'Support peer groups, wellness programs, and community events that foster connection.'
    },
    {
      icon: <Target size={48} />,
      title: 'QPR Training',
      description: 'Provide suicide prevention training to community members and first responders.'
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Resource Access',
      description: 'Ensure veterans can access mental health care, financial counseling, and other vital services.'
    }
  ];

  return (
    <div className="donate-container">
      <Navbar />
      
      <section className="donate-hero">
        <div className="donate-hero-content">
          <h1 className="donate-title">Make a Difference</h1>
          <p className="donate-subtitle">Your Support Saves Lives and Strengthens Our Veteran Community</p>
        </div>
      </section>

      <section className="donate-form-section">
        <div className="donate-form-container">
          <div className="donate-form-card">
            <h2>Select Your Donation Amount</h2>
            <div className="donation-amounts">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className={`amount-button ${selectedAmount === amount ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="custom-amount">
              <label>Or enter a custom amount:</label>
              <div className="custom-amount-input">
                <span className="dollar-sign">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                />
              </div>
            </div>
            <Button className="btn-primary donate-button">
              Donate {customAmount ? `$${customAmount}` : selectedAmount ? `$${selectedAmount}` : ''}
            </Button>
            <p className="donate-note">Your donation is tax-deductible. We are a 501(c)(3) organization.</p>
          </div>
        </div>
      </section>

      <section className="donate-impact">
        <div className="donate-impact-container">
          <h2>Where Your Donation Goes</h2>
          <div className="impact-grid">
            {impactAreas.map((area, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-stats">
        <div className="donate-stats-container">
          <h2>Our Impact by the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2,000+</div>
              <div className="stat-label">Veterans Helped</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">QPR Trainings</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Crisis Support</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Community Events</div>
            </div>
          </div>
        </div>
      </section>

      <section className="donate-other-ways">
        <div className="donate-other-container">
          <h2>Other Ways to Support</h2>
          <div className="other-ways-grid">
            <div className="other-way-card">
              <h3>Volunteer</h3>
              <p>Share your time and skills to support our programs and events.</p>
              <Button className="btn-outline">Learn More</Button>
            </div>
            <div className="other-way-card">
              <h3>Sponsor an Event</h3>
              <p>Partner with us to sponsor community events and training sessions.</p>
              <Button className="btn-outline">Contact Us</Button>
            </div>
            <div className="other-way-card">
              <h3>Monthly Giving</h3>
              <p>Become a sustaining donor with recurring monthly contributions.</p>
              <Button className="btn-outline">Set Up Monthly Gift</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;