import React from 'react';
import Header from './Header';
import Download from './Download';
import Team from './Team';
import MovieList from './MovieList';

const Landing = props => {
  return (
    <React.Fragment>
      <Header />
      <MovieList />
      <Team />
      <Download />
    </React.Fragment>
  );
};

export default Landing;
