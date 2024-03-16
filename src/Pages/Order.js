import React, { useState } from "react";
import { Header } from "../UI";
import "../UI/Css/Style.css";
import "../UI/Css/Mobile.css";
import "../UI/Css/Medium.css";
import { ShoeA, ShoeB, ShoeC, ShoeD } from "../Assets";

export default function Order() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Product Selection function on click
  const handleProductClick = (productImage) => {
    setSelectedProduct(productImage);
  };

  return (
    <main className="mainOrderHome">
      <div className="homeHeader">
        <Header />
      </div>
      <section className="orderSection">
        {/* Trust */}
        <div className="trust">
          <p className="trustText">Trusted by industry experts</p>
        </div>

        <section className="orders">
          <div className="orderContainer">
            <div className="orderPlacing">
              {/* Rendered product images */}
              <div className="product">
                <img
                  src={ShoeA}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeA)}
                />
                <img
                  src={ShoeB}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeB)}
                />
                <img
                  src={ShoeC}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeC)}
                />
                <img
                  src={ShoeD}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeD)}
                />
                <img
                  src={ShoeA}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeA)}
                />
                <img
                  src={ShoeB}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeB)}
                />
                <img
                  src={ShoeC}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeC)}
                />
                <img
                  src={ShoeD}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeD)}
                />
                <img
                  src={ShoeA}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeA)}
                />
                <img
                  src={ShoeB}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeB)}
                />
                <img
                  src={ShoeC}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeC)}
                />
                <img
                  src={ShoeD}
                  alt="Product"
                  onClick={() => handleProductClick(ShoeD)}
                />
              </div>
            </div>
          </div>

          {/* Display selected products */}
          <div className="orderShow">
            {selectedProduct && (
              <img
                src={selectedProduct}
                alt="Selected Product"
                className="selectedProduct"
              />
            )}
            <div className="buttons">
              <div className="btnContainer">
                <button className="previous">Previous</button>
                <button className="next">Next</button>
              </div>
            </div>
          </div>
          <div className="orderDetails">
            <div className="orderDetailsContainer">
              <h1 className="orderDetailsH1">Purchase Your First Product</h1>
              <h4 className="orderDetailsH4">from NGN 20,000</h4>
              <p className="orderDetailsP">
                Lorem akhvhdvdwuldvkdbdkbdbiuiwiduguwdiujkdbv snk
                kbcscsgcwydwf8fevhvehvweduefyudfeydu
              </p>
            </div>
            <div className="orderChoices">
              <div className="orderColorChoice">
                <h1 className="orderColorChoiceH1">Color - Blue</h1>
                <div className="orderColorChoicePick">
                  <div className="orderColorChoiceA">
                    <input type="checkbox" />
                    <p>Blue</p>
                  </div>
                  <div className="orderColorChoiceB">
                    <input type="checkbox" />
                    <p>White</p>
                  </div>
                </div>
              </div>
              <div className="orderPricing">
                <div className="orderPackage">
                  <h1 className="orderPackageh1">
                    Package <span>-Early Bird</span>
                  </h1>
                  <p className="orderPackageP">5 left</p>
                </div>
                <div className="orderPrice">
                  <div className="pricePicking">
                    <input type="checkbox" />
                    <h1 className="orderPriceh1">Early Bird</h1>
                    <h2 className="orderPriceh2">NGN 10,000</h2>
                    <h3 className="orderPriceh3">NGN 30,000</h3>
                  </div>
                  <div className="pricePicking">
                    <input type="checkbox" />
                    <h1 className="orderPriceh1">Early Bird</h1>
                    <h2 className="orderPriceh2">NGN 10,000</h2>
                    <h3 className="orderPriceh3">NGN 30,000</h3>
                  </div>
                  <div className="pricePicking">
                    <input type="checkbox" />
                    <h1 className="orderPriceh1">Early Bird</h1>
                    <h2 className="orderPriceh2">NGN 10,000</h2>
                    <h3 className="orderPriceh3">NGN 30,000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="btn">
          <button className="purchaseBtn">Purchase</button>
        </div>
      </section>
    </main>
  );
}
