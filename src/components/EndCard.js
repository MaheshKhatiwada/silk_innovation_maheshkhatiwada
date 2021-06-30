import React from "react";
import "../css/endcard.css";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TvIcon from '@material-ui/icons/Tv';
import FlightRoundedIcon from '@material-ui/icons/FlightRounded';

function EndCard({ info }) {
  return (
    <div className="endCard">
      <div className="kyc_info">
        <h2>KYC Information</h2>
        <div className="info">
          <h4>Name:{info?.data?.user?.name || "Mahesh Khatiwada"}</h4>
          <h4>Email:{info?.data?.user?.email}</h4>
          <h4>Phone:{info?.data?.user?.mobile_no}</h4>
          <h4>DOB:{info?.data?.user?.kyc?.date_of_birth}</h4>
          <h4>Gender:{info?.data?.user?.kyc?.gender}</h4>
          <h4>Occupation:{info?.data?.user?.kyc?.occupation}</h4>
          <h4>Father's Name:{info?.data?.user?.kyc?.fathers_name}</h4>
          <h4>Mother's Name:{info?.data?.user?.kyc?.mothers_name}</h4>
        </div>
      </div>
      <div className="utils">
        <div className="utils_card">
          <div className="utils_details">
              <PhoneIphoneIcon  />
              <h4>Top Up</h4>

          </div>
        </div>
        <div className="utils_card">
          <div className="utils_details" >
              <TvIcon/>
              <h4>Televison</h4>

          </div>

        </div >
        <div className="utils_card">
          <div className="utils_details">
              <FlightRoundedIcon/>
              <h4>Flight Booking</h4>

          </div>
        </div>

      </div>
    </div>
  );
}

export default EndCard;
