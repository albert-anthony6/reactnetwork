import React, { useEffect } from 'react';
import AppHeader from './components/AppHeader';
import ActivityDashboard from './views/ActivityDashboard';
import Home from './views/Home';
import { observer } from 'mobx-react-lite';
import { Switch, Route, useLocation } from 'react-router-dom';
import ActivityForm from './views/ActivityForm';
import ActivityDetails from './views/ActivityDetails';
import TestErrors from './views/TestErrors';
import { ToastContainer } from 'react-toastify';
import NotFound from './views/NotFound';
import ServerError from './views/ServerError';
import Loader from './components/Loader';
import { useStore } from './stores/index';
import ModalContainer from './components/modals/ModalContainer';

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <Loader content="Loading app..." />

  return (
    <>
    <ToastContainer position='bottom-left' hideProgressBar />
      <ModalContainer />
      <Route exact path="/" component={Home} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <AppHeader />
            <main>
              <Switch>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/create-activity', '/manage/:id']}
                component={ActivityForm}
              />
              <Route path="/errors" component={TestErrors} />
              <Route path="/server-error" component={ServerError} />
              <Route component={NotFound} />
              </Switch>
            </main>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
