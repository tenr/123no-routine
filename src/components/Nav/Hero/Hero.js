import React from "react";

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
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn">Login</button>
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Hero;
