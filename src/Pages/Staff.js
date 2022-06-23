import React,{useEffect,useState} from "react";
import Sidebar from "../Components/Sidebar";
// import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Table from "../Components/Table";
import axios from "../api/server_base_url";
import moment from "moment";
const ADD_USER = "/addUser";
const GET_USERS = "/getUsers";

const Staff = () => {
  const headers = ["Name", "Email", "Phone", "Role", "Created Date", "Action"];
  const [data, setData] = useState({role:"staff"});
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
    axios.post(GET_USERS,{role:"staff"}).then((res, err) => {
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
      {/* <!--addNewstaffModal Modal --> */}
      <div
        class="modal fade"
        id="addNewstaffModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addNewstaffModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addNewUserModalLabel">
                Add Staff
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
                      id="newUserPassword"
                      onChange={(e) => handleChange(e)}

                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Role:</label>
                  <div class="col-lg-9">
                    <input
                      name="store"
                      type="text"
                      class="form-control"
                      disabled={true}
                      value={"staff"}
                      autocomplete="new-storeuser"
                      id="newstoreuserPassword"
                    />
                  </div>
                </div>

                <div class="text-right">
                  <button type="submit" class="btn btn-primary">
                    SAVE
                    <i class="icon-database-insert ml-1"></i>
                  </button>
                </div>
                <input type="hidden" name="token" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!--staffrolesModal Modal --> */}
      <div
        class="modal fade"
        id="staffrolesModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staffrolesLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addBulkstaffLabel">
                View & Edit Staff
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
                      id="newUserPassword"
                    />
                  </div>
                </div>

                <div class="text-right mt-4">
                  <button type="submit" class="btn btn-danger">
                    Ban Staff
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
                        <strong>Staff</strong>
                      </h3>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-labeled btn-labeled-left mx-3"
                          id="addNewUser"
                          data-bs-toggle="modal"
                          data-bs-target="#addNewstaffModal"
                        >
                          <b>
                            <i className="bx bx-plus"></i>
                          </b>
                          Add Staff
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

export default Staff;
