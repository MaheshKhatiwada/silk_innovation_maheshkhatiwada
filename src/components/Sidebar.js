import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import '../css/sidebar.css';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_icon">
          <HomeIcon className="icon" />
          <h4 className="icon_title">Home</h4>
        </div>
        <div className="sidebar_icon">
          <ReceiptIcon className="icon" />
          <h4 className="icon_title">Transactions</h4>
        </div>
        <div className="sidebar_icon">
          <AccountBalanceWalletIcon className="icon" />
          <h4 className="icon_title">My Wallet</h4>
        </div>
        <div className="sidebar_icon">
          <AccountCircleIcon className="icon" />
          <h4 className="icon_title">Account</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
