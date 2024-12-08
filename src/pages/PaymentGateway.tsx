import { useHistory } from "react-router-dom";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";

import bcaLogo from "../assets/BCA.png";
import mandiriLogo from "../assets/BankMandiri.jpg";
import bniLogo from "../assets/BankBNI.jpg";
import gopayLogo from "../assets/gopay.jpg";
import ovoLogo from "../assets/Ovo.jpg";
import danaLogo from "../assets/Dana.jpg";

const PaymentGateway = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/paymentsuccess");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose Payment</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            margin: "20px",
            textAlign: "center",
          }}
        >
          <IonGrid>
            <IonRow>
              {/* Card untuk BCA */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={bcaLogo}
                      alt="BCA"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      BCA
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              {/* Card untuk Mandiri */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={mandiriLogo}
                      alt="Mandiri"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      Mandiri
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              {/* Card untuk BNI */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={bniLogo}
                      alt="BNI"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      BNI
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              {/* Card untuk GoPay */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={gopayLogo}
                      alt="GoPay"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      GoPay
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              {/* Card untuk Ovo */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={ovoLogo}
                      alt="Ovo"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      Ovo
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              {/* Card untuk Ovo */}
              <IonCol size="6">
                <IonCard
                  button
                  style={{
                    padding: "1px",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 4px 10px rgba(0, 0, 0, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0px 2px 5px rgba(0, 0, 0, 0.1)")
                  }
                >
                  <IonCardContent>
                    <img
                      src={danaLogo}
                      alt="Dana"
                      style={{
                        width: "60px",
                        height: "60px",
                        marginBottom: "5px",
                        objectFit: "contain",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#555",
                        margin: "0",
                      }}
                    >
                      Dana
                    </p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>

          <IonButton
            expand="block"
            color="warning"
            style={{
              marginTop: "20px",
              fontSize: "16px",
              borderRadius: "5px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentGateway;
