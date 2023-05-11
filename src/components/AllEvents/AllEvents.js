import React from "react";
import EventCard from "../EventCard/EventCard";
import "./AllEvents.css";

function AllEvents() {
  return (
    <div className="stack-cards px-5">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export default AllEvents;
