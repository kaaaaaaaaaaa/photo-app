// import Photo from "features/Photo";
import SignIn from "features/Auth/pages/SingnIn/SignIn";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

// import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

import firebase from "firebase";

import { Button } from "reactstrap";
import productApi from "api/productApi";

// lazy load k loade ngay , khi vao duong dan ào thì component do dc load
// cần thằng nào load thangừ đó
const Photo = React.lazy(() => import("features/Photo"));

//########## Configure Firebase#############
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAN,
  // ...
};
firebase.initializeApp(config);

function App() {
  // Listen to the Firebase Auth state and set the local state.
  const [productList, setProductList] = useState([]);

  const fetchProductList = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
      setProductList(response.data);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          console.log("login user is not login ");
          return;
        }
        const token = await user.getIdToken();
        // console.log("login user: ", user.displayName);
        console.log("token:", token);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        {/* header chung, moi trang deu co header */}
        <Header />
        {/* <Button onClick={fetchProductList}>get api </Button> */}
        {/* các trang tuong ung deu */}
        <Switch>
          {/*user gõ / => redirect vè /photo  */}
          <Redirect exact from="/" to="/photos" />

          <Route path="/photos" component={Photo} />
          <Route path="/sign-in" component={SignIn} />

          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
