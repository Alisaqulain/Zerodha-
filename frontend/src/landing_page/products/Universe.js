import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      <div className="row text-center">
        {/* Card Items */}
        {[
          {
            img: "media/images/zerodhaFundhouse.png",
            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
          },
          {
            img: "media/images/sensibullLogo.svg",
            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
          },
          {
            img: "https://zerodha.com/static/images/partners/tijori.svg",
            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
          },
          {
            img: "media/images/streakLogo.png",
            text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
          },
          {
            img: "media/images/smallcaseLogo.png",
            text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
          },
          {
            img: "media/images/dittoLogo.png",
            text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
          },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 p-4">
            <img src={item.img} className="img-fluid" style={{ width: "40%" }} alt="Platform Logo" />
            <p className="text-muted mt-3" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary fs-5 px-4 py-2">Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
