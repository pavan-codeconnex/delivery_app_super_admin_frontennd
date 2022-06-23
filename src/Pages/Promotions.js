import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Table from "../Components/Table";

const Promotions = () => {
  const headers = [
    "NAME",
    "COUPON APPLICABLE STORE",
    "COUPON CODE",
    "TYPE",
    "DISCOUNT",
    "STATUS",
    "EXPIRY DATE",
    "ACTION",
  ];
  const rows = [
    [
      "New10",
      "The halal guys",
      "NEW10",
      <button type="button" className="btn rounded-pill btn-outline-primary">
        Amount
      </button>,
      "₹ 30",
      <button type="button" className="btn rounded-pill btn-outline-primary">
        Active
      </button>,
      <div className="form-check form-switch mb-2">
        1 year ago (2020-10-31)
      </div>,
      <>
        <a href="#" className="btn btn-sm btn-primary edit-btn">
          {" "}
          Edit
        </a>
        <a href="#" className="btn btn-sm btn-info">
          {" "}
          View
        </a>
      </>,
    ],
  ];
  return (
    <>
      {/* <!--addCouponModal Modal --> */}
      <div
        class="modal fade"
        id="addCouponModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="addCouponLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addCouponLabel">
                Add New Coupon
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <div class="modal-body coupon-new">
              <form action="#" method="POST">
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon Name <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      placeholder="Coupon Name"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon Description:
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control"
                      name="description"
                      placeholder="Coupon Description"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon Code <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control"
                      name="code"
                      placeholder="Coupon Code"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Dicsount Type <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <select id="defaultSelect" class="form-select">
                      <option>Please select</option>
                      <option value="1">Fixed Amount Discount</option>
                      <option value="2">Percentage Discount</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row hidden" id="max_discount">
                  <label class="col-lg-3 col-form-label">Max Discount</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control max_discount"
                      name="max_discount"
                      placeholder="Max discount applicable in $"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon Discount <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control  discount"
                      name="discount"
                      placeholder="Coupon Discount"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="row">
                    <label class="col-lg-3 col-form-label">
                      <span class="text-danger">*</span>Expiry Date:
                    </label>
                    <div class="col-lg-9">
                      <input
                        class="form-control"
                        type="date"
                        value="2021-06-18"
                        id="date-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon Applicable Stores
                    <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <select
                      multiple
                      data-style="bg-white rounded-pill px-4 py-3 shadow-sm "
                      class="selectpicker w-100"
                    >
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Italy</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row mt-3">
                  <label class="col-lg-3 col-form-label">
                    Max number of use in total
                    <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control max_count"
                      name="max_count"
                      placeholder="Max number of use"
                      required=""
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Min Subtotal</label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control min_subtotal"
                      name="min_subtotal"
                      placeholder="Min subtotal required for coupon in $"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Subtotal not reached message
                  </label>
                  <div class="col-lg-9">
                    <input
                      type="text"
                      class="form-control"
                      name=""
                      placeholder="Subtotal not reached message"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">
                    Coupon User Type <span class="text-danger">*</span> :
                  </label>
                  <div class="col-lg-9">
                    <select id="defaultSelect" class="form-select">
                      <option>Default select</option>
                      <option value="1">Unlimited times for all user</option>
                      <option value="2">
                        Once for new user for first order
                      </option>
                      <option value="3">Once per user</option>
                      <option value="4">Define custom limit per user</option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">Is Active?</label>
                  <div class="col-lg-9 d-flex align-items-center">
                    <div class="checkbox checkbox-switchery">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked=""
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div class="text-right float-right">
                  <button type="submit" class="btn btn-primary">
                    SAVE
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
                        <strong>Promotions</strong>
                      </h3>
                      <div>
                        <button
                          type="button"
                          className="btn btn-secondary btn-labeled btn-labeled-left mr-2"
                          id="addCoupon"
                          data-bs-toggle="modal"
                          data-bs-target="#addCouponModal"
                        >
                          <b>
                            <i className="bx bx-plus"></i>
                          </b>
                          Add New Coupon
                        </button>
                      </div>
                    </div>
                    <Table rows={rows} headers={headers} showsearch={true} />
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

export default Promotions;
