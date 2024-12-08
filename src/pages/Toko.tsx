import Azarine from "../assets/azarine.jpg";
import SunscreenAzarine from "../assets/sunscreen-azarine.png";
import AcneAzarine from "../assets/acne-azarine.png";
import SerumAzarine from "../assets/serum-azarine.png";

import { useHistory } from "react-router-dom";

import {
  IonContent,
  IonPage,
  IonText,
} from "@ionic/react";
import React from "react";

const Toko: React.FC = () => {

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/productdetail");
  };

  return (
    <IonPage>
      <IonContent style={{ backgroundColor: "#000", color: "#fff", padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={Azarine}
            alt="Azarine"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              marginBottom: "10px",
            }}
          />
          <IonText>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>Azarine</h2>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>Kota Bandung</p>
            <p style={{ fontSize: "12px", lineHeight: "1.5" }}>
              Didirikan pada tahun 2002, Azarine Cosmetic merupakan produk skincare
              dengan bahan alami dan herbal yang telah bersertifikat BPOM dan HALAL
              dari MUI.
            </p>
          </IonText>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "#fff",
            margin: "20px 0",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginLeft: "12px",
          }}
        >
          <img
            src={SunscreenAzarine}
            alt="Sunscreen"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          />

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
              Sunscreen SPF 50+
            </h3>
            <p style={{ fontSize: "12px", margin: "5px 0" }}>
              Deskripsi produk sunscreen Azarine blablablablabla
            </p>
            <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>
              Rp. 65.000
            </p>
            <button
              style={{
                backgroundColor: "#ffc107",
                border: "none",
                padding: "10px 20px",
                color: "#000",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              Buy
            </button>
          </div>
        </div>
      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginLeft: "12px",
          }}
        >
    
          <img
            src={AcneAzarine}
            alt="Acne Azarine"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          />

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
              Acne Azarine
            </h3>
            <p style={{ fontSize: "12px", margin: "5px 0" }}>
              Deskripsi produk Acne Azarine blablablablabla
            </p>
            <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>
              Rp. 65.000
            </p>
            <button
              style={{
                backgroundColor: "#ffc107",
                border: "none",
                padding: "10px 20px",
                color: "#000",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        </div>
      
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            marginLeft: "12px",
          }}
        >
          
          <img
            src={SerumAzarine}
            alt="Serum Azarine"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          />

          <div>
            <h3 style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
              Serum Azarine
            </h3>
            <p style={{ fontSize: "12px", margin: "5px 0" }}>
              Deskripsi produk serum Azarine blablablablabla
            </p>
            <p style={{ fontSize: "14px", fontWeight: "bold", margin: "5px 0" }}>
              Rp. 65.000
            </p>
            <button
              style={{
                backgroundColor: "#ffc107",
                border: "none",
                padding: "10px 20px",
                color: "#000",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Toko;
