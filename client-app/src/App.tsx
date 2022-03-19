import React, { useEffect, useState } from 'react';
import './assets/styles/App.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Activity } from './models/activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((resp) => {
        console.log(resp);
        setActivities(resp.data);
      });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <FontAwesomeIcon icon={faUsers} />
        <h2>ReactNetwork</h2>
      </header>
      <main>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
