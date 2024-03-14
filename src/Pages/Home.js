import React from "react";
import { Header, Hero, Body, Footer } from "../UI";
import "../UI/Css/Style.css";
import "../UI/Css/Mobile.css";
import "../UI/Css/Medium.css";

export default function Home() {
  return (
    <main className="mainHome">
      <div className="homeHeader">
        <Header />
      </div>
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}
