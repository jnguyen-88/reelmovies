import React from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

const Header = props => {
  return (
    <header className='masthead text-center text-white'>
      <Navigation />
      <div className='masthead-content'>
        <h1 className='masthead-heading mb-0'>Reel Movies</h1>
        <p>powered by omdb</p>
        <SearchForm />
      </div>
      <div className='bg-circle-1 bg-circle'></div>
      <div className='bg-circle-2 bg-circle'></div>
      <div className='bg-circle-3 bg-circle'></div>
      <div className='bg-circle-4 bg-circle'></div>
    </header>
  );
};

export default Header;
