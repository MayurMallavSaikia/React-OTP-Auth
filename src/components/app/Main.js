import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import PhoneVerify from "../views/PhoneVerify";
import firebase  from "../../configs/firebase";

function Main() {
  const firebaseConfig = {
    apiKey: "AIzaSyD6K38-pAFqJ_P4v5qpx0O_tyxMXDhwW88",
    authDomain: "proferros-ec8d3.firebaseapp.com",
    projectId: "proferros-ec8d3",
    storageBucket: "proferros-ec8d3.appspot.com",
    messagingSenderId: "794843534341",
    appId: "1:794843534341:web:0499b727595fd0a8a3f86c"
  };

  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(firebase.auth(), (currentUser) => {
      console.log("current user: "+currentUser);
      console.log(user);
      setUser(currentUser);
    });

    return () => unSubscriber();
  });

  return (
    <>
      <PhoneVerify auth={firebase.auth()} />
    </>
  );
}

export default Main;
