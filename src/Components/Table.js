import React, { useState } from "react";
import server_base_url_string from "../api/server_base_url_string";

const Table = ({ rows, headers, showsearch }) => {
  const [searchedVal, setSearchedVal] = useState("");

  const searchRow = (row) => {
    for (let item in row) {
      console.log(row[item], searchedVal);
      if (
        typeof row[item] === "string" &&
        row[item]
          .toLocaleLowerCase()
          .includes(searchedVal.toString().toLocaleLowerCase())
      ) {
        return true;
        break;
      }
    }
    return false;
  };

  return (
    <div className="col-lg-12 mb-4 order-0">
      <div className="card">
        <div className="d-flex align-items-end row">
          <div className="col-sm-12">
            <div className="card-body">
              {showsearch ? (
                <div
                  className="col-sm-12"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p>download</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        marginBottom: 0,
                        marginRight: 5,
                      }}
                    >
                      search
                    </p>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="searchBox"
                      aria-describedby="searchBox"
                      value={searchedVal}
                      onChange={(e) => {
                        setSearchedVal(e.target.value);
                        console.log(searchedVal);
                      }}
                    ></input>
                  </div>
                </div>
              ) : null}

              <table
                id="dataTable"
                className="table table-striped"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    {headers.map((header, index) => {
                      return <th key={index}>{header}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows
                    .filter((row) => {
                      //   function to check if the search value is in the row
                      return searchRow(row);
                    })
                    .map((element, index) => {
                      return (
                        <tr key={index}>
                          {element.map((item, index) => {
                            return <td key={index}>{item}</td>;
                          })}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
