import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'

const Promotions = () => {
  return (
    <div>

<div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        

        <Sidebar/>
       
        <div class="layout-page">
        

         <Header/>

         
          <div class="content-wrapper">
     
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
			  <div class="d-flex justify-content-between my-2">
        <h3><strong>Promotions</strong></h3>
        <div>
           
                                    <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left mr-2" id="addCoupon" data-bs-toggle="modal" data-bs-target="#addCouponModal">
                <b><i class='bx bx-plus'></i></b>
                Add New Coupon
            </button>
                                                         
        </div>
    </div>
                <div class="col-lg-12 mb-4 order-0">
                  <div class="card">
                    <div class="d-flex align-items-end row">
                      <div class="col-sm-12">
                        <div class="card-body">
                          <table id="example" class="table table-striped" style={{width:'100%'}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Coupon Applicable Store</th>
                <th>Code</th>
                <th>Type</th>
                <th>Discount</th>
                <th>Status</th>
				<th>Expiry Date</th>
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            
			<tr>
                <td>New10</td>
                <td>The Halal Guys</td>
                <td>NEW10</td>
                <td><button type="button" class="btn rounded-pill btn-outline-primary">Amount</button></td>
                <td>₹ 30</td>
				<td><button type="button" class="btn rounded-pill btn-outline-primary">Active</button></td>
                <td>
				<div class="form-check form-switch mb-2">
                       1 year ago
(2020-10-31)
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary edit-btn"> Edit</a>
				<a href="#" class="btn btn-sm btn-info"> View</a>
				</td>
            </tr>
			
        </tbody>
        
    </table>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
      
                
              </div>
              
            </div>
          
          <Footer/>

            <div class="content-backdrop fade"></div>
          </div>
  
        </div>
  
      </div>

  
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    </div>
  )
}

export default Promotions