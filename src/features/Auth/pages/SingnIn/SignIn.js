import React from "react";
import PropTypes from "prop-types";

import firebase from "firebase";

// import { StyledFirebaseAuth } from "react-firebaseui"; import
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

SignIn.propTypes = {};
// Configure FirebaseUI. btn sign in with gg ,fb
const uiConfig = {
  signInFlow: "redirect", // => kieu dang nhap xong huong den trang nao do
  signInSuccessUrl: "/photos", //=> dang nhap thanh cong ve trang chu
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignIn(props) {
  return (
    <div>
      <div className="text-center">
        <h2>Login</h2>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default SignIn;
