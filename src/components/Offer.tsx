import React from "react";
import "./Offer.scss";

export const Offer: React.FC = ({}) => {
  return (
    <div className="offer-container">
      <div className="text-container">
        <h3>Make MyNews your homepage</h3>
        <p>Every day discover what's trending on the internet!</p>
      </div>
      <div className="button-container">
        <button>GET</button>
        <button>No, thanks</button>
      </div>
    </div>
  );
};
export default Offer;