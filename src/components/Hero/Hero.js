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
              <h1 className="text-5xl font-bold">LET'S HAVE SOME FUN!</h1>
              <p className="self-center">
                Life’s too short to stick to the same old routine—so let’s shake
                things up
              </p>

              {/* lobo in hero  */}
              <img className="lobo" src={lobo} alt="Lobo Run Cycle" />

              <Link to="/login-signup">
                <button className="btn btn-lg  btn-neutral w-3/6 self-center text-white">
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
