import React,{useState,useEffect} from "react";
import moment from "moment";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Table from "../Components/Table";
import axios from "../api/server_base_url";
const ADD_USER = "/addUser";
const GET_USERS = "/getUsers";

const DeliveryGuy = () => {
  const headers = ["Name", "Email", "Phone", "Role", "Created Date", "Action"];
  const [data, setData] = useState({role:"delivery_guy"});
  const [rows,setRows]=useState([])
  const [storeAdded, setStoreAdded] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
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
    axios.post(GET_USERS,{role:"delivery_guy"}).then((res, err) => {
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
      {/* <!--addNewdeliveryModal Modal --> */}
      <div
        className="modal fade"
        id="addNewdeliveryModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="addNewUserdeliveryLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addNewdeliveryModalLabel">
                Add Delivery Guy
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <div className="modal-body store-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Name:</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Full Name"
                      required=""
                      autoComplete="new-name"
                      onChange={(e)=>{handleChange(e)}}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Email:</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      required=""
                      autoComplete="new-email"
                      onChange={(e)=>{handleChange(e)}}

                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Phone:</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      required=""
                      autoComplete="new-phone"
                      onChange={(e)=>{handleChange(e)}}

                    />
                  </div>
                </div>
                <div className="form-group row form-group-feedback form-group-feedback-right">
                  <label className="col-lg-3 col-form-label">Password:</label>
                  <div className="col-lg-9">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Enter Password (min 6 characters)"
                      required=""
                      autoComplete="new-password"
                      id="newUserPassword"
                      onChange={(e)=>{handleChange(e)}}

                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Role:</label>
                  <div className="col-lg-9">
                    <input
                      name="store"
                      type="text"
                      className="form-control"
                      placeholder="Delivery Guy"
                      value={"delivery_guy"}
                      disabled={true}
                      autoComplete="new-storeuser"
                      id="newstoreuserPassword"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <button type="submit" className="btn btn-primary">
                    SAVE
                    <i className="icon-database-insert ml-1"></i>
                  </button>
                </div>
                <input type="hidden" name="token" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!--View & Edit Delivery Guy Modal Modal --> */}
    <div
      className="modal fade"
      id="deliveryrolesModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="deliveryrolesLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addBulkdeliveryLabel">
              View & Edit Delivery Guy
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div className="modal-body bulk-upload">
            <form action="#" method="POST" encType="multipart/form-data">
              <div className="form-group row">
                <label className="col-lg-3 col-form-label">Name:</label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Full Name"
                    required=""
                    autoComplete="new-name"
                  />
                </div>
              </div>
              <div className="form-group row  mt-3">
                <label className="col-lg-3 col-form-label">Email:</label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    required=""
                    autoComplete="new-email"
                  />
                </div>
              </div>
              <div className="form-group row  mt-3">
                <label className="col-lg-3 col-form-label">Phone:</label>
                <div className="col-lg-9">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    required=""
                    autoComplete="new-phone"
                  />
                </div>
              </div>
              <div
                className="form-group row form-group-feedback form-group-feedback-right  mt-3"
              >
                <label className="col-lg-3 col-form-label">Password:</label>
                <div className="col-lg-9">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password (min 6 characters)"
                    required=""
                    autoComplete="new-password"
                    id="newUserPassword"
                  />
                </div>
              </div>

              <div className="text-right mt-4">
                <button type="submit" className="btn btn-danger">
                  Ban Delivery Guy
                  <i className="icon-database-insert ml-1"></i>
                </button>
                <button type="submit" className="btn btn-info float-right">
                  Update
                  <i className="icon-database-insert ml-1"></i>
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
                        <strong>Delivery Guys</strong>
                      </h3>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-labeled btn-labeled-left mx-3"
                          id="addNewdelivery"
                          data-bs-toggle="modal"
                          data-bs-target="#addNewdeliveryModal"
                        >
                          <b>
                            <i className="bx bx-plus"></i>
                          </b>
                          Add Delivery Guys
                        </button>
                      </div>
                    </div>
                    <Table rows={rows} headers={headers} showsearch={false}/>
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

export default DeliveryGuy;
