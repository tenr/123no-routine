import React from "react";
import "./Main.css";
import Hero from "../../components/Hero/Hero";
import EventCard from "../../components/EventCard/EventCard";

function Main() {
  return (
    <>
      <Hero />
      <div className="stack-cards px-5 gap-12">
        <EventCard />
      </div>
    </>
  );
}

export default Main;
