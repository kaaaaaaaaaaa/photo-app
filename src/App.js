
// import Photo from "features/Photo";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
// import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import AddEditPage from "./features/Photo/pages/AddEdit/AddEdit";

// lazy load k loade ngay , khi vao duong dan ào thì component do dc load
// cần thằng nào load thangừ đó 

const Photo = React.lazy(() => import("features/Photo"));

// const SignIn = React.lazy(() => import('./features/Photo'));

function App() { 
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        {/* header chung, moi trang deu co header */}
        <Header /> 

        {/* các trang tuong ung deu */}
        <Switch>
          {/*user gõ / => redirect vè /photo  */}
          <Redirect exact from="/" to="/photos" />
         
          <Route path="/photos" component={Photo} />
         
         
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
