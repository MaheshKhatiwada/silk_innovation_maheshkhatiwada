import React from "react";
import "../css/dashboard.css";

import Header from "./Header";
import MiddleCard from "./MiddleCard";
import EndCard from "./EndCard";
import Sidebar from "./Sidebar";

function Dashboard({ info }) {
  console.log(info.data?.user);
  return (
    <div className="dashboard">
      <Header info={info}/>

      <div className="main">
        <Sidebar />
        <div className="middle">
          <MiddleCard />
        </div>
        <div className="end">
          <h2>Utility Payments</h2>
          <EndCard  info={info}/>
        </div>
      </div>
      <div className="footer">Copyright @MaheshKhatiwada,2021</div>
    </div>
  );
}

export default Dashboard;
