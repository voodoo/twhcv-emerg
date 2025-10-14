import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Users, Calendar, Heart, MessageCircle } from 'lucide-react';
import '../styles/Community.css';

const Community = () => {
  const communityFeatures = [
    {
      icon: <Users size={48} />,
      title: 'Peer Support Groups',
      description: 'Connect with fellow veterans who understand your experiences. Share stories, challenges, and victories in a safe, supportive environment.'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Community Events',
      description: 'Participate in regular meetups, workshops, and social gatherings designed to foster connections and provide valuable resources.'
    },
    {
      icon: <Heart size={48} />,
      title: 'Wellness Programs',
      description: 'Access mental health resources, fitness activities, and holistic wellness programs tailored for veterans and their families.'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Online Forums',
      description: 'Join our private online community to connect with others, ask questions, and find support anytime, anywhere.'
    }
  ];

  return (
    <div className="community-container">
      <Navbar />
      
      <section className="community-hero">
        <div className="community-hero-content">
          <h1 className="community-title">Join Our Community</h1>
          <p className="community-subtitle">Building Connections, Saving Lives, Supporting Each Other</p>
        </div>
      </section>

      <section className="community-intro">
        <div className="community-intro-container">
          <h2>You Are Not Alone</h2>
          <p>
            Our community is built on the foundation of mutual support, understanding, and shared 
            experiences. Whether you're a veteran, active duty service member, or a family member, 
            you'll find a welcoming space where your voice matters and your story is valued.
          </p>
          <p>
            Together, we create a network of support that saves lives and helps each member thrive. 
            Our community provides resources, friendship, and hope to all who need it.
          </p>
        </div>
      </section>

      <section className="community-features">
        <div className="community-features-container">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {communityFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-testimonials">
        <div className="testimonials-container">
          <h2>Stories from Our Community</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Finding this community literally saved my life. I was at my lowest point, and the 
                support I received here gave me hope and a reason to keep going."
              </p>
              <p className="testimonial-author">- Army Veteran</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "As a family member of a veteran struggling with PTSD, this community provided me 
                with the resources and understanding I desperately needed."
              </p>
              <p className="testimonial-author">- Military Spouse</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The peer support groups helped me realize I'm not alone in my struggles. Meeting 
                others who truly understand has been transformative."
              </p>
              <p className="testimonial-author">- Marine Corps Veteran</p>
            </div>
          </div>
        </div>
      </section>

      <section className="community-cta">
        <div className="community-cta-content">
          <h2>Ready to Join?</h2>
          <p>Take the first step toward connection and support. Our community is here for you.</p>
          <div className="community-cta-buttons">
            <Button className="btn-primary">Get Started</Button>
            <Button onClick={() => window.location.href = '/988'} className="btn-outline-white">Need Help Now?</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;