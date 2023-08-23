import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

const PhoneVerify = ({ auth }) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "https://helpinghands-beta.onrender.com",
      privacyPolicyUrl: "/",
      
    });
  });

  return (<div id="firebaseui-auth-container"></div>);


};

export default PhoneVerify;
