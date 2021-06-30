import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/header.css";

function Header({ info }) {
  return (
    <div>
      <div className="title">
        <div className="title_name">
          <h2>My Wallet</h2>
        </div>
        <div className="user_name">
          Hi , <strong>{info?.data?.user?.name}</strong>
        </div>
        <div className="avatar">
          <div className="balance">
            <h4>
              <strong>Amount: {info?.data?.user?.amount} </strong>
            </h4>
            <h4>
              <strong> Balance: {info?.data?.user?.balance}</strong>
            </h4>
            <h4>
              <strong> Bonus Balance: {info?.data?.user?.bonus_balance}</strong>
            </h4>
          </div>
          <Avatar className="image" alt="A" src={info?.data?.user?.avatar} />
        </div>
      </div>
    </div>
  );
}

export default Header;
