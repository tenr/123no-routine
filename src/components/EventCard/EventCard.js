import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function EventCard() {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  const EventsCollectionRef = collection(db, "events");

  // Function to get all events data
  const getEvents = async () => {
    try {
      // Query events ordered by number in descending order
      const eventsQuery = query(EventsCollectionRef, orderBy("number", "desc"));
      const data = await getDocs(eventsQuery);
      let eventsData = data.docs.map((doc) => ({
        ...doc.data(),
        event_id: doc.id,
      }));

      if (location.pathname === "/") {
        eventsData = eventsData.slice(0, 2); // Limit events for homepage
      }

      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      {events.map((event) => (
        <Link to={`/event-details/${event.event_id}`} key={event.event_id}>
          <div className="card w-96 bg-base-100 shadow-xl mx-5 my-2">
            <figure>
              <img src={event.image} alt="Event Flyer" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {event.activity}
                <div
                  className={`badge ${
                    event.status === "closed" ? "badge-error" : "badge-success"
                  }`}
                >
                  {event.status}
                </div>
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
