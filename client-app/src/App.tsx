import React from 'react';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './views/ActivityDashboard';
import Home from './views/Home';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import ActivityForm from './views/ActivityForm';
import ActivityDetails from './views/ActivityDetails';
import TestErrors from './views/TestErrors';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    <>
    <ToastContainer position='bottom-left' hideProgressBar />
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
              <Route path="/errors" component={TestErrors} />
            </main>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
