import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from './models/activity';
import AppHeader from './components/AppHeader';

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
    <Fragment>
      <AppHeader />
      <main>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
}

export default App;
