import React from 'react';
import Header from './Header';
import Download from './Download';
import Team from './Team';

const Landing = props => {
  return (
    <React.Fragment>
      <Header />
      <Team />
      <Download />
    </React.Fragment>
  );
};

export default Landing;
