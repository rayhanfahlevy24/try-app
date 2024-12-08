import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/react';

import SunscreenAzarine from "../assets/sunscreen-azarine.png";

const PaymentConfirmation: React.FC = () => {
  const quantity = 2;
  const pricePerItem = 65000;
  const totalPrice = quantity * pricePerItem;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Konfirmasi Pembayaran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div style={{ textAlign: 'center', padding: '16px' }}>
          <img
            style={{
              width: '150px',
              height: 'auto',
              margin: '0 auto 16px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
            }}
            src={SunscreenAzarine}
            alt="Sunscreen SPF 50+"
          />
          <h2>Sunscreen SPF 50+</h2>

          <IonGrid style={{ marginTop: '16px' }}>
            <IonRow>
              <IonCol size="6" style={{ textAlign: 'left', fontWeight: 'bold' }}>Quantity</IonCol>
              <IonCol size="6" style={{ textAlign: 'right' }}>{quantity}</IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6" style={{ textAlign: 'left', fontWeight: 'bold' }}>Total</IonCol>
              <IonCol size="6" style={{ textAlign: 'right', color: '#F59E0B', fontSize: '18px', fontWeight: 'bold' }}>
                Rp. {totalPrice.toLocaleString()}
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonButton expand="block" color="warning" style={{ marginTop: '24px' }}>
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentConfirmation;
