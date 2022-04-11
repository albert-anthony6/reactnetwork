import React from 'react';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './components/ActivityDashboard';
import Home from './views/Home';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import ActivityForm from './components/ActivityForm';

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/activities" component={ActivityDashboard} />
        <Route path="/create-activity" component={ActivityForm} />
      </main>
    </>
  );
}

export default observer(App);
