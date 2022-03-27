import React, { Fragment, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './components/ActivityDashboard';
import Loader from './components/Loader';
import { useStore } from './stores';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader />;

  return (
    <Fragment>
      <AppHeader />
      <main>
        <ActivityDashboard />
      </main>
    </Fragment>
  );
}

export default observer(App);
