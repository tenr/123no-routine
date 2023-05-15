import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EventDetails.css";
import flyer from "../../assets/fliers/IMG_6502.jpg";

function EventDetails() {
  const { event_id } = useParams();

  //make a call to the database to populate the appriate event to show

  console.log(event_id);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse" id="wrapper">
          <img src={flyer} className="max-w-sm  shadow-xl " />
          <div className="my-5">
            <h1 className="text-5xl font-bold">Dodgeball!</h1>
            <p className="py-6">
              Come join us for another hard hitting Dodgeball game.
            </p>
            <ul>
              <p>Make sure to bring:</p>
              <li>★ water</li>
              <li>★ sunscreen</li>
              <li>★ runnin shoes</li>
              <li>★ good vibes</li>
            </ul>
            <button className=" btn btn-lg btn-primary" id="button">
              reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
