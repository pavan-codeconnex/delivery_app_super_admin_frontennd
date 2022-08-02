import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import Table from "../Components/Table";
import axios from "../api/server_base_url";
const CREATE_PROMO = "/createPromotion";
const GET_PROMOS = "/getAllPromotions";
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
  const [rows, setRows] = useState([]);
  const [data, setData] = useState({ is_active: false });
  const [promoAdded, setPromoAdded] = useState(0);

  const inputs = [
    {
      input_type: "text",
      label_name: "COUPON NAME",
      input_name: "coupon_name",
      placeholder: "Coupon Name",
    },
    {
      input_type: "text",
      label_name: "COUPON DESCRIPTION",
      input_name: "coupon_description",
      placeholder: "Coupon Description",
    },
    {
      input_type: "text",
      label_name: "COUPON CODE",
      input_name: "coupon_code",
      placeholder: "Coupon Code",
    },
    {
      input_type: "select",
      label_name: "DISCOUNT TYPE",
      input_name: "discount_type",
      options: [
        [1, "Fixed Amount Discount"],
        [2, "Percentage Discount"],
      ],
    },
    {
      input_type: "text",
      label_name: "MAX DISCOUNT",
      input_name: "max_discount",
      placeholder: "Max discount applicable in $",
    },
    {
      input_type: "text",
      label_name: "COUPON DISCOUNT",
      input_name: "coupon_discount",
      placeholder: "Coupon Discount",
    },
    {
      input_type: "date",
      label_name: "EXPIRY DATE",
      input_name: "expiry_date",
    },
    {
      input_type: "number",
      label_name: "MAX NUMBER OF TIMES USABLE",
      input_name: "max_applicable_times",
      placeholder: "MAX NUMBER OF TIMES USABLE",
    },
    {
      input_type: "number",
      label_name: "MIN SUBTOTAL",
      input_name: "min_value",
      placeholder: "Min subtotal required for coupon in $",
    },
    {
      input_type: "text",
      label_name: "SUBTOTAL NOT REACHED MESSAGE",
      input_name: "min_value_error_msg",
      placeholder: "Subtotal not reached message",
    },
    {
      input_type: "select",
      label_name: "COUPON USER TYPE",
      input_name: "coupon_user_type",
      options: [
        [1, "Unlimited times for all user"],
        [2, "Once for new user for first order"],
        [3, "Once per user"],
        [4, "Define custom limit per user"],
      ],
    },
    {
      input_type: "checkbox",
      label_name: "IS ACTIVE",
      input_name: "is_active",
    },
  ];

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(CREATE_PROMO, data).then((response) => {
      if (response.status === 200) {
        alert("promotion created successfully");
        setData({});
        setPromoAdded(promoAdded + 1);
      } else {
        alert("something went wrong");
      }
    });
  };

  useEffect(() => {
    let dummy_rows = [];
    axios.get(GET_PROMOS).then((result) => {
      if (result.status === 200) {
        result.data.result.forEach((item) => {
          dummy_rows = [
            ...dummy_rows,
            [
              item.coupon_name,
              "dummy",
              item.coupon_code,
              item.discount_type,
              item.max_discount_amount,
              <button
                type="button"
                className="btn rounded-pill btn-outline-primary"
              >
                Active
              </button>,
              item.expiry_date,
              <>
                <a href="#" className="btn btn-sm btn-primary edit-btn">
                  {" "}
                  Edit
                </a>
                <a href="#" className="btn btn-sm btn-info">
                  {" "}
                  View
                </a>
              </>
            ],
          ];
        });
        setRows(dummy_rows)
      }
    });
  }, [promoAdded]);

  return (
    <>
      {/* add promotions model */}
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
              <form onSubmit={handleSubmit}>
                {inputs.map((input) => {
                  if (
                    input.input_type === "text" ||
                    input.input_type === "number" ||
                    input.input_type === "date"
                  ) {
                    return (
                      <div class="form-group row">
                        <label class="col-lg-3 col-form-label">
                          {input.label_name} <span class="text-danger">*</span>{" "}
                          :
                        </label>
                        <div class="col-lg-9">
                          <input
                            type={input.input_type}
                            class="form-control"
                            name={input.input_name}
                            placeholder={input.placeholder}
                            required=""
                            disabled={
                              input.input_name === "max_discount" ||
                              input.input_name === "coupon_discount"
                                ? data.discount_type
                                  ? (data.discount_type === "1" &&
                                      input.input_name === "max_discount") ||
                                    (data.discount_type === "2" &&
                                      input.input_name === "coupon_discount")
                                    ? false
                                    : true
                                  : true
                                : false
                            }
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    );
                  } else if (input.input_type === "select") {
                    return (
                      <div class="form-group row">
                        <label class="col-lg-3 col-form-label">
                          {input.input_name} <span class="text-danger">*</span>{" "}
                          :
                        </label>
                        <div class="col-lg-9">
                          <select
                            id="defaultSelect"
                            class="form-select"
                            name={input.input_name}
                            onChange={(e) => handleChange(e)}
                          >
                            <option>Default select</option>
                            {input.options.map((option) => {
                              return (
                                <option value={option[0]}>{option[1]}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    );
                  } else if (input.input_type === "checkbox") {
                    return (
                      <div class="form-group row">
                        <label class="col-lg-3 col-form-label">
                          {input.label_name}
                        </label>
                        <div class="col-lg-9 d-flex align-items-center">
                          <div class="checkbox checkbox-switchery">
                            <input
                              class="form-check-input"
                              type={input.input_type}
                              name={input.input_name}
                              id="flexSwitchCheckChecked"
                              checked={data.is_active}
                              onClick={(e) =>
                                setData({ ...data, is_active: !data.is_active })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}

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
      {/* main page of promotions */}
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
