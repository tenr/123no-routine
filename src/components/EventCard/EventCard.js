import React from "react";
import flyer from "../../assets/fliers/IMG_6502.jpg";

function EventCard() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mx-5 my-2">
        <figure>
          <img src={flyer} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Tennis!
            <div className="badge badge-accent">NEW</div>
          </h2>
          <p>If a dog chews shoes..</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">NYC</div>
            <div className="badge badge-outline">🎾</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
