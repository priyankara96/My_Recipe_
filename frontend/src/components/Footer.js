import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join with us to receive our new recipes !
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'> 
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
         
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>My Recipe</h2>
            <Link to='#'>Sign-Up</Link>
            <Link to='/'>Home</Link>
          </div>

          <div className='footer-link-items'>
            <h2>&nbsp;</h2>
            <Link to='#'>Recipes</Link>
            <Link to='#'>Offers</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Contact&nbsp;Us</h2>
            <Link to='#'>Contact</Link>
            <Link to='#'>Suggestions</Link>
          </div>

          <div className='footer-link-items'>
            <h2>&nbsp;</h2>
            <Link to='#'>FAQs</Link>
            <Link to='#'>Feedback</Link>
          </div>
        
          <div className='footer-link-items'>
            <h2>Social&nbsp;Media</h2>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Facebook</Link>
          </div>
          
          <div className='footer-link-items'>
            <h2>&nbsp;</h2>
            <Link to='#'>Youtube</Link>
            <Link to='#'>Twitter</Link>
          </div>

        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='#' className='social-logo'>
            Sri Lanka
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'><br/>My Recipe © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='#'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='#'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='#'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='#'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;