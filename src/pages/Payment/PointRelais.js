import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const PointRelais = () => {
  const [deliveryOption, setDeliveryOption] = useState("clickCollect");
  const [point, setPoint] = useState("");

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };
  const handleChange = (event) => {
    const options = event.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setPoint(selectedOptions);
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="accueilTitle2 poppins-semibold">Point relais</div>

      <div className="content1">
        <div className="MapContainer">
          <div className="poppins-medium textmap">
            Trouvez un point relais pour votre collecte
          </div>
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyATtl9w1ogOneEMPFMbnt8hu23t2CdcVEQ">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="poppins-medium textmap">
            Point de vente choisi: Pharmacie Al moez
          </div>
        </div>
        <div>
          <div className="input-line1">
            <select
              name="allergies"
              value={point}
              onChange={handleChange}
              className="input-field poppins-medium"
              required
            >
              <option value="arachides">Point1</option>
              <option value="lactose">Lactose</option>
              <option value="gluten">Gluten</option>
            </select>
          </div>
          <div className="TextContainer">
            <div className="textProd poppins-semibold">Récapitulons :</div>
            <div className="total1">
              <span className="Text poppins-medium">Sous total :</span>
              <span className="Text poppins-medium">215TND</span>
            </div>
            <div className="total1 poppins-medium">
              <label>
                <input
                  type="radio"
                  value="livraison"
                  checked={deliveryOption === "livraison"}
                  onChange={() => handleDeliveryOptionChange("livraison")}
                  disabled
                />
                Livraison
              </label>
              <div>7.00 TND</div>
            </div>
            <div className="total1 poppins-medium">
              <label>
                <input
                  type="radio"
                  value="clickCollect"
                  checked={deliveryOption === "clickCollect"}
                  onChange={() => handleDeliveryOptionChange("clickCollect")}
                />
                Click et collect
              </label>
              <div>0.00 TND</div>
            </div>
            <div className="total">
              <span className="Text poppins-semibold">Total : </span>
              <span className="Text poppins-semibold">219 TND</span>
            </div>
            <div className="center">
              <Link to="/success2">
                <button>Valider ma commande</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
