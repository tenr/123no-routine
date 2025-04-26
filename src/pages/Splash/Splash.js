// src/components/Splash.jsx
import React from "react";
import { track } from "@vercel/analytics";
import "./Splash.css";

export default function Splash() {
  return (
    <div className="splash-container">
      {/* bandages */}
      <img
        src="/images/nr-bandage-3.png"
        alt="wide bottom right bandage"
        className="bandage bandage-3"
      />
      <img
        src="/images/nr-bandage-2.png"
        alt="long top right bandage"
        className="bandage bandage-2"
      />
      <img
        src="/images/nr-bandage-4.png"
        alt="x bottom left bandage"
        className="bandage bandage-4"
      />

      <div className="logo-wrapper">
        <img
          src="/images/noroutine-logo.png"
          alt="No Routine"
          className="logo"
        />
      </div>

      <p className="tagline">
        More people. More cities. More fun.
        <br />
        <br /> JOIN US THIS SUMMER
      </p>

      <div className="info">
        <a
          href="https://www.instagram.com/noroutinenyc/?hl=en"
          className="cta"
          onClick={() => track("ig_click")}
        >
          INSTAGRAM
        </a>
        <a
          href="mailto:noroutinenyc@gmail.com"
          className="cta"
          onClick={() => track("contact_email_click")}
        >
          EMAIL
        </a>
      </div>
    </div>
  );
}
