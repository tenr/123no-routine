import React from "react";
import { Auth } from "../../components/Auth/Auth";

function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 background-image">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Come play with us!</h1>
            <p className="py-6">
              Our mission is to create a space where people to come together,
              get outside, get active and to have the inner child come play with
              us.
            </p>
            <p>
              TL;DR . . . “a place for people to bring out their inner child
              without a cover charge at a crowded bar”
            </p>
          </div>
          <Auth />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Hero;
