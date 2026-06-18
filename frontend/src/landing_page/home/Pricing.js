import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div>
            <h1>Unbeatable pricing</h1>
            <p className="mb-3">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="#" style={{textDecoration:"none"}}>
              See pricing <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-5 d-flex container">
          <div className="col-6 border p-5"style={{width:"60%",height:"80%"}}>
            <b className="fs-1 p-5 ms-4">₹0</b>
            <p className="mt-3 ms-4">Free equity delivery and direct mutual funds</p>
          </div>
          <div className="col-6 border p-5 "style={{width:"60%",height:"80%"}}>
            <b className="fs-1 p-5 ms-4">₹20</b>
            <p className="mt-3 ms-5">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
