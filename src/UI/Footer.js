import React from "react";
import {
  Email,
  Facebook,
  Instagram,
  Linkedin,
  Location,
  Logo,
  Phone,
  Right,
  Twitter,
} from "../Assets";
import { Link } from "react-router-dom";
import "../UI/Css/Style.css";
import "../UI/Css/Mobile.css";
import "../UI/Css/Medium.css";

export default function Footer() {
  return (
    <main className="mainFooter">
      {/* Footer */}
      <footer className="footerContainer">
        <section className="footerSectionA">
          <div className="logoAndSub">
            <div className="logoAndText">
              <Link to="/">
                <img src={Logo} alt="GranularX" />
              </Link>
              <p className="logoText">Granular X</p>
            </div>
            <form className="subForm">
              <h1 className="subFormH1">Stay Updated on what's new</h1>
              <div className="inputAndImage">
                <input type="text" className="subFormInput" />
                <div className="subFormRightCont">
                  <img src={Right} alt="right" className="subFormRight" />
                </div>
              </div>
            </form>
          </div>
          <div className="contactUsSec">
            <h1>Contact Us</h1>
            <div className="contactusContents">
              <div className="phone">
                <img src={Phone} alt="phone" />
                <p>+234 813 762 0475</p>
              </div>
              <div className="email">
                <img src={Email} alt="email" />
                <p>thegranulax@gmail.com</p>
              </div>
              <div className="location">
                <img src={Location} alt="location" />
                <p>
                  Warde Building 16, Amodu Ojikutu street off Saka Tinubbu,
                  Victoria Island Lagos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="lineBreak"></div>

        <section className="footerSectionB">
          <div className="copyAndSocial">
            <div className="copyAndTerms">
              <p>Copyright © 2021 GranularX</p>
              <div className="termsAndPrivacy">
                <a href="">Terms</a>
                <a href="">Privacy</a>
              </div>
            </div>
            <div className="socials">
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </main>
  );
}
