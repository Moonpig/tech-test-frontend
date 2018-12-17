import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p className="place-holder" id="place-h-text"> ** moonpig main site entry point here -
    placeholder **
    </p>
    <div className="place-holder">
      <Link to="/new-job-cards">New Job Cards</Link>
    </div>
  </div>
);

export default Home;
