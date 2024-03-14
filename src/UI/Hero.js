import React, { useState, useEffect } from "react";
import { ArrowDown, Ecommerce } from "../Assets";
import { Link } from "react-router-dom";
import "../UI/Css/Style.css";
import "../UI/Css/Mobile.css";
import "../UI/Css/Medium.css";

export default function Hero() {
  const words = ["Pay", "Chat", "Collaborate"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // word changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex]);

  return (
    <main className="heroContainer">
      <section className="heroMainSection">
        <div className="heroSection">
          <h4 className="heroHeadingText">The economic super app</h4>
          <h1 className="heroText">Where the neo 3%</h1>
          <div className="wordChange">
            <h1 className="wordChangeText">{currentWord}</h1>
          </div>
        </div>
        <img src={Ecommerce} alt="product" />
        <div className="paragraphDiv">
          <p className="paragrapText">
            Your all-in-one platform for funding, in-chat payments, customer
            engagement, and more. Think WhatsApp Business, but better
          </p>
        </div>
        <div className="ctaAndArrow">
          <img src={ArrowDown} alt="arrow down" className="arrowBtn" />
          <Link to={"/"} className="ctaBtn">
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}
