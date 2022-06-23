import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ViewOrder = () => {
  const orderId = parseInt(useLocation().pathname.split("/")[2]);
  console.log(orderId);
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Header />
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
};

export default ViewOrder;
