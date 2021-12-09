import React from "react";
import Listado from "./components/listado";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./firebase/config";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const handleGoogleSingIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSingIn}>login</button>
      <Listado />
    </div>
  );
}

export default App;
