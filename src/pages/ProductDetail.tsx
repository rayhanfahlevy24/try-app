import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import { useHistory } from "react-router-dom";

import SunscreenAzarine from "../assets/sunscreen-azarine.png";

const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 65000;

  const history = useHistory();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = quantity * pricePerItem;

  const handleSubmit = () => {
    history.push("/paymentconfirmation");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Detail Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <img
            style={{
              width: '200px',
              height: 'auto',
              margin: '0 auto 16px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
            }}
            src={SunscreenAzarine}
            alt="Sunscreen SPF 50+"
          />
          <h2>Sunscreen SPF 50+</h2>
          <p style={{
            color: '#555',
            fontSize: '14px',
            margin: '16px 0',
            lineHeight: '1.5'
          }}>
            Tabir surya Azarine Hydramax C Sunscreen Serum yang berbentuk gel ini dapat digunakan untuk melembabkan & melindungi kulit dari pengaruh buruk sinar matahari. Diformulasikan dengan berbagai ukuran hyaluronic acid untuk melembabkan di berbagai lapisan kulit. Hasil akhir wajah akan tampak glowing dan kenyal. Tekstur gel ini terasa dingin dan ringan, sehingga mudah diserap serta tidak meninggalkan whitecast pada kulit. Cocok untuk kulit kering, normal, dan kombinasi.
          </p>
          <h3>Rp. {totalPrice.toLocaleString()}</h3>

          <IonGrid>
            <IonRow style={{ justifyContent: 'center', alignItems: 'center', marginTop: '16px' }}>
              <IonCol size="2">
                <IonButton color="light" onClick={decreaseQuantity} disabled={quantity === 1}>
                  -
                </IonButton>
              </IonCol>
              <IonCol size="2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                <span>{quantity}</span>
              </IonCol>
              <IonCol size="2">
                <IonButton color="light" onClick={increaseQuantity}>
                  +
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonButton expand="block" color="warning" onClick={handleSubmit}>
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetail;
