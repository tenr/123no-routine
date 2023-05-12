import React, { useEffect, useState } from "react";
import flyer from "../../assets/fliers/IMG_6502.jpg";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function EventCard() {
  const [events, setEvents] = useState([]);

  const EventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await getDocs(EventsCollectionRef);
        const eventsData = data.docs.map((doc) => doc.data());
        setEvents(eventsData);
        // console.log(eventsData);
      } catch (error) {
        console.error("error");
      }
    };
    getEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
        <div
          key={event.id}
          className="card w-96 bg-base-100 shadow-xl mx-5 my-2"
        >
          <figure>
            <img src={flyer} alt="No Routine Flyer" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {event.activity}
              <div className="badge badge-accent">{event.status}</div>
            </h2>
            <p>{event.short_description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{event.location}</div>
              <div className="badge badge-outline">{event.date}</div>
              <div className="badge badge-outline">{event.emoji}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default EventCard;
