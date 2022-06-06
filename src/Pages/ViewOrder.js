import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ViewOrder = () => {
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
			  
                <div class="content mt-2 mb-5">

    <div class="d-flex justify-content-between my-2">
        <h3></h3>
        <div>
                        <a href="#" id="printButton" class="btn btn-secondary btn-labeled mr-1 mb-3"> Print Bill</a>
           
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6">
            <div class="card" id="printThis">
                <div class="p-3">
                    <div class="d-flex justify-content-between">
                        <div class="form-group mb-0">
                            <h3><strong>Wing Machine - College</strong><br/>
                                <p style={{fontSize: "1rem", fontWeight: 400}} class="mb-0">OD-05-27-WY1E-NGREEPPRB
                                </p>
                            </h3>
                        </div>
                        <div class="form-group mb-0">
                            <label class="control-label no-margin text-semibold mr-1"><strong>Order
                                    Date:</strong></label>
                            2022-05-27 - 09:03 AM
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group">
                                    <label class="control-label no-margin text-semibold mr-1">
                                        <strong>
                                            <h5 class="font-weight-bold">Customer Details</h5>
                                        </strong>
                                    </label>
                                    <br/>
                                    <p><b>Name: </b> Geek</p>
                                    <p><b>Email: </b> g******************m</p>
                                    <p><b>Contact Number: </b>
                                        +*********9</p>
                                                                        <p><b>Delivery Address: </b> , 57QM+9R9, Bibi Titi Mohammed Street, Dar es Salaam, Ilala, Dar es Salam, Tanzania</p>
                                                                                                                                            </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="form-group mb-1">
                                    <div class="d-flex justify-content-center align-items-center flex-column mb-1" style={{border: '1px solid #ddd'}}>
                                        <div class="py-1" style={{fontWeight:900}}>STATUS</div>
                                        <hr class="m-0 w-100"/>
                                        <div class="py-1 text-success " style={{fontWeight:500}}>
                                             Order Placed                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </div>
                                    </div>
                                </div>
                                <div class="form-group mb-1 mt-2">
                                    <div class="d-flex">
                                        <div class="col p-0 mr-2">
                                            <div class="d-flex justify-content-center align-items-center flex-column mb-1" style={{border: '1px solid #ddd'}}>
                                                <div class="py-1" style={{fontWeight:900}}>Order Type</div>
                                                <hr  class="m-0 w-100" />
                                                <div class="py-1 text-warning" style={{fontWeight:'500'}}>
                                                                                                        Delivery
                                                                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col p-0">
                                            <div class="d-flex justify-content-center align-items-center flex-column mb-1" style={{border: '1px solid #ddd'}}>
                                                <div class="py-1" style={{fontWeight:900}}>Payment Mode</div>
                                                <hr class="m-0 w-100" />
                                                <div class="py-1 text-warning" style={{fontWeight:500}}>
                                                    COD
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                        <div class="text-right mt-3">
                        <div class="form-group mb-2">
                            <div class="clearfix"></div>
                            <div class="row">
                                <div class="col-md-12 p-2 mb-3" >
                                                                        <div>
                                        <div class="d-flex mb-1 align-items-start" style={{fontSize:'1.2rem'}}>
                                            <span class="badge rounded-pill bg-label-info">1x</span>
                                            <strong class="mr-1 w-100">Skillet Cookie</strong>
                                                                                        <span class="badge bg-label-primary">₹240</span>
                                        </div>
                                                                                                                    </div>
                                                                    </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="float-right">
                            <table class="table table-bordered table-striped bill-calc-table">
                                <tbody><tr>
                                    <td class="text-left td-title">SubTotal</td>
                                    <td class="td-data"> ₹240</td>
                                </tr>
                                                                                                <tr>
                                    <td class="text-left td-title">Store Charge</td>
                                    <td class="td-data">
                                        ₹30 </td>
                                </tr>
                                                                <tr>
                                    <td class="text-left td-title">Delivery Charge</td>
                                    <td class="td-data">
                                        ₹25 </td>
                                </tr>
                                                                                                                                <tr>
                                    <td class="text-left td-title"><b>Total</b></td>
                                    <td class="td-data"> ₹295
                                    </td>
                                </tr>
                                                                <tr>
                                    <td class="text-left td-title">Payable</td>
                                    <td class="td-data"><b>
                                            ₹295</b></td>
                                </tr>
                                                            </tbody></table>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 mb-5">
                                    
            <div class="card">
                <div class="card-body">
                    <p class="text-center mb-0"><b>Delivery Pin: 63951</b></p>
                </div>
            </div>

                        <div class="card mt-3">
                <div class="card-body">
                    <p class="text-center mb-0">
                        <b>
                            Distance from Store to Customer:
                            3 km
                        </b>
                    </p>
                </div>
            </div>
            
            

                        <div class="card mt-3">
                <div class="card-body order-actions">
                    <h3 class="text-center"> <strong> Order Actions </strong> </h3>
                    <hr class="mt-1" />
                    <div class="form-group d-flex justify-content-center">
                                                <form action="#" class="mr-1" method="POST">
                                                     
							<button class="btn btn-primary btn-labeled btn-labeled-left mr-1"> 
							<b><i class="icon-checkmark3 ml-1"></i> </b> Accept Order 
							</button>
                        </form>
                        <div class="btn-group">
                      <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Cancel Order
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Cancel Order</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Cancel with Full Refund</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Cancel with Half Refund</a></li>
                       
                      </ul>
                    </div>
                        
                        
                                            </div>
                </div>
            </div>
                                                <div class="card mt-3">
                <div class="card-body">
                    <label class="control-label no-margin text-semibold mr-1"><strong>Assign Delivery
                            Guy</strong></label>
                    <form action="#" method="POST">
                                          <div class="form-group row mb-0">
                            <div class="col-lg-12 mb-2">
                                <select id="defaultSelect" class="form-select">
                          <option>Select Delivery Guy</option>
                          <option value="1">Ravi</option>
                          <option value="2">Suresh</option>
                          <option value="3">Sunny</option>
                        </select>
                            </div>
                            <br/>
                            <div class="col-lg-12 mt-1 text-center float-right p-0">
                                <button type="submit" class="btn btn-secondary mr-1">
                                    Assign Delivery
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                                                                                </div>


        <div class="col-lg-3 mb-5">
                        <div class="card">
                <div class="card-body text-center">
                    <h4 class="mb-0"><b>Ongoing order</b></h4>
                    <span class="liveTimerNonCompleteOrder"> 16 hr 46 min 57 sec</span>
                </div>
            </div>
                                    <div class="card mt-3">
                <div class="card-body">
                    <div>
                        <ul class="timeline-ul">
                                                        <li class="timeline-li">
                                <div class="small" data-popup="tooltip" data-placement="left" title="" data-original-title="2022-05-27 - 09:03:46 AM">
                                    <b>09:03 AM</b></div>
                                Order placed
                                                                <span> by </span>
                                <a href="#" class="text-default">
                                    <b>Geek</b>
                                </a>
                                                            </li>
                                                    </ul>
                    </div>

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

export default ViewOrder