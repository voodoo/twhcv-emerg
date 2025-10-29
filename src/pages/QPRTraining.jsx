import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { CheckCircle } from 'lucide-react';
import '../styles/QPRTraining.css';

const QPRTraining = () => {
  return (
    <div className="qpr-training-container">
      <Navbar />
      
      <section className="qpr-training-hero">
        <div className="qpr-training-hero-content">
          <h1 className="qpr-training-title">QPR Training</h1>
          <p className="qpr-training-subtitle">Question, Persuade, Refer - Learn How to Save a Life</p>
        </div>
      </section>

      <section className="qpr-training-content">
        <div className="qpr-training-container-inner">
          <div className="qpr-training-intro">
            <h2>What is QPR?</h2>
            <p>
              QPR stands for Question, Persuade, and Refer—the three simple steps that anyone can 
              learn to help save a life from suicide. Just as people trained in CPR and the Heimlich 
              Maneuver help save thousands of lives each year, people trained in QPR learn how to 
              recognize the warning signs of a suicide crisis and how to question, persuade, and refer 
              someone to help.
            </p>
          </div>

          <div className="qpr-steps">
            <div className="qpr-step">
              <div className="qpr-step-letter">Q</div>
              <h3>Question</h3>
              <p>
                Question the individual directly about suicidal thoughts. Research shows that asking 
                someone if they are thinking about suicide does not increase suicides or suicidal 
                thoughts. In fact, it can provide relief and be the first step toward recovery.
              </p>
            </div>
            <div className="qpr-step">
              <div className="qpr-step-letter">P</div>
              <h3>Persuade</h3>
              <p>
                Persuade the person to seek and accept help. Listen without judgment and offer hope. 
                Let them know that help is available and that suicidal thoughts are temporary. Most 
                people who survive a suicide attempt are glad they lived.
              </p>
            </div>
            <div className="qpr-step">
              <div className="qpr-step-letter">R</div>
              <h3>Refer</h3>
              <p>
                Refer the individual to appropriate resources. This might include calling the Veterans 
                Crisis Line (988, press 1), accompanying them to a mental health professional, or helping 
                them access emergency services if needed.
              </p>
            </div>
          </div>

          <div className="qpr-training-benefits">
            <h2>Training Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Learn to recognize warning signs of suicide</p>
              </div>
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Gain confidence in asking about suicidal thoughts</p>
              </div>
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Understand how to persuade someone to get help</p>
              </div>
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Know appropriate resources for referrals</p>
              </div>
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Receive certification upon completion</p>
              </div>
              <div className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <p>Make a real difference in your community</p>
              </div>
            </div>
          </div>

          <div className="qpr-training-cta">
            <h2>Get Trained Today</h2>
            <p>QPR training is available online and in-person. Contact us to learn more about upcoming training sessions.</p>
            <div className="qpr-training-buttons">
              <Button className="btn-primary">Request Training Information</Button>
              <Button onClick={() => window.location.href = '/988'} className="btn-outline">Get Help Now</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QPRTraining;