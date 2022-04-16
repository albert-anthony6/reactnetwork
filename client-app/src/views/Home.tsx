import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>Home Page</div>
      <h1>
        Go to <Link to="/activities">Activities</Link>
      </h1>
    </div>
  );
}
