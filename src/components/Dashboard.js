import React from "react";
import "../css/dashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="title">
        <div className="title_name">
          <h2>My Wallet</h2>
        </div>
        <div className="user_name">Hi,Mahesh</div>
        <div className="avatar">
          <h2>Avatar Image</h2>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="sidebar_icon">
            <HomeIcon className="icon" />
            <h4>Home</h4>
          </div>
          <div className="sidebar_icon">
            <ReceiptIcon className="icon"  />
            <h4>Transactions</h4>
          </div>
          <div className="sidebar_icon">
            <AccountBalanceWalletIcon  className="icon" />
            <h4>My Wallet</h4>
          </div>
          <div className="sidebar_icon">
            <AccountCircleIcon className="icon"  />
            <h4>Account</h4>
          </div>
        </div>
        <div className="middle">Cards</div>
        <div className="end"> Last Cards</div>
      </div>
      <div className="footer">Copyright @MaheshKhatiwada,2021</div>
    </div>
  );
}

export default Dashboard;

