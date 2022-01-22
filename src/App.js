// import Photo from "features/Photo";
import SignIn from 'features/Auth/pages/SingnIn/SignIn';
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

// import Banner from "./components/Banner/Banner";
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

import firebase from 'firebase';

import { Button } from 'reactstrap';
import productApi from 'api/productApi';

const Photo = React.lazy(() => import('features/Photo'));

//########## Configure Firebase#############
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAN,
  // ...
};
firebase.initializeApp(config);

function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log('login user is not login ');
          return;
        }
        const token = await user.getIdToken();
        console.log('token:', token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Header />
        <Switch>
          <Route path="/photos" component={Photo} />
          <Route path="/sign-in" component={SignIn} />
          <Redirect exact from="/" to="/photos" />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
