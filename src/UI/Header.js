import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Menu, XMark } from "../Assets";
import "../UI/Css/Style.css";
import "../UI/Css/Mobile.css";
import "../UI/Css/Medium.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="mainHeader">
      <header className="headerContainer">
        <div className="headerContents">
          {/* Desktop Header */}
          <div className="headerMenuDesktop">
            <a
              href="/"
              aria-label="GranularX"
              title="GranularX"
              className="logoContainer"
            >
              <img src={Logo} alt="GranularX" className="Logo" />
              <p className="logoText">Granular X</p>
            </a>

            <nav className="nav">
              <ul className="headerMenu">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="productBtn"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="featuresBtn"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    aria-label="About us"
                    title="About us"
                    className="aboutBtn"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <Link to={'/order'}
                    href="/"
                    className="signupBtn"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Order
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Header */}
          <div className="headerMenuMobile">
            <div className="headerMenuMobileLogoButton">
              <div className="headerMobileLogo">
                <a
                  href="/"
                  aria-label="GranularX"
                  title="GranularX"
                  className="logoContainer"
                >
                  <img src={Logo} alt="GranularX" className="Logo" />
                  <p className="logoText">Granular X</p>
                </a>
              </div>
              <a
                aria-label="Open Menu"
                title="Open Menu"
                className="openBtn"
                onClick={() => setIsMenuOpen(true)}
              >
                <img src={Menu} alt="Menu" />
              </a>
            </div>
            {isMenuOpen && (
              <div className="isOpenMenu">
                <div className="isOpenMenuContainer">
                  <div className="isOpenMenuContent">
                    <div className="logoContainerOpen">
                      <a
                        href="/"
                        aria-label="GranularX"
                        title="GranularX"
                        className="logoContainer"
                      >
                        <img src={Logo} alt="GranularX" className="Logo" />
                        <p className="logoText">Granular X</p>
                      </a>
                    </div>
                    <div>
                      <a
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="closeBtn"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <img src={XMark} alt="Close" />
                      </a>
                    </div>
                  </div>
                  <nav className="mobileNav">
                    <ul className="headerMenu">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="productBtn"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="featuresBtn"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="aboutBtn"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <Link to={'/order'}
                          href="/"
                          className="signupBtn"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Order
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </main>
  );
}
