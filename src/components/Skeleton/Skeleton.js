import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-5 my-2">
      <figure>
        <div className="skeleton h-72 w-full"></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="skeleton h-6 w-3/4 mb-2"></div>
          <div className="skeleton h-6 w-1/4"></div>
        </h2>
        <p className="skeleton h-4 w-full mb-4"></p>
        <div className="card-actions justify-end">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
