import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='left-container text'>
                <h1>New Hopes Language Center</h1>
                <h5>Ultimate center for learner</h5>                              
                  </div>
                  
                </div>
                <div className='col-md-3'>
                  <div className='foooter-menu-container'>
                    <h3 className='text'> Quick Links</h3>
                    <ul className='text'>
                      <li className='footer-menu'>Home

                      </li>
                      <li className='footer-menu'>About us

                      </li>
                      <li className='footer-menu'>Courses

                      </li>
                      <li className='footer-menu'>Contact

                      </li>
                    </ul>

                  </div>
                </div>
                <div className="col-md-3 text">
                <div className="right-footer-container ">
                <h3>Sign up for the newsletter</h3> 
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                /> 
                <h5>Buttonwood, California.
Rosemead, CA 91770.</h5> 
                </div>
              </div>
              <div>
              <p className="text-center text">
                  <small>New Hopes © . All rights reserved.</small>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>

        
      
    
  );
};

export default Footer;