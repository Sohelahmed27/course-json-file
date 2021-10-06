import React from 'react';
import './About.css'

const About = () => {
  return (
     
    <div className='about-us'>
      <div className='image-about'>
      <img className='img-fluid' src='./images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg' alt=''/>
      </div>
      
      <div>
        <h1 className='misson'>MISSION</h1>
          <p> 1. To become country's Best   English Language center by the end of 2025.
          </p>
         <p> 
              2. To spread nation's First ever English Language Franchise right across the Globe with an intention of nurturing outstanding talents and optimizing your possibilities through English Language Skills.
          </p>


          <h1 className='misson'>DESCRIPTION</h1>

          <p>The center is primarily offering diverse courses in IELTS, Franch Language,Chines, Arabic and Spoken English, which are carefully tailored to meet the requirement of wide array of candidates, irrespective of students or executives. Upcoming courses are SAT|GRE|GMAT|Pearson Test of English.</p>
          <p>The center is professionally managed by management professionals to ensure professional service to learners, and Academic & Advisory Board boasts of having internationally recognized scholar in English Language Research, English Language Teaching(TESOL),Top scorers in International English Language Proficiency Tests (IELTS, TOEFL), and highly successful executives in International Business
        </p>
    </div>
  </div>

    
  );
};

export default About;