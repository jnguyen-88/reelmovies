import React from 'react';

const Navigation = props => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light fixed-top'
      id='mainNav'
    >
      <div className='container'>
        <a className='navbar-brand js-scroll-trigger' href='#'>
          Reel Movies
        </a>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          Menu
          <i class='fas fa-bars'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#team'>
                Team
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link js-scroll-trigger' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
