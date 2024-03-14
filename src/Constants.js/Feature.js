import React from "react";
import { Camera, Security, Speech, Wallet } from "../Assets";
import '../UI/Css/Style.css'
import '../UI/Css/Mobile.css'
import '../UI/Css/Medium.css'

export default function Feature() {
  return (
    <main className="featuresMain">
      {/* Features */}
      <div className="features">
        <div className="featuresContainer">
          <h1 className="featuresHeading">Security</h1>
          <p className="featuresText">
            Worried about scammers? No more! With money in transit devaluation
            (MITD), your peace of mind meets financial security. With our
            cutting edge system, you can reverse transactions done incorrectly
            or fraudulently within a reasonable timeframe. Say goodbye to
            unauthorized transactions and hello to swift resolutions.
          </p>
          <img src={Security} alt="Security" className="security" />
        </div>
        <div className="featuresContainer">
          <h1 className="featuresHeading">Lightning-fast In-chat payment.</h1>
          <p className="featuresText">
            Say goodbye to worries about fake transfers or declined
            transactions. With our innovative platform, payments can be
            seamlessly received right in your DMs. Experience the thrill of
            watching your money grow in real-time as transactions unfold
            directly within your messages, embrace the convenience of instant
            transactions.
          </p>
          <img src={Wallet} alt="Security" className="security" />
        </div>
        <div className="featuresContainer">
          <h1 className="featuresHeading">GXGs</h1>
          <p className="featuresText">
            Unlock a world of opportunities to engage, collaborate and thrive
            within your chosen community. Join groups based on shared interests,
            goals, or affiliations and proudly display your proof of membership.
          </p>
          <img src={Speech} alt="Security" className="security" />
        </div>
        <div className="featuresContainer">
          <h1 className="featuresHeading">Soft-servants</h1>
          <p className="featuresText">
            Our revolutionary soft servant is your ultimate digital assistant
            for seamless convenience. With soft servants you can effortlessly
            make commands and place requests for a wide array of tasks.
            Experience the next level of convenience today and say goodbye to
            the hassle of managing multiple apps and platforms and let soft
            servant handle all your needs.
          </p>
          <img src={Camera} alt="Security" className="security" />
        </div>
      </div>
    </main>
  );
}
