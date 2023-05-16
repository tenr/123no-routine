import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./AllEvents.css";

function AllEvents() {
  return (
    <div className="stack-cards px-5 gap-12">
      <EventCard />
    </div>
  );
}

export default AllEvents;
