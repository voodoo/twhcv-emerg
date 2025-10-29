import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Phone, MessageSquare, ExternalLink } from 'lucide-react';
import '../styles/Help988.css';

const Help988 = () => {
  return (
    <div className="help-container">
      <Navbar />
      
      <section className="help-hero">
        <div className="help-hero-content">
          <h1 className="help-title">Veterans Crisis Line</h1>
          <p className="help-subtitle">24/7 Confidential Support for Veterans and Their Loved Ones</p>
        </div>
      </section>

      <section className="help-content-section">
        <div className="help-content-container">
          <div className="help-emergency">
            <h2>Get Help Now</h2>
            <div className="help-methods">
              <div className="help-method-card">
                <Phone size={48} className="help-icon" />
                <h3>Call</h3>
                <p className="help-number">988</p>
                <p>Then press 1</p>
              </div>
              <div className="help-method-card">
                <MessageSquare size={48} className="help-icon" />
                <h3>Text</h3>
                <p className="help-number">838255</p>
                <p>Available 24/7</p>
              </div>
              <div className="help-method-card">
                <ExternalLink size={48} className="help-icon" />
                <h3>Chat Online</h3>
                <Button 
                  onClick={() => window.open('https://www.veteranscrisisline.net/get-help-now/chat/', '_blank')}
                  className="btn-primary"
                >
                  Start Chat
                </Button>
              </div>
            </div>
          </div>

          <div className="help-info">
            <h2>You Are Not Alone</h2>
            <p>
              The Veterans Crisis Line is a free, confidential resource available to veterans, 
              service members, National Guard and Reserve members, and their families and friends—even 
              if you're not registered with VA or enrolled in VA health care.
            </p>
            <p>
              Trained responders understand the experiences and challenges faced by veterans and are 
              ready to help 24 hours a day, 7 days a week, 365 days a year.
            </p>
          </div>

          <div className="help-services">
            <h2>What We Provide</h2>
            <ul>
              <li>Confidential crisis intervention</li>
              <li>Caring, qualified responders</li>
              <li>Follow-up support</li>
              <li>Connection to VA and community resources</li>
              <li>Support for family and friends</li>
            </ul>
          </div>

          <div className="help-additional">
            <h2>Additional Resources</h2>
            <Button onClick={() => window.location.href = '/#resources'} className="btn-outline">View All Resources</Button>
            <Button onClick={() => window.location.href = '/community'} className="btn-outline">Join Community</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help988;