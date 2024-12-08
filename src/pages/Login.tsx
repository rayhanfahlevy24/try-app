import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {

  const history = useHistory();
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  function loginUser() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login successful:", userCredential.user);
        history.push("/");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"warning"}>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form>
              <IonInput
                label="Email"
                type="email"
                labelPlacement="floating"
                fill="outline" 
                placeholder="Enter your email"
                onIonChange={(e) => setEmail(e.detail.value || "")}
              ></IonInput>
              <IonInput
                label="Password"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter your password"
                onIonChange={(e) => setPassword(e.detail.value || "")}
              ></IonInput>
            </form>
            <IonButton onClick={loginUser} color={"warning"} expand="block">
              Login
            </IonButton>
            <p style={{ marginLeft: "20px", marginTop: "20px" }}>
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
