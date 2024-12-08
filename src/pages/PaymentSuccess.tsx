import React from "react";
import { IonPage, IonContent, IonButton } from "@ionic/react";

import Correct from "../assets/correct1.png";

const PaymentSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonContent
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "150px"
          }}
        >
    
          <img
            src={Correct} 
            alt="Success Icon"
            style={{
              width: "120px",
              height: "120px",
              marginBottom: "20px",
            }}
          />

          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#000000",
            }}
          >
            Thank You
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#7d7d7d",
              marginBottom: "30px",
            }}
          >
            Payment done successfully
          </p>

          {/* Button */}
          <IonButton color={'warning'}
            style={{
              borderRadius: "8px",
              color: "#000",
              fontWeight: "bold",
            }}
            expand="block"
            routerLink="/"
          >
            Back to Home
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccess;
