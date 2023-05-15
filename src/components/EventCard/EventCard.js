import React, { useEffect, useState } from "react";
import flyer from "../../assets/fliers/IMG_6502.jpg";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

function EventCard() {
  const [events, setEvents] = useState([]);

  const EventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await getDocs(EventsCollectionRef);

        const eventsData = data.docs.map((doc) => {
          const document = doc.data();
          document.event_id = doc.id;
          // console.log(document, doc.id);
          return document;
        });
        setEvents(eventsData);
        // console.log(eventsData);
      } catch (error) {
        console.error("error");
      }
    };
    getEvents();
  }, []);
  console.log(events);
  return (
    <>
      {events.map((event) => (
        <Link to={`/event-details/${event.event_id}`}>
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
        </Link>
      ))}
    </>
  );
}

export default EventCard;
