import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>

<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="app-brand demo">
            <a href="#" class="app-brand-link">
              <span class="app-brand-logo demo">
                <i class='bx bxs-package'></i>
              </span>
              <span class="app-brand-text demo menu-text fw-bolder ms-2">Delivery App</span>
            </a>

            <a href="#" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i class="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
         
            <li class="menu-item active">
              <Link to='/Dashboard' class="menu-link">
               <i class='menu-icon tf-icons bx bxs-dashboard'></i>
                <div data-i18n="Dashboard">Dashboard</div>
              </Link>
            </li>
			
			 <li class="menu-item">
              <Link to='/Store' class="menu-link">
              <i class='menu-icon tf-icons bx bx-store-alt'></i>
                <div data-i18n="Stores">Stores</div>
              </Link>
            </li>
			
            <li class="menu-item open">
              <a href="#" class="menu-link menu-toggle">
                 <i class='menu-icon tf-icons bx bxs-user'></i>
                <div data-i18n="Layouts">Users</div>
              </a>

              <ul class="menu-sub">
                <li class="menu-item">
                  <Link to='/AllUsers' class="menu-link">
                    <div data-i18n="Without menu">All Users</div>
                  </Link>
                </li>
               
                <li class="menu-item">
                  <Link to="/StoreOwners" class="menu-link">
                    <div data-i18n="Container">Store Owners</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="/DeliveryGuy" class="menu-link">
                    <div data-i18n="Fluid">Delivery Guys</div>
                  </Link>
                </li>
                <li class="menu-item">
                  <Link to="/Staff" class="menu-link">
                    <div data-i18n="Blank">Staff</div>
                  </Link>
                </li>
              </ul>
            </li>
			
			
			
			 <li class="menu-item">
              <Link to="/Order" class="menu-link">
			  <i class='menu-icon tf-icons bx bx-basket' ></i>
                <div data-i18n="Orders">Orders</div>
              </Link>
            </li>
			
			 <li class="menu-item">
              <Link to="/Promotions" class="menu-link">
			  <i class='menu-icon tf-icons bx bxs-discount'></i>
                <div data-i18n="Promotions">Promotions</div>
              </Link>
            </li>
			
			             
          
            
          </ul>
        </aside>

    </div>
  )
}

export default Sidebar