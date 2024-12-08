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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function registerUser() {
    console.log("Registering user:", email, password, confirmPassword);

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User registered successfully:", userCredential.user);
        alert("Registration successful!");
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        alert(`Registration failed: ${error.message}`);
      });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"warning"}>
          <IonTitle>Sign Up</IonTitle>
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
                onIonChange={(e: any) => setEmail(e.target.value)}
              ></IonInput>
              <IonInput
                label="Password"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter your password"
                onIonChange={(e: any) => setPassword(e.target.value)}
              ></IonInput>
              <IonInput
                label="Confirm Password"
                type="password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter your confirm password"
                onIonChange={(e: any) => setConfirmPassword(e.target.value)}
              ></IonInput>
            </form>
            <IonButton onClick={registerUser} color={"warning"} expand="block">
              Register
            </IonButton>
            <p style={{ marginLeft: "20px", marginTop: "20px" }}>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
