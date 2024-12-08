import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import SunscreenAzarine from "../assets/sunscreen-azarine.png";
import MoisturizerSkintific from "../assets/mouisturizer-skintific.png";
import SerumWhitelab from "../assets/serum-whitelab.png";
import SerumScarlett from "../assets/serum-scarlett.png";
import AcneAzarine from "../assets/acne-azarine.png";
import SerumWardah from "../assets/serum-wardah.jpg";
import MoisturizerOriginote from "../assets/moisturizer-originote.jpg";
import MouisturizerWhitelab from "../assets/mouisturizer-whitelab.jpg";
import Azarine from "../assets/azarine.jpg";
import TheOriginote from "../assets/theoriginot.jpg";
import TheOrdinary from "../assets/ordinary.png";
import Loreal from "../assets/loreal.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

const Home: React.FC = () => {
 
  const products = [
    { id: 1, name: "SerumWhitelab", image: "../assets/serum-whitelab.png" },
    { id: 2, name: "MoisturizerSkintific", image: "../assets/mouisturizer-skintific.png" },
    { id: 3, name: "SunscreenAzarine", image: "../assets/sunscreen-azarine.png" },
    { id: 4, name: "SerumScarlett", image: "../assets/serum-scarlett.png" },
    { id: 5, name: "Azarine", image: "../assets/azarine.jpg" },
    { id: 6, name: "Loreal", image: "../assets/loreal.png" },
    { id: 7, name: "TheOrdinary", image: "../assets/ordinary.png" },
    { id: 8, name: "TheOriginote", image: "../assets/theoriginot.jpg" },
  ];

  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(products); 

  const handleSearch = (event: CustomEvent) => {
    const query = event.detail.value.toLowerCase(); 
    setSearchQuery(query); 

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered); 
  };

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color="warning">
            <IonTitle>Try App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar></IonToolbar>
          </IonHeader>
          <IonSearchbar style={{ marginTop: "10px" }}
           value={searchQuery}
           onIonInput={handleSearch} 
           placeholder="Search products or stores">
          </IonSearchbar>
     
          {searchQuery && (
          <>
            <IonText style={{ marginLeft: "20px", fontSize: "18px", fontWeight: "bold" }}>
              Search Results
            </IonText>
            <div style={{ marginTop: "10px" }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #e0e0e0",
                      padding: "10px",
                      margin: "5px 20px",
                      borderRadius: "8px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                   
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginRight: "10px",
                      }}
                    />
                   
                    <IonText style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {product.name}
                    </IonText>
                  </div>
                ))
              ) : (
                <IonText
                  style={{
                    textAlign: "center",
                    display: "block",
                    marginTop: "20px",
                    color: "#757575",
                  }}
                >
                  No results found.
                </IonText>
              )}
            </div>
          </>
        )}
          <IonText style={{ marginLeft: "20px" }}>
            Recommendation Product
          </IonText>
          <Swiper spaceBetween={150} slidesPerView={3}>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={SerumWhitelab}
                  alt="Serum Whitelab"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Serum Whitelab
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={MoisturizerSkintific}
                  alt="Mouisturizer Skintific"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Moisturizer
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={SunscreenAzarine}
                  alt="Sunscreen Azarine"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Sunscreen
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={SerumScarlett}
                  alt="Serum Scarlett"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Serum Scarlett
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          </Swiper>
          <IonText style={{ marginLeft: "20px" }}>
            Store You Just Viewed
          </IonText>
          <Swiper spaceBetween={150} slidesPerView={3}>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={Azarine}
                  alt="Azarine"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Azarine
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={Loreal}
                  alt="Loreal"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Loreal
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={TheOrdinary}
                  alt="The Ordinary"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    The Ordinary
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={TheOriginote}
                  alt="The Originote"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    The Originote
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          </Swiper>
          <IonText style={{ marginLeft: "20px" }}>
            Product You Just Viewed
          </IonText>
          <Swiper spaceBetween={150} slidesPerView={3}>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={AcneAzarine}
                  alt="Acne Azarine"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Acne Azarine
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={SerumWardah}
                  alt="Serum Wardah"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Serum Wardah
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={MoisturizerOriginote}
                  alt="Moisturizer Originote"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Mois Originote
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard style={{ width: "160px" }}>
                <img
                  src={MouisturizerWhitelab}
                  alt="Moisturizer Whitelab"
                  style={{ width: "100%", height: "120px", objectFit: "cover" }}
                />
                <IonCardHeader>
                  <IonCardTitle
                    style={{ fontSize: "14px", textAlign: "center" }}
                  >
                    Mois Whitelab
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </SwiperSlide>
          </Swiper>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
