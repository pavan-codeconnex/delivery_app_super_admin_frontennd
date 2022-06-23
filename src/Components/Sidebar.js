import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activeItem, setActiveItem] = useState({
    dashboard: false,
    stores: false,
    users: {
      allUsers: false,
      storeOwners: false,
      deliverGuys: false,
      staff: false,
    },
    orders: false,
    promotions: false,
  });
  useEffect(()=>{
    console.log("component reloaded")
  })
  return (
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="#" className="app-brand-link">
            <span className="app-brand-logo demo">
              <i className="bx bxs-package"></i>
            </span>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              Delivery App
            </span>
          </a>

          <a
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className={`menu-item ${activeItem.dashboard ? " active" : ""}`}>
            <NavLink to="/Dashboard" className="menu-link">
              {({ isActive }) => {
                if (isActive && !activeItem.dashboard && !showUserMenu) {
                  {
                    console.log(activeItem);
                  }
                  setActiveItem({
                    dashboard: true,
                    stores: false,
                    users: {
                      allUsers: false,
                      storeOwners: false,
                      deliverGuys: false,
                      staff: false,
                    },
                    orders: false,
                    promotions: false,
                  });
                }
                return (
                  <>
                    <div className="menu-icon tf-icons bx bxs-dashboard"></div>
                    <div data-i18n="Dashboard">Dashboard</div>
                  </>
                );
              }}
            </NavLink>
          </li>

          <li className={`menu-item ${activeItem.stores ? " active" : ""}`}>
            <NavLink to="/Store" className="menu-link">
              {({ isActive }) => {
                if (isActive && !activeItem.stores && !showUserMenu) {
                  {
                    console.log(activeItem);
                  }
                  setActiveItem({
                    dashboard: false,
                    stores: true,
                    users: {
                      allUsers: false,
                      storeOwners: false,
                      deliverGuys: false,
                      staff: false,
                    },
                    orders: false,
                    promotions: false,
                  });
                }
                return (
                  <>
                    <div className="menu-icon tf-icons bx bx-store-alt"></div>
                    <div data-i18n="Stores">Stores</div>
                  </>
                );
              }}
            </NavLink>
          </li>

          {/* <li className="menu-item ">
            <Link to="/Store" className="menu-link">
              <div className="menu-icon tf-icons bx bx-store-alt"></div>
              <div data-i18n="Stores">Stores</div>
            </Link>
          </li> */}

          <li
            className={`menu-item ${
              showUserMenu ||
              activeItem.users.allUsers ||
              activeItem.users.storeOwners ||
              activeItem.users.deliverGuys ||
              activeItem.users.staff
                ? "open active"
                : "close"
            }`}
            onClick={() => {
              setShowUserMenu(!showUserMenu);
              setActiveItem({
                dashboard: false,
                stores: false,
                users: {
                  allUsers: false,
                  storeOwners: false,
                  deliverGuys: false,
                  staff: false,
                },
                orders: false,
                promotions: false,
              })
            }}
          >
            <div className="menu-link menu-toggle">
              <div className="menu-icon tf-icons bx bxs-user"></div>
              <div data-i18n="Layouts">Users</div>
            </div>

            <ul className="menu-sub">
              <li className="menu-item">
                <NavLink to="/AllUsers" className="menu-link">
                  {({ isActive }) => {
                    if (isActive && !activeItem.users.allUsers) {
                      setActiveItem({
                        dashboard: false,
                        stores: false,
                        users: {
                          allUsers: true,
                          storeOwners: false,
                          deliverGuys: false,
                          staff: false,
                        },
                        orders: false,
                        promotions: false,
                      });
                    }
                    return <div data-i18n="Without menu">All Users</div>;
                  }}
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="/StoreOwners" className="menu-link">
                  {({ isActive }) => {
                    if (isActive && !activeItem.users.storeOwners) {
                      setActiveItem({
                        dashboard: false,
                        stores: false,
                        users: {
                          allUsers: false,
                          storeOwners: true,
                          deliverGuys: false,
                          staff: false,
                        },
                        orders: false,
                        promotions: false,
                      });
                    }
                    return <div data-i18n="Container">Store Owners</div>;
                  }}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/DeliveryGuy" className="menu-link">
                  {({ isActive }) => {
                    if (isActive && !activeItem.users.deliverGuys) {
                      setActiveItem({
                        dashboard: false,
                        stores: false,
                        users: {
                          allUsers: false,
                          storeOwners: false,
                          deliverGuys: true,
                          staff: false,
                        },
                        orders: false,
                        promotions: false,
                      });
                    }
                    return <div data-i18n="Fluid">Delivery Guys</div>;
                  }}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/Staff" className="menu-link">
                  {({ isActive }) => {
                    if (isActive && !activeItem.users.staff) {
                      setActiveItem({
                        dashboard: false,
                        stores: false,
                        users: {
                          allUsers: false,
                          storeOwners: false,
                          deliverGuys: false,
                          staff: true,
                        },
                        orders: false,
                        promotions: false,
                      });
                    }
                    return <div data-i18n="Blank">Staff</div>;
                  }}
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`menu-item ${activeItem.orders ? " active" : ""}`}>
            <NavLink to="/Order" className="menu-link">
              {({ isActive }) => {
                if (isActive && !activeItem.orders && !showUserMenu) {
                  setActiveItem({
                    dashboard: false,
                    stores: false,
                    users: {
                      allUsers: false,
                      storeOwners: false,
                      deliverGuys: false,
                      staff: false,
                    },
                    orders: true,
                    promotions: false,
                  });
                }
                return (
                  <>
                    <div className="menu-icon tf-icons bx bx-basket"></div>
                    <div data-i18n="Orders">Orders</div>
                  </>
                );
              }}
            </NavLink>
          </li>

          <li className={`menu-item ${activeItem.promotions ? " active" : ""}`}>
            <NavLink to="/Promotions" className="menu-link">
              {({ isActive }) => {
                if (isActive && !activeItem.promotions && !showUserMenu) {
                  setActiveItem({
                    dashboard: false,
                    stores: false,
                    users: {
                      allUsers: false,
                      storeOwners: false,
                      deliverGuys: false,
                      staff: false,
                    },
                    orders: false,
                    promotions: true,
                  });
                }
                return (
                  <>
                    <div className="menu-icon tf-icons bx bxs-discount"></div>
                    <div data-i18n="Promotions">Promotions</div>
                  </>
                );
              }}
            </NavLink>
          </li>
        </ul>
      </aside>

  );
};

export default Sidebar;
