import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Table from "../Components/Table";
import axios from "../api/server_base_url";
import moment from "moment";
const ADD_USER = "/addUser";
const GET_USERS = "/getUsers";
const AllUsers = () => {
  const headers = ["Name", "Email", "Phone", "Role", "Created Date", "Action"];
  const [data, setData] = useState({});
  const [rows,setRows]=useState([])
  const [storeAdded, setStoreAdded] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // collect data from form and submit form
    try {
      axios.post(ADD_USER,data).then((res, err) => {
        if (err) {
          throw err;
        } else {
          alert("user added success");
          setStoreAdded(storeAdded+1)
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    let dummy_rows = [];
    axios.post(GET_USERS).then((res, err) => {
      if (err) {
        throw err;
      } else {
        res.data.forEach((item) => {
          dummy_rows = [
            ...dummy_rows,
            [
              item.name,
              item.email,
              item.phone,
              <span className="badge bg-success">{item.role}</span>,
              moment(item.createdDate).format("MMMM Do YYYY, h:mm:ss a"),
              <a
                href="#"
                className="btn btn-sm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#managerolesModal"
              >
                {" "}
                View
              </a>
            ],
          ];
        });
        setRows(dummy_rows)
      }
    });
  }, [storeAdded]);


  return (
    <>
      {/* <!--addNewUserModal Modal --> */}
      <div
        class="modal fade"
        id="addNewUserModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addNewUserModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addNewUserModalLabel">
                Add New User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <div class="modal-body store-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Name:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter Full Name"
                      required=""
                      autocomplete="new-name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Email:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Enter Email Address"
                      required=""
                      autocomplete="new-email"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Phone:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      required=""
                      autocomplete="new-phone"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div class="form-group row form-group-feedback form-group-feedback-right">
                  <label class="col-lg-3 col-form-label">Password:</label>
                  <div class="col-lg-9">
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                      placeholder="Enter Password (min 6 characters)"
                      required=""
                      autocomplete="new-password"
                      onChange={(e) => handleChange(e)}
                      id="newUserPassword1"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Role:</label>
                  <div class="col-lg-9">
                    <select
                      class="form-select"
                      name="role"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                      onChange={(e) => handleChange(e)}
                    >
                      <option selected="">Open this select menu</option>
                      <option value="store_owner" class="text-capitalize">
                        Store Owner
                      </option>
                      <option
                        value="delivery_guy"
                        class="text-capitalize"
                        id="delivery-guy"
                      >
                        Delivery Guy
                      </option>
                      <option value="Staff" class="text-capitalize">
                        Staff
                      </option>
                    </select>
                  </div>
                </div>

                <div class="text-right">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    SAVE
                    {/* <i class="icon-database-insert ml-1"></i> */}
                  </button>
                </div>
                <input type="hidden" name="token" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!--manage roles Modal --> */}
      <div
        class="modal fade"
        id="managerolesModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="managerolesLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addBulkStoreLabel">
                View & Edit User
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <div class="modal-body bulk-upload">
              <form action="#" method="POST" enctype="multipart/form-data">
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Name:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter Full Name"
                      required=""
                      autocomplete="new-name"
                    />
                  </div>
                </div>
                <div class="form-group row  mt-3">
                  <label class="col-lg-3 col-form-label">Email:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Enter Email Address"
                      required=""
                      autocomplete="new-email"
                    />
                  </div>
                </div>
                <div class="form-group row  mt-3">
                  <label class="col-lg-3 col-form-label">Phone:</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      placeholder="Enter Phone Number"
                      required=""
                      autocomplete="new-phone"
                    />
                  </div>
                </div>
                <div class="form-group row form-group-feedback form-group-feedback-right  mt-3">
                  <label class="col-lg-3 col-form-label">Password:</label>
                  <div class="col-lg-9">
                    <input
                      name="password"
                      type="password"
                      class="form-control"
                      placeholder="Enter Password (min 6 characters)"
                      required=""
                      autocomplete="new-password"
                      id="newUserPassword2"
                    />
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <label class="col-lg-3 col-form-label">Role:</label>
                  <div class="col-lg-9">
                    <select
                      class="form-select"
                      id="exampleFormControlSelect2"
                      aria-label="Default select example"
                    >
                      <option value="Store Owner" class="text-capitalize">
                        Store Owner
                      </option>
                      <option
                        value="Delivery Guy"
                        class="text-capitalize"
                        id="delivery-guy"
                      >
                        Delivery Guy
                      </option>
                      <option value="Staff" class="text-capitalize">
                        Staff
                      </option>
                    </select>
                  </div>
                </div>

                <div class="text-right mt-4">
                  <button type="submit" class="btn btn-danger">
                    Ban User
                    <i class="icon-database-insert ml-1"></i>
                  </button>
                  <button type="submit" class="btn btn-info float-right">
                    Update
                    <i class="icon-database-insert ml-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
                        <strong>All Users</strong>
                      </h3>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-labeled btn-labeled-left mx-3"
                          id="addNewUser"
                          data-bs-toggle="modal"
                          data-bs-target="#addNewUserModal"
                        >
                          <b>
                            <i className="bx bx-plus"></i>
                          </b>
                          Add New User
                        </button>
                      </div>
                    </div>
                    <Table rows={rows} headers={headers} showsearch={false} />
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
    </>
  );
};

export default AllUsers;
