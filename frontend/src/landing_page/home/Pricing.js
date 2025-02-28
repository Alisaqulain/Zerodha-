import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-5">
          <h1 className="fw-bold">Unbeatable pricing</h1>
          <p className="fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-semibold">
            See pricing <i className="fa fa-arrow-right ms-1"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <div className="row text-center">
            {/* First Pricing Box */}
            <div className="col-6 border p-4">
              <h1 className="mb-3 text-primary">
                <i className="fa fa-inr"></i> 0
              </h1>
              <p className="fw-semibold">
                Free account <br />
                opening
              </p>
            </div>

            {/* Second Pricing Box */}
            <div className="col-6 border p-4">
              <h1 className="mb-3 text-primary">
                <i className="fa fa-inr"></i> 20
              </h1>
              <p className="fw-semibold">
                Free equity delivery <br />
                and direct mutual fund
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
