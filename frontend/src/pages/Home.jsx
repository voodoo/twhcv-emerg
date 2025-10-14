import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ExternalLink } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const resources = [
    {
      title: 'Veterans Crisis Line',
      description: 'This is a 24/7 confidential crisis support service for veterans and their loved ones. Veterans can access support by dialing 988 then pressing 1, chatting online, or texting 838255. This service is available to all veterans, regardless of their enrollment in VA benefits or health care.',
      link: 'https://www.veteranscrisisline.net'
    },
    {
      title: 'VA Suicide Prevention Program',
      description: 'The Department of Veterans Affairs offers ongoing support through local VA health care facilities and regional offices. They have specially trained suicide prevention coordinators available in each VA medical center across the country.',
      link: 'https://www.va.gov/health-care/health-needs-conditions/mental-health/suicide-prevention/'
    },
    {
      title: 'Suicide Prevention Resource Center (SPRC)',
      description: 'This is the only federally supported resource center devoted to advancing the implementation of the National Strategy for Suicide Prevention. It is funded by the Substance Abuse and Mental Health Services Administration (SAMHSA)',
      link: 'https://www.samhsa.gov/find-help/national-helpline'
    },
    {
      title: 'Give an Hour',
      description: 'Creating resilient individuals and communities by improving mental health and emotional wellbeing, one hour at a time.',
      link: 'https://giveanhour.org'
    },
    {
      title: 'National Institute of Mental Health (NIMH)',
      description: 'NIMH provides resources on suicide prevention, including brochures, infographics, and digital shareables. They also offer information on warning signs, risk factors, and treatments',
      link: 'https://www.nimh.nih.gov/health/topics/suicide-prevention'
    },
    {
      title: 'National Action Alliance for Suicide Prevention',
      description: 'This is a public-private partnership working to advance the National Strategy for Suicide Prevention.',
      link: 'https://theactionalliance.org'
    },
    {
      title: '988 Suicide & Crisis Lifeline',
      description: 'This service provides free and confidential emotional support to people in suicidal crisis or emotional distress 24/7 across the United States. Veterans can call or text 988 to connect with a trained crisis counselor.',
      link: 'https://988lifeline.org'
    },
    {
      title: 'Cohen Veterans Network',
      description: 'The Steven A. Cohen Military Family Clinics at Endeavors provide in-person and virtual high-quality, accessible, and integrated mental health care to Veterans, regardless of role while in uniform, discharge status, or combat experience, active duty service members (with a TRICARE referral), and military families.',
      link: 'https://endeavors.org/cohen-clinics/'
    },
    {
      title: 'Sound Off Veterans App',
      description: 'Sound Off is revolutionizing the way Veterans seek and receive mental health care. Just download the app, confirm your geographic region, and you'll receive an anonymous, permanent username.',
      link: 'https://sound-off.com/'
    },
    {
      title: 'Texas Suicide Prevention Symposium',
      description: 'Since 2008, we have provided important training opportunities for Texans interested in improving suicide prevention for their organizations and communities.',
      link: 'https://texassuicideprevention.org/training/'
    },
    {
      title: 'National Veterans Financial Resource Center',
      description: 'After military service, Veterans work toward financial success. But finding financial tools can be a challenge since they are located in many different places. FINVET steps in as a one-stop website, making it easier for Veterans to find money resources and navigate their financial journey.',
      link: 'https://www.mirecc.va.gov/visn19/finvet/'
    }
  ];

  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3 className="hero-subtitle">Together With Hill Country Veterans</h3>
          <h1 className="hero-title">Reducing Veteran Suicide Through Awareness, Community & Action</h1>
          <div className="hero-buttons">
            <Button onClick={() => window.location.href = '/988'} className="btn-primary">Get Help</Button>
            <Button onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">Resources</Button>
            <Button onClick={() => window.location.href = '/community'} className="btn-secondary">Community</Button>
            <Button onClick={() => window.location.href = '/donate'} className="btn-secondary">Donate</Button>
          </div>
        </div>
      </section>

      {/* QPR Framework Section */}
      <section className="qpr-section">
        <div className="qpr-content">
          <div className="qpr-text">
            <h2 className="section-title">Ask a Question, Save a Life</h2>
            <div className="qpr-framework">
              <h4 className="qpr-subtitle"><span className="qpr-letter">Q</span>uestion | <span className="qpr-letter">P</span>ersuade | <span className="qpr-letter">R</span>efer</h4>
            </div>
            <p className="qpr-description">
              <strong>The QPR Framework:</strong> QPR provides guidance and training for the appropriate questions and responses to help someone in a suicidal situation. Question a veteran. Persuade them to seek help. Refer them to a professional.
            </p>
            <div className="qpr-buttons">
              <Button onClick={() => window.location.href = '/988'} className="btn-primary">Get Help</Button>
              <Button onClick={() => window.location.href = '/qpr'} className="btn-outline">QPR Training</Button>
            </div>
          </div>
          <div className="qpr-image">
            <img src="https://images.pexels.com/photos/8815456/pexels-photo-8815456.jpeg?auto=compress&cs=tinysrgb&h=800" alt="Veteran contemplation" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="stats-image">
            <img src="https://images.pexels.com/photos/8815097/pexels-photo-8815097.jpeg?auto=compress&cs=tinysrgb&h=800" alt="Veterans support" />
          </div>
          <div className="stats-text">
            <h2 className="section-title">Know the Statistics</h2>
            <p className="stats-description">
              The CDC estimates that 30-45 of our Hill Country neighbors die by suicide each year. 8-15 of them are veterans. It is estimated that each of these deaths impacts 135 others, directly or indirectly. That's about 4,000 to 6,000 family and friends struggling to survive their loss.
            </p>
            <div className="stats-buttons">
              <Button onClick={() => document.getElementById('resources').scrollIntoView({ behavior: 'smooth' })} className="btn-primary">Resources</Button>
              <Button onClick={() => window.location.href = '/community'} className="btn-outline">Community</Button>
              <Button onClick={() => window.open('https://www.mentalhealth.va.gov/suicide_prevention/data.asp', '_blank')} className="btn-outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources-section">
        <div className="resources-container">
          <h2 className="section-title-center">Quick Access to Resources for Suicide Intervention</h2>
          <p className="resources-subtitle">Click The Items Below to See More Information</p>
          
          <Accordion type="single" collapsible className="resources-accordion">
            {resources.map((resource, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="accordion-trigger">
                  <h4>{resource.title}</h4>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>{resource.description}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                    {resource.link} <ExternalLink size={16} />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-container">
          <h2 className="section-title-center">Upcoming Events</h2>
          <div className="event-divider"></div>
          <div className="event-card">
            <h3 className="event-title">Second Veterans Benefits Fair</h3>
            <h4 className="event-date">Thursday, September 3, 2026 | TBD</h4>
            <p className="event-description">
              <strong>Join Us!</strong> The Kerr County Veterans Service Office (VSO) is hosting an event dedicated to sharing vital information and connecting our veterans community with essential resources and support services.
            </p>
            <p className="event-location"><strong>Hill Country Youth Event Center (HCYEC)</strong></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;