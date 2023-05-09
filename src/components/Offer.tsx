import React, { useContext } from "react";
import "./Offer.scss";
import { OfferContext } from "../context/OfferContextProvider";

export const Offer: React.FC = ({}) => {
  const { showOffer, setShowOffer } = useContext(OfferContext);

  const handleNoThanks = () => {
    console.log("clicked");
    setShowOffer(false);
  };

  if (!showOffer) {
    return null;
  }
  return (
    <div className="offer-container">
      <div className="text-container">
        <h3>Make MyNews your homepage</h3>
        <p>Every day discover what's trending on the internet!</p>
      </div>
      <div className="button-container">
        <button>GET</button>
        <button onClick={handleNoThanks}>No, thanks</button>
      </div>
    </div>
  );
};
export default Offer;
