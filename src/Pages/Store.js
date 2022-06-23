import React, { useState, useEffect } from "react";
import moment from "moment";
import Sidebar from "../Components/Sidebar";
import axios from "../api/server_base_url";
import server_base_url_string from "../api/server_base_url_string";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Table from "../Components/Table";
const ADD_NEW_STORE = "/create_store";
const GET_STORES = "/get_stores/all";
const Store = () => {
  // create state to store the data from form
  const [storeData, setStoreData] = useState({
    storename: "",
    description: "",
    default_rating: "",
    approx_delivery_time: "",
    approx_price_for_two: "",
    full_address: "",
    pincode: "",
    landMark: "",
    latitude: "",
    longitude: "",
    certificate_or_license_code: "",
    store_charge: "",
    delivery_type: "",
    delivery_radius: "",
    delivery_charge_type: "",
    delivery_charge: "",
    base_delivery_charge: "",
    base_delivery_distance: "",
    extra_delivery_charge: "",
    extra_delivery_distance: "",
    is_featured: false,
    min_order_price: "",
    commission_rate: "",
  });
  const [storeImg, setStoreImg] = useState([]);
  const [rows, setRows] = useState([]);
  const [storeAdded, setStoreAdded] = useState(0);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStoreData({ ...storeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (var key in storeData) {
      formData.append(key, storeData[key]);
    }
    for (let key in storeImg) {
      formData.append("storeImg", storeImg[key]);
    }
    axios.post(ADD_NEW_STORE, formData).then((res) => {
      alert("uploaded successfully");
      setStoreData({
        storename: "",
        description: "",
        default_rating: "",
        approx_delivery_time: "",
        approx_price_for_two: "",
        full_address: "",
        pincode: "",
        landMark: "",
        latitude: "",
        longitude: "",
        certificate_or_license_code: "",
        store_charge: "",
        delivery_type: "",
        delivery_radius: "",
        delivery_charge_type: "",
        delivery_charge: "",
        base_delivery_charge: "",
        base_delivery_distance: "",
        extra_delivery_charge: "",
        extra_delivery_distance: "",
        is_featured: false,
        min_order_price: "",
        commission_rate: "",
      });
      setStoreImg([]);
      setStoreAdded(storeAdded + 1);
    });
  };

  useEffect(() => {
    axios
      .post(GET_STORES)
      .then((res) => {
        // console.log(res.data);
        let dummy_rows = [];
        res.data.forEach((item, index) => {
          dummy_rows = [
            ...dummy_rows,
            [
              <img
                src={server_base_url_string + item.storeImg}
                alt="store_image"
                className="w-px-50"
              />,
              item.storename,
              item.full_address,
              "pavan",
              moment(item.joined_date).format("MMMM Do YYYY, h:mm:ss a"),
              <div className="form-check form-switch mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={item.live_status}
                />
              </div>,
              <a href="#" className="btn btn-sm btn-primary">
                {" "}
                Edit
              </a>,
            ],
          ];
        });
        console.log(dummy_rows);
        setRows(dummy_rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [storeAdded]);

  const headers = [
    "Image",
    "Name",
    "Description",
    "Rating",
    "Joined date",
    "Status",
    "Action",
  ];

  return (
    <div>
      {/* <!-- / Add New Store -->
          <!-- Modal --> */}
      <div
        className="modal fade"
        id="addNewStoreModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="addNewStoreModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addNewStoreModalLabel">
                Add New Store
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body store-body">
              <form onSubmit={handleSubmit}>
                {/* ----storename------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Store Name <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="storename"
                      placeholder="Store Name"
                      required=""
                      value={storeData.storename}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* ----description------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="description"
                      placeholder="Store Short Description"
                      required=""
                      value={storeData.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* ----image------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="storeImg"
                      onChange={(e) => setStoreImg(e.target.files)}
                    />
                  </div>
                </div>
                {/* -----default_rating------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Default Rating <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control rating"
                      name="default_rating"
                      placeholder="Rating from 1-5"
                      required=""
                      value={storeData.default_rating}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* ----approx_delivery_time------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Approx Delivery Time <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control delivery_time"
                      name="approx_delivery_time"
                      placeholder="Time in Minutes"
                      required=""
                      value={storeData.approx_delivery_time}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----approx_price_for_two----- */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Approx Price for Two <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control price_range"
                      name="approx_price_for_two"
                      placeholder="Approx Price for 2 People in $"
                      required=""
                      value={storeData.approx_price_for_two}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----full_address------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Full Address <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="full_address"
                      placeholder="Full Address of Store"
                      required=""
                      value={storeData.full_address}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----pincode------ */}
                <div className="form-group row">
                  <label
                    className="col-lg-3 col-form-label"
                    data-popup="tooltip"
                    title=""
                    data-placement="bottom"
                    data-original-title="Pincode / Postcode / Zip Code"
                  >
                    Pincode
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="pincode"
                      placeholder="Pincode / Postcode / Zip Code of Store"
                      value={storeData.pincode}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----landMark------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">Land Mark:</label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="landMark"
                      placeholder="Any Near Landmark"
                      value={storeData.landMark}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----latitude and longitude------ */}
                <div className="form-group row">
                  <div className="col-lg-6">
                    <label className="col-form-label">
                      Latitude <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control  gllpLatitude latitude"
                      name="latitude"
                      placeholder="Latitude of the Store"
                      required="required"
                      value={storeData.latitude}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label className="col-form-label">
                      Longitude <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control  gllpLongitude longitude"
                      name="longitude"
                      placeholder="Longitude of the Store"
                      required="required"
                      value={storeData.longitude}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----certificate_or_license_code------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Certificate/License Code:
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control"
                      name="certificate_or_license_code"
                      placeholder="Certificate Code or License Code"
                      value={storeData.certificate_or_license_code}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----store_charge------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Store Charge (Packing/Extra):
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control restaurant_charges"
                      name="store_charge"
                      placeholder="Store Charge in $"
                      value={storeData.store_charge}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----delivery_type------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Delivery Type <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <select
                      className="form-select"
                      id="exampleFormControlSelect1"
                      aria-label="Default select example"
                      name="delivery_type"
                      defaultValue={"0"}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="0" disabled>
                        Select Delivery Type
                      </option>
                      <option value="1">Self Pick Up</option>
                      <option value="2">Both Delvery & Self Pick Up</option>
                    </select>
                  </div>
                </div>
                {/* -----delivery_radius------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Delivery Radius in Km:
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control delivery_radius"
                      name="delivery_radius"
                      placeholder="Delivery Radius in KM (If left blank, delivery radius will be set to 10 KM)"
                      value={storeData.delivery_radius}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* -----delivery_charge_type------ */}
                <div className="delivery-div">
                  <div className="form-group row">
                    <label className="col-lg-3 col-form-label">
                      Delivery Charge Type{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="col-lg-9">
                      <select
                        className="form-select"
                        id="exampleFormControlSelect2"
                        aria-label="Default select example"
                        name="delivery_charge_type"
                        defaultValue="0"
                        onChange={(e) => handleChange(e)}
                      >
                        <option key="0" value="0" disabled>
                          Select Delivery Charge Type
                        </option>
                        <option key="1" value="1">
                          Fixed Charge
                        </option>
                        <option key="2" value="2">
                          Dynamic Charge
                        </option>
                      </select>
                    </div>
                  </div>
                  {storeData.delivery_charge_type !== "" &&
                  storeData.delivery_charge_type === "1" ? (
                    <div className="form-group row" id="deliveryCharge">
                      <label className="col-lg-3 col-form-label">
                        Delivery Charge:
                      </label>
                      <div className="col-lg-9">
                        <input
                          type="text"
                          className="form-control delivery_charges"
                          name="delivery_charge"
                          placeholder="Delivery Charge in ₹"
                          value={storeData.delivery_charge}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                  ) : null}
                  {storeData.delivery_charge_type !== "" &&
                  storeData.delivery_charge_type === "2" ? (
                    <div id="dynamicChargeDiv" className="hidden">
                      <div className="form-group">
                        <div className="col-lg-12 row">
                          <div className="col-lg-3">
                            <label className="col-lg-12 col-form-label">
                              Base Delivery Charge:
                            </label>
                            <input
                              type="text"
                              className="form-control base_delivery_charge"
                              name="base_delivery_charge"
                              placeholder="In ₹"
                              value={storeData.base_delivery_charge}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-lg-3">
                            <label className="col-lg-12 col-form-label">
                              Base Delivery Distance:
                            </label>
                            <input
                              type="text"
                              className="form-control base_delivery_distance"
                              name="base_delivery_distance"
                              placeholder="In Kilometer (KM)"
                              value={storeData.base_delivery_distance}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-lg-3">
                            <label className="col-lg-12 col-form-label">
                              Extra Delivery Charge:
                            </label>
                            <input
                              type="text"
                              className="form-control extra_delivery_charge"
                              name="extra_delivery_charge"
                              placeholder="In ₹"
                              value={storeData.base_delivery_charge}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-lg-3">
                            <label className="col-lg-12 col-form-label">
                              Extra Delivery Distance:
                            </label>
                            <input
                              type="text"
                              className="form-control extra_delivery_distance"
                              name="extra_delivery_distance"
                              placeholder="In Kilometer (KM)"
                              value={storeData.extra_delivery_distance}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                        <p className="help-text mt-2 mb-0 text-muted">
                          {" "}
                          Base delivery charges will be applied to the base
                          delivery distance. And for every extra delivery
                          distance, extra delivery charge will be applied.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                {/* -----is_featured------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Is Featured?
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked={storeData.is_featured}
                      onChange={(e) =>
                        setStoreData({
                          ...storeData,
                          is_featured: !storeData.is_featured,
                        })
                      }
                    />
                  </div>
                </div>
                {/* -----min_order_price------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Min Order Price{" "}
                    <i
                      className="icon-question3 ml-1"
                      data-popup="tooltip"
                      title=""
                      data-placement="top"
                      data-original-title="Set the value as 0 if not required"
                    ></i>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control min_order_price"
                      name="min_order_price"
                      placeholder="Min Cart Value before discount and tax $"
                      value={storeData.min_order_price}
                      onChange={(e) => handleChange(e)}
                      required="required"
                    />
                  </div>
                </div>
                {/* -----commission_rate------ */}
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label">
                    Commission Rate % <span className="text-danger">*</span>
                  </label>
                  <div className="col-lg-9">
                    <input
                      type="text"
                      className="form-control commission_rate"
                      name="commission_rate"
                      placeholder="Commission Rate %"
                      required=""
                      value={storeData.commission_rate}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save Store
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!--addBulkStoreModal Modal --> */}
      <div
        className="modal fade"
        id="addBulkStoreModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="addBulkStoreLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addBulkStoreLabel">
                CSV Bulk Upload for Stores
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
                  <label className="col-lg-2 col-form-label">CSV File: </label>
                  <div className="col-lg-10">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
                <div className="text-left mt-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="downloadSampleCsv"
                    // onClick={window.open('assets/sample-csv.csv')}
                  >
                    Download Sample CSV
                    <i className="bx bx-download"></i>
                  </button>
                </div>
                <hr />
                <div className="text-right float-right mt-3">
                  <button type="submit" className="btn btn-primary">
                    Upload
                    <i className="bx bx-upload"></i>
                  </button>
                </div>
                <input type="hidden" name="" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 
      .
      .
      main code that displays buttons to add stores and table to list the stores 
      .
      .
      */}
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
                      <strong>Stores Management</strong>
                    </h3>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary btn-labeled btn-labeled-left mr-5"
                        id="addNewStore"
                        data-bs-toggle="modal"
                        data-bs-target="#addNewStoreModal"
                        style={{ marginRight: "20px" }}
                      >
                        <b>
                          <i className="bx bx-plus"></i>
                        </b>
                        Add New Store
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-labeled btn-labeled-left"
                        id="addBulkStore"
                        data-bs-toggle="modal"
                        data-bs-target="#addBulkStoreModal"
                      >
                        <b>
                          <i className="bx bx-upload"></i>
                        </b>
                        Bulk CSV Upload
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
  );
};

export default Store;
