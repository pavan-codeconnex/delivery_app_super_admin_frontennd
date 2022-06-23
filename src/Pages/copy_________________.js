{/* <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="content mt-2 mb-5">
                    <div className="d-flex justify-content-between my-2">
                      <h3>Order details</h3>
                      <div>
                        <a
                          href="#"
                          id="printButton"
                          className="btn btn-secondary btn-labeled mr-1 mb-3"
                        >
                          {" "}
                          Print Bill
                        </a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card" id="printThis">
                          <div className="p-3">
                            <div className="d-flex justify-content-between">
                              <div className="form-group mb-0">
                                <h3>
                                  <strong>Wing Machine - College</strong>
                                  <br />
                                  <p
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: 400,
                                    }}
                                    className="mb-0"
                                  >
                                    OD-05-27-WY1E-NGREEPPRB
                                  </p>
                                </h3>
                              </div>
                              <div className="form-group mb-0">
                                <label className="control-label no-margin text-semibold mr-1">
                                  <strong>Order Date:</strong>
                                </label>
                                2022-05-27 - 09:03 AM
                              </div>
                            </div>
                            <hr />
                            <div>
                              <div className="row">
                                <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                    <label className="control-label no-margin text-semibold mr-1">
                                      <strong>
                                        <h5 className="font-weight-bold">
                                          Customer Details
                                        </h5>
                                      </strong>
                                    </label>
                                    <br />
                                    <p>
                                      <b>Name: </b> Geek
                                    </p>
                                    <p>
                                      <b>Email: </b> g******************m
                                    </p>
                                    <p>
                                      <b>Contact Number: </b>
                                      +*********9
                                    </p>
                                    <p>
                                      <b>Delivery Address: </b> , 57QM+9R9, Bibi
                                      Titi Mohammed Street, Dar es Salaam,
                                      Ilala, Dar es Salam, Tanzania
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <div className="form-group mb-1">
                                    <div
                                      className="d-flex justify-content-center align-items-center flex-column mb-1"
                                      style={{ border: "1px solid #ddd" }}
                                    >
                                      <div
                                        className="py-1"
                                        style={{ fontWeight: 900 }}
                                      >
                                        STATUS
                                      </div>
                                      <hr className="m-0 w-100" />
                                      <div
                                        className="py-1 text-success "
                                        style={{ fontWeight: 500 }}
                                      >
                                        Order Placed{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group mb-1 mt-2">
                                    <div className="d-flex">
                                      <div className="col p-0 mr-2">
                                        <div
                                          className="d-flex justify-content-center align-items-center flex-column mb-1"
                                          style={{ border: "1px solid #ddd" }}
                                        >
                                          <div
                                            className="py-1"
                                            style={{ fontWeight: 900 }}
                                          >
                                            Order Type
                                          </div>
                                          <hr className="m-0 w-100" />
                                          <div
                                            className="py-1 text-warning"
                                            style={{ fontWeight: "500" }}
                                          >
                                            Delivery
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col p-0">
                                        <div
                                          className="d-flex justify-content-center align-items-center flex-column mb-1"
                                          style={{ border: "1px solid #ddd" }}
                                        >
                                          <div
                                            className="py-1"
                                            style={{ fontWeight: 900 }}
                                          >
                                            Payment Mode
                                          </div>
                                          <hr className="m-0 w-100" />
                                          <div
                                            className="py-1 text-warning"
                                            style={{ fontWeight: 500 }}
                                          >
                                            COD
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-right mt-3">
                              <div className="form-group mb-2">
                                <div className="clearfix"></div>
                                <div className="row">
                                  <div className="col-md-12 p-2 mb-3">
                                    <div>
                                      <div
                                        className="d-flex mb-1 align-items-start"
                                        style={{ fontSize: "1.2rem" }}
                                      >
                                        <span className="badge rounded-pill bg-label-info">
                                          1x
                                        </span>
                                        <strong className="mr-1 w-100">
                                          Skillet Cookie
                                        </strong>
                                        <span className="badge bg-label-primary">
                                          ₹240
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="clearfix"></div>
                              <div className="float-right">
                                <table className="table table-bordered table-striped bill-calc-table">
                                  <tbody>
                                    <tr>
                                      <td className="text-left td-title">
                                        SubTotal
                                      </td>
                                      <td className="td-data"> ₹240</td>
                                    </tr>
                                    <tr>
                                      <td className="text-left td-title">
                                        Store Charge
                                      </td>
                                      <td className="td-data">₹30 </td>
                                    </tr>
                                    <tr>
                                      <td className="text-left td-title">
                                        Delivery Charge
                                      </td>
                                      <td className="td-data">₹25 </td>
                                    </tr>
                                    <tr>
                                      <td className="text-left td-title">
                                        <b>Total</b>
                                      </td>
                                      <td className="td-data"> ₹295</td>
                                    </tr>
                                    <tr>
                                      <td className="text-left td-title">
                                        Payable
                                      </td>
                                      <td className="td-data">
                                        <b>₹295</b>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 mb-5">
                        <div className="card">
                          <div className="card-body">
                            <p className="text-center mb-0">
                              <b>Delivery Pin: 63951</b>
                            </p>
                          </div>
                        </div>

                        <div className="card mt-3">
                          <div className="card-body">
                            <p className="text-center mb-0">
                              <b>Distance from Store to Customer: 3 km</b>
                            </p>
                          </div>
                        </div>

                        <div className="card mt-3">
                          <div className="card-body order-actions">
                            <h3 className="text-center">
                              {" "}
                              <strong> Order Actions </strong>{" "}
                            </h3>
                            <hr className="mt-1" />
                            <div className="form-group d-flex justify-content-center">
                              <form action="#" className="mr-1" method="POST">
                                <button className="btn btn-primary btn-labeled btn-labeled-left mr-1">
                                  <b>
                                    <i className="icon-checkmark3 ml-1"></i>{" "}
                                  </b>{" "}
                                  Accept Order
                                </button>
                              </form>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-danger dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Cancel Order
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Cancel Order
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Cancel with Full Refund
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Cancel with Half Refund
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-body">
                            <label className="control-label no-margin text-semibold mr-1">
                              <strong>Assign Delivery Guy</strong>
                            </label>
                            <form action="#" method="POST">
                              <div className="form-group row mb-0">
                                <div className="col-lg-12 mb-2">
                                  <select
                                    id="defaultSelect"
                                    className="form-select"
                                  >
                                    <option>Select Delivery Guy</option>
                                    <option value="1">Ravi</option>
                                    <option value="2">Suresh</option>
                                    <option value="3">Sunny</option>
                                  </select>
                                </div>
                                <br />
                                <div className="col-lg-12 mt-1 text-center float-right p-0">
                                  <button
                                    type="submit"
                                    className="btn btn-secondary mr-1"
                                  >
                                    Assign Delivery
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 mb-5">
                        <div className="card">
                          <div className="card-body text-center">
                            <h4 className="mb-0">
                              <b>Ongoing order</b>
                            </h4>
                            <span className="liveTimerNonCompleteOrder">
                              {" "}
                              16 hr 46 min 57 sec
                            </span>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-body">
                            <div>
                              <ul className="timeline-ul">
                                <li className="timeline-li">
                                  <div
                                    className="small"
                                    data-popup="tooltip"
                                    data-placement="left"
                                    title=""
                                    data-original-title="2022-05-27 - 09:03:46 AM"
                                  >
                                    <b>09:03 AM</b>
                                  </div>
                                  Order placed
                                  <span> by </span>
                                  <a href="#" className="text-default">
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

              <Footer />

              <div className="content-backdrop fade"></div>
            </div> */}