import React from "react";
import { Link } from "react-router-dom";
import lobo from "../../assets/gifs/nr2.gif";
import "./Hero.css";
// import { Auth } from "../../components/Auth/Auth";

function Hero() {
  return (
    <>
      <div className="min-h-[80%]  ">
        <div className="hero  bg-base-200 background-image">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-center flex flex-col gap-12">
              <h1 className="text-5xl font-bold">COME PLAY WITH US!</h1>
              <p className="self-center">
                Our mission is to create a space where people to come together,
                get outside, get active and to have the inner child come play
                with us.
              </p>
              <p className="self-center">
                TL;DR . . . “a place for people to bring out their inner child
                without a cover charge at a crowded bar”
              </p>
              {/* lobo in hero  */}
              {/* <img className="lobo" src={lobo} alt="Lobo Run Cycle" /> */}

              <Link to="/login-signup">
                <button className="btn btn-lg  btn-primary w-3/6 self-center text-white">
                  SIGN UP
                </button>
              </Link>
            </div>
            {/* <Auth /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
    </>
  );
}

export default Hero;
