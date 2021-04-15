import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className='Footer'>
      <footer>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
        <div className='footer-social-icons'>
          <h4 className='_14'>Follow us on</h4>
          <ul className='social-icons'>
            <li>
              <a
                href='https://www.instagram.com/frc5032/'
                className='social-icon'
                target="_blank"
                rel="noreferrer"
              >
                <i className='fa fa-instagram'></i>
              </a>
              @frc5032
            </li>
            <li>
              <a
                href='https://twitter.com/frc5032'
                className='social-icon'
                target="_blank"
                rel="noreferrer"
              >
                <i className='fa fa-twitter'></i>
              </a>
              @FRC5032
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
