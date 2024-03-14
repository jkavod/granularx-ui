import React from "react";
import { Camera, Right, Security, Speech, Wallet, WalletPic } from "../Assets";
import { Link } from "react-router-dom";
import { Features } from "../Constants.js";
import '../UI/Css/Style.css'
import '../UI/Css/Mobile.css'
import '../UI/Css/Medium.css'

export default function Body() {
  return (
    <main className="bodyMain">
      <section className="bodyMainSection">
        <div className="bodyMainHeadingDiv">
          <h1 className="textHeading">Features</h1>
          <div className="rightSide">
            <div className="rightSideCont">
              <div className="rightSideImgContainer">
                <img src={Right} alt="right" className="rightImg" />
              </div>
              <p className="rightText">Scroll</p>
            </div>
          </div>
        </div>
        {/* Features */}
        <section className="features">
          <Features />
        </section>

        {/* Consumers */}
        <section className="consumerSection">
          <div className="consumerSecContainer">
            <div className="consumerTextSection">
              <h4 className="consumerHeadingH4">For Consumers</h4>
              <h1 className="consumerHeadingH1">
                Use and invest in your favorite services from various sectors
                fast and easily.
              </h1>
              <p className="consumertextp">
                Book rides, order meals, invest, pay and many more...
              </p>
              <Link to={"/"} className="consumerBtn">
                Try it now
              </Link>
            </div>
            <div className="walletPicSec">
              <img src={WalletPic} alt="Wallet" className="walletPic" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
