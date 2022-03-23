import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from './models/activity';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './components/ActivityDashboard';
import { v4 as uuid } from 'uuid';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>('http://localhost:5000/api/activities')
      .then((resp) => {
        setActivities(resp.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreatedOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter((element) => element.id !== activity.id),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((activity) => activity.id !== id)]);
  }

  return (
    <Fragment>
      <AppHeader openForm={handleFormOpen} />
      <main>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreatedOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </main>
    </Fragment>
  );
}

export default App;
