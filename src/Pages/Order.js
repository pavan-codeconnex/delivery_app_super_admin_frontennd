import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Order = () => {
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
        <h3><strong>Order Management</strong></h3>
        <div>
           
                        
                                  
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
                <th>Order Id</th>
                <th>Status</th>
                <th>Store Name</th>
                <th>Mode</th>
                <th>Total</th>
                <th>Order Placed At</th>
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
             <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
			 <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-success">Order Placed</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
           <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-warning">Pending</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
            </tr>
            <tr>
                <td>#QYRR7WDLL</td>
                <td><div class="badge-class"><span class="badge bg-danger">Cancelled</span> <br/> <small> Order By: <a href="#" target="_blank" class="linked-item">Geek</a></small> </div></td>
                <td>Liberty Shawarma</td>
                <td>COD</td>
                <td>₹956</td>
                <td>2022-05-27 - 09:03 AM</td>
				<td><Link to ="/ViewOrder" class="btn btn-sm btn-primary">View</Link></td>
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

export default Order