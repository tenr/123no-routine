import React from "react";
import "./About.css";
import moo from "../../assets/photos/moo.jpg";
import aaron from "../../assets/photos/aaron.png";
import ling from "../../assets/photos/ling.jpg";
import group from "../../assets/photos/groupshot.png";
import redGif from "../../assets/gifs/red.gif";
import fred from "../../assets/photos/fred.jpg";
import amandarand from "../../assets/photos/amanda&rand.jpg";
// import brunsonThrow from "../../assets/photos/brunson-throw.jpg";
import brunson from "../../assets/photos/brunson.jpg";
// import huff from "../../assets/photos/huff.jpg";
import joeyx2 from "../../assets/photos/joeyx2.jpg";
import jordan from "../../assets/photos/jordan.jpg";
import landin from "../../assets/photos/landin.jpg";
import matty from "../../assets/photos/matty.jpg";
import megaJoey from "../../assets/photos/mega-joey.jpg";
import megaG from "../../assets/photos/mega-g.jpg";
import styles from "../../assets/photos/styles.jpg";

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
            <button
              className="btn btn-wide my-8"
              onClick={() =>
                window.open(
                  "mailto:noroutinenyc.com",
                  "emailWindow",
                  "width=500,height=600,top=100,left=100"
                )
              }
            >
              Work with us
            </button>
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
            <img src={fred} alt="fred" />
          </div>
          <div className="carousel-item ">
            <img className="img" src={aaron} alt="aaron" />
          </div>
          <div className="carousel-item ">
            <img src={matty} alt="matty" />
          </div>
          <div className="carousel-item ">
            <img src={moo} alt="moo" />
          </div>
          <div className="carousel-item ">
            <img src={amandarand} alt="amanda y rand" />
          </div>
          <div className="carousel-item ">
            <img src={ling} alt="ling" />
          </div>
          <div className="carousel-item ">
            <img src={group} alt="no-routine-gang" />
          </div>
          <div className="carousel-item ">
            <img src={megaG} alt="megaG" />
          </div>
          <div className="carousel-item ">
            <img src={joeyx2} alt="joey" />
          </div>
          <div className="carousel-item ">
            <img src={styles} alt="styles" />
          </div>
          <div className="carousel-item ">
            <img src={brunson} alt="brunson" />
          </div>
          <div className="carousel-item ">
            <img src={jordan} alt="jordan" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
