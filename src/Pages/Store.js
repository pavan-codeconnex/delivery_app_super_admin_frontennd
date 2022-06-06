import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Store = () => {
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
        <h3><strong>Stores Management</strong></h3>
        <div>
           
                                    <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left mr-5" id="addNewStore" data-bs-toggle="modal" data-bs-target="#addNewStoreModal" style={{marginRight:'20px'}}>
                <b><i class='bx bx-plus'></i></b>
                Add New Store
            </button>
                        <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left" id="addBulkStore" data-bs-toggle="modal" data-bs-target="#addBulkStoreModal">
                <b><i class='bx bx-upload'></i></b>
                Bulk CSV Upload
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
                <th>Image</th>
                <th>Name</th>
                <th>Operational Areas</th>
                <th>Owners</th>
                <th>Joined date</th>
                <th></th>
				<th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
           <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
            <tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr><tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
            </tr>
			<tr>
                <td><img src="assets/img/elements/13.jpg" alt class="w-px-50" /></td>
                <td>The Halal Guys</td>
                <td>Zone: BTM Layout</td>
                <td>Joey</td>
                <td>2019-08-18 - 10:14 AM</td>
                <td>
				<div class="form-check form-switch mb-2">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                       
                      </div>
				
				
				</td>
				<td><a href="#" class="btn btn-sm btn-primary"> Edit</a></td>
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

export default Store