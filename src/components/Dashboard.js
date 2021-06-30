import React from "react";
import "../css/dashboard.css";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from '@material-ui/core/Avatar';

function Dashboard({info}) {
  console.log(info.data?.user)
  return (
    <div className="dashboard">
      {/* Title Header */}
      <div className="title">
        <div className="title_name">
          <h2>My Wallet</h2>
        </div>
        <div className="user_name">Hi , {info?.data?.user?.name}</div>
        <div className="avatar">
          <div className="balance">
            <h4>Amount: {info?.data?.user?.amount}</h4>
            <h4>Balance: {info?.data?.user?.balance}</h4>
            <h4>Bonus Balance: {info?.data?.user?.bonus_balance}</h4>
          </div>
          <Avatar className="image" alt="A" src={info?.data?.user?.avatar} />
        </div>
      </div>
{/* Main part */}
      <div className="main">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar_icon">
            <HomeIcon className="icon" />
             <h4 className="icon_title">Home</h4>
          </div>
          <div className="sidebar_icon">
            <ReceiptIcon className="icon"  />
             <h4 className="icon_title">Transactions</h4>
          </div>
          <div className="sidebar_icon">
            <AccountBalanceWalletIcon  className="icon" />
             <h4 className="icon_title">My Wallet</h4>
          </div>
          <div className="sidebar_icon">
            <AccountCircleIcon className="icon"  />
             <h4 className="icon_title">Account</h4>
          </div>
        </div>
        {/* Container 1st */}
        <div className="middle">Cards</div>
        <div className="end"> Last Cards</div>
      </div>
      <div className="footer">Copyright @MaheshKhatiwada,2021</div>
    </div>
  );
}

export default Dashboard;

