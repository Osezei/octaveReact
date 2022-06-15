import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./App";
import PopUp from "./popUp";
import Content from "./body";
import LowerBody from "./lowerBody";
import Footer from "./footer";
import Contact from "./contact";

// React.StrictMode;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NavBar />
    <Content />
    <LowerBody />
    <Contact />
    <Footer></Footer>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
