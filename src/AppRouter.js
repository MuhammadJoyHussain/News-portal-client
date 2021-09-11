import React, { createContext, Suspense, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import firebase from "firebase/app";
import "firebase/auth"
import { initializeLoginFramework } from './components/Login/LoginManager';
import Dashboard from './pages/Dashboard/Dashboard';
const Home = React.lazy(() => import('./pages/Home/Home'));
const TopNews = React.lazy(() => import('./pages/TopNews/TopNews'));
const Bangladesh = React.lazy(() => import('./pages/Bangladesh/Bangladesh'));

export const UserContext = createContext();

const AppRouter = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    initializeLoginFramework();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          if (user) {
            setLoggedInUser(user)
          } else {
            setLoggedInUser({})
          }
          return () => {
            unsubscribe();
          }
        })
      }, []);

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                {children}
                <Switch>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/topnews">
                            <TopNews />
                        </PrivateRoute>
                        <PrivateRoute path="/bangladesh">
                            <Bangladesh />
                        </PrivateRoute>
                        <PrivateRoute path="/makeAdmin">
                            <Dashboard />
                        </PrivateRoute>
                        <Route path="/login" component={Login} />
                    </Suspense>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default AppRouter;