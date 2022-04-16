import React from 'react';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './components/ActivityDashboard';
import Home from './views/Home';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import ActivityForm from './components/ActivityForm';
import ActivityDetails from './components/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <AppHeader />
            <main>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/create-activity', '/manage/:id']}
                component={ActivityForm}
              />
            </main>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
