import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Table from "../Components/Table";
import axios from "../api/server_base_url";
import moment from "moment";
const Order = () => {
  const headers = [
    "ORDER ID",
    "STATUS",
    "STORE NAME",
    "MODE",
    "TOTAL",
    "ORDER PLACED TIME",
    "ACTION",
  ];
  const orderStatus=["","order placed", "pending", "accepted", "delivered" ,"cancelled"] 
  const badge=["","bg-success","bg-warning","bg-danger"]
  const paymentMode=["","online payment","COD" ,"card payment"] 
  const orderType=["","delivery","self pick"] 
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get("/getAllOrders").then((res) => {
      let dummy_rows = [];
      res.data.forEach((item) => {
        dummy_rows = [
          ...dummy_rows,
          [
            item.orderId,
            <div className="badge-className">
              <span className={`badge ${badge[parseInt(item.orderStatus)]}`}>{orderStatus[parseInt(item.orderStatus)]}</span> <br />{" "}
              <small>
                {" "}
                Order By:{" "}
                <span className="linked-item">
                  {item.customerName}
                </span>
              </small>{" "}
            </div>,
            item.storeName,
            paymentMode[parseInt(item.paymentMode)],
            "₹" + item.totalAmount,
            moment(new Date(item.orderPlacedTime)).format('MMMM Do YYYY, h:mm:ss a'),
            <Link to={`/ViewOrder/${item.orderId}`} className="btn btn-sm btn-primary">
              View
            </Link>,
          ],
        ];
      });
      setRows(dummy_rows);
    });
  }, []);

  // const rows = [
  //   [
  //     "#QYRR7WDLL",
  //     <div className="badge-className">
  //       <span className="badge bg-success">Order Placed</span> <br />{" "}
  //       <small>
  //         {" "}
  //         Order By:{" "}
  //         <a href="#" target="_blank" className="linked-item">
  //           Geek
  //         </a>
  //       </small>{" "}
  //     </div>,
  //     "Pizza hut",
  //     "online payment",
  //     "₹1000",
  //     "2022-05-27 - 09:03 AM",
  //     <Link to="/ViewOrder" className="btn btn-sm btn-primary">
  //       View
  //     </Link>,
  //   ],
  //   [
  //     "#QYRR7WDLL",
  //     <div className="badge-className">
  //       <span className="badge bg-warning">PENDING</span> <br />{" "}
  //       <small>
  //         {" "}
  //         Order By:{" "}
  //         <a href="#" target="_blank" className="linked-item">
  //           Geek
  //         </a>
  //       </small>{" "}
  //     </div>,
  //     "Dominos",
  //     "COD",
  //     "₹2000",
  //     "2022-05-27 - 09:03 AM",
  //     <Link to="/ViewOrder" className="btn btn-sm btn-primary">
  //       View
  //     </Link>,
  //   ],
  //   [
  //     "#QYRR7WDLL",
  //     <div className="badge-className">
  //       <span className="badge bg-danger">CANCELLED</span> <br />{" "}
  //       <small>
  //         {" "}
  //         Order By:{" "}
  //         <a href="#" target="_blank" className="linked-item">
  //           Geek
  //         </a>
  //       </small>{" "}
  //     </div>,
  //     "kfc",
  //     "card payment",
  //     "₹520",
  //     "2022-05-27 - 09:03 AM",
  //     <Link to="/ViewOrder" className="btn btn-sm btn-primary">
  //       View
  //     </Link>,
  //   ],
  // ];
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />

          <div className="layout-page">
            <Header />

            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="d-flex justify-content-between my-2">
                    <h3>
                      <strong>Order Management</strong>
                    </h3>
                    <div></div>
                  </div>
                  <Table rows={rows} headers={headers} showsearch={true} />
                </div>
              </div>

              <Footer />

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
};

export default Order;
