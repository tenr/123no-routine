import React from "react";
import "./About.css";
import moo from "../../assets/photos/moo.JPG";
import aaron from "../../assets/photos/aaron.png";
import ling from "../../assets/photos/ling.JPG";
import group from "../../assets/photos/groupshot.png";
import redGif from "../../assets/gifs/red.gif";
// import brunson from "../../assets/photos";

function About() {
  return (
    <>
      <div className="">
        <h1 className="text-4xl my-8 mx-5">About us</h1>
        <div className="flex flex-row justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
            cumque omnis consectetur assumenda accusantium cum nulla possimus
            eum, voluptatum minima! Maiores inventore nobis perspiciatis beatae
            nisi laborum rerum id. Ea, odio neque error obcaecati, recusandae
            mollitia quaerat hic culpa iure impedit eaque magni commodi ipsa
            autem ullam dolore modi aperiam quod nemo dicta provident
            perspiciatis a sequi deleniti? Sit?
          </p>
          <div>
            <img
              className="red-gif basis-1/2 my-8"
              src={redGif}
              alt="no-routine-gif"
            />
          </div>
        </div>

        <div className="carousel  wrapper">
          <div className="carousel-item item-1">
            <img src={moo} alt="Moo" />
          </div>
          <div className="carousel-item ">
            <img className="img" src={aaron} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="Pizza" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
