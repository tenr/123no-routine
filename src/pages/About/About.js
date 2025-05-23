import React from "react";
import "./About.css";
// import moo from "../../assets/photos/moo.jpg";
// import aaron from "../../assets/photos/aaron.png";
// import ling from "../../assets/photos/ling.jpg";
// import group from "../../assets/photos/groupshot.png";
import redGif from "../../assets/gifs/red.gif";
// import fred from "../../assets/photos/fred.jpg";
// import amandarand from "../../assets/photos/amanda&rand.jpg";
// import brunson from "../../assets/photos/brunson.jpg";
// import joeyx2 from "../../assets/photos/joeyx2.jpg";
// import jordan from "../../assets/photos/jordan.jpg";
// // import landin from "../../assets/photos/landin.jpg";
// import matty from "../../assets/photos/matty.jpg";
// import megaG from "../../assets/photos/mega-g.jpg";
// import styles from "../../assets/photos/styles.jpg";

function About() {
  return (
    <>
      <div className="">
        <h1 className="text-4xl my-8 mx-12">About us</h1>
        <div className="flex ml-12 content-between">
          <p className="">
            At No Routine, we believe that amidst the hustle and bustle of adult
            life, it’s essential to carve out time for fun. We’re here to
            provide a playground where you can break free from the monotony and
            rediscover the joy of being active and social. Whether it’s
            dodgeball, kickball, or any other exciting activity, our events are
            designed to help you unleash your inner child, meet new friends, and
            create unforgettable memories. Our website is your go-to hub for
            everything No Routine. Explore upcoming events, sign up to join the
            fun, meet our team, and share the excitement. Life’s too short to
            stick to the same old routine—so let’s shake things up and make
            every day a little more extraordinary with No Routine. Ready to
            play? Check out our events, sign up, and dive into the adventure!
            <br></br>
            <button
              className="btn btn-wide my-8"
              onClick={() =>
                window.open(
                  "mailto:noroutinenyc@gmail.com",
                  "emailWindow",
                  "width=500,height=600,top=100,left=100"
                )
              }
            >
              Work with us
            </button>
          </p>

          <div>
            <img className="px-12" src={redGif} alt="no-routine-gif" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
