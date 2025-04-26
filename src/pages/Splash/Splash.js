// src/components/Splash.jsx
import React from "react";
import { track } from "@vercel/analytics";
import "./Splash.css";

export default function Splash() {
  return (
    <div className="splash-container">
      {/* bandages */}
      <img
        src="/images/nr-bandage-4.png"
        alt=""
        className="bandage bandage-4"
      />
      <img
        src="/images/nr-bandage-2.png"
        alt=""
        className="bandage bandage-2"
      />
      <img
        src="/images/nr-bandage-3.png"
        alt=""
        className="bandage bandage-3"
      />

      <div className="logo-wrapper">
        <img
          src="/images/noroutine-logo.png"
          alt="No Routine"
          className="logo"
        />
      </div>

      <p className="tagline">
        More play. More cities. More people remembering how good it feels to
        move, connect, and have fun. We’re just getting started.
        <br />
        <br />
        Join us this summer.
      </p>

      <p className="info">
        Follow us on{" "}
        <a
          className="link"
          href="https://www.instagram.com/noroutinenyc/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("instagram_follow")}
        >
          Instagram
        </a>
        <br />
        New site unveiling May 2025
      </p>

      <a
        href="mailto:noroutinenyc@gmail.com"
        className="cta"
        onClick={() => track("contact_email_click")}
      >
        CONTACT US
      </a>
    </div>
  );
}
