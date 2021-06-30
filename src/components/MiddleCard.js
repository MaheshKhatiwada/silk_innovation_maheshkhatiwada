import React from "react";
import { FiSend } from "react-icons/fi";
import { GiWallet } from "react-icons/gi";
import { RiBankFill } from "react-icons/ri";
import "../css/middlecard.css";

function MiddleCard() {
  return (
    <div className="card">
      <div className="carditems">
        <GiWallet className="card_icon" />
        <div className="icon_title">Load Funds</div>
      </div>
      <div className="carditems">
        <FiSend className="card_icon" />
        Send Funds
        <div className="icon_title"></div>
      </div>
      <div className="carditems">
        <RiBankFill className="card_icon" />
        <div className="icon_title">Bank Transfer</div>
      </div>
    </div>
  );
}

export default MiddleCard;
