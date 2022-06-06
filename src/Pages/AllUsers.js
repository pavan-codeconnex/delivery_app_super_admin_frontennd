import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const AllUsers = () => {
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
        <h3><strong>All Users</strong></h3>
        <div>
           
                                    <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left mx-3" id="addNewUser" data-bs-toggle="modal" data-bs-target="#addNewUserModal">
                <b><i class='bx bx-plus'></i></b>
                Add New User
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
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Created Date</th>
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#managerolesModal"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-warning">Staff</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-info">Delivery Guy</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
          <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
           <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
            <tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
            </tr>
			<tr>
                <td>Alex</td>
                <td>tes***********</td>
                <td>+919********9</td>
                <td><span class="badge bg-success">Store Owner</span></td>
                <td>2019-08-18 - 10:14 AM</td>
                
				<td><a href="#" class="btn btn-sm btn-primary"> View</a></td>
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

export default AllUsers