// src/components/Splash.jsx
import React from "react";
import "./Splash.css";

export default function Splash() {
  return (
    <div className="splash-container">
      <div className="logo-wrapper">
        <img
          src="/images/noroutine-logo.png"
          alt="No Routine"
          className="logo"
        />
      </div>

      <p className="tagline">
        More play. More cities. More people remembering how good it feels to
        move, connect, and break routine. We’re not just building events—we’re
        building a movement. Join us.
      </p>

      <p className="info">
        Follow us on{" "}
        <a
          className="link"
          href="https://www.instagram.com/noroutinenyc/?hl=en"
        >
          Instagram
        </a>
        <br />
        New site unveiling May 2025
      </p>

      <a href="mailto:noroutinenyc@gmail.com" className="cta">
        CONTACT US
      </a>
    </div>
  );
}
