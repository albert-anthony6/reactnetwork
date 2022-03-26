import React, { Fragment, useEffect, useState } from 'react';
import { Activity } from './models/activity';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './components/ActivityDashboard';
import Loader from './components/Loader';
import agent from './api/agent';
import { v4 as uuid } from 'uuid';
import { useStore } from './stores';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setloading] = useState(true);
  const [submitting, setsubmitting] = useState(false);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      let activities: Activity[] = [];
      // Remocing the time portion of the activity date
      response.forEach((activity) => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity);
      });
      setActivities(activities);
      setloading(false);
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
    setsubmitting(true);
    // If we're editing an activity
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        setActivities([
          ...activities.filter((element) => element.id !== activity.id),
          activity,
        ]);
        setSelectedActivity(activity);
        setEditMode(false);
        setsubmitting(false);
      });
    } else {
      // If we're creating an activity
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
        setSelectedActivity(activity);
        setEditMode(false);
        setsubmitting(false);
      });
    }
  }

  function handleDeleteActivity(id: string) {
    setsubmitting(true);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter((activity) => activity.id !== id)]);
      setsubmitting(false);
    });
  }

  if (loading) return <Loader />;

  return (
    <Fragment>
      <AppHeader openForm={handleFormOpen} />
      <h2>{activityStore.title}</h2>
      <button onClick={activityStore.setTitle}>Add exclamation!!</button>
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
          submitting={submitting}
        />
      </main>
    </Fragment>
  );
}

export default observer(App);
