import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../components/contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import "./EventDetails.css";
import { db } from "../../config/firebase";
import flyer from "../../assets/fliers/IMG_6502.jpg";
//We want to make the image be populated by firebase storage.. so import that bihhh

function EventDetails(props) {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [activeUser, setActiveUser] = useState();
  // const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  /* ------------------------------- useContext for Auth ------------------------------- */
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  /* ---- Event ---- */
  const eventRef = doc(db, "events", event_id);

  //make a call to the database with the params.id to get the specific doc with that id to set to state
  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const docSnap = await getDoc(eventRef);
        if (docSnap.exists()) {
          setEvent(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getEventDetails();
  }, [loading]);

  const handleReserve = async () => {
    setLoading(!loading);
    if (!user) {
      navigate("/login-signup");
      return;
    }

    try {
      await updateDoc(eventRef, {
        participants: arrayUnion({
          id: user?.user_id,
          email: user?.email,
          name: user?.name,
          nickname: user?.nickname,
        }),
      });
    } catch (error) {
      console.log(`ERROR UPDATING DOC: ${error}`);
    }
  };

  // console.log(participants);

  return (
    <>
      <div className="hero min-h-[640px] bg-base-200 flex flex-col">
        <div
          className=" mt-12 gap-12 hero-content flex-col lg:flex-row-reverse"
          id="wrapper"
        >
          <img src={event?.image} className="max-w-sm  shadow-xl " />
          {/* event.image || flyer in src */}
          <div className="my-5">
            <h1 className="text-5xl font-bold">{event?.activity}</h1>
            <p className="py-6">
              Come join us for another hard hitting Dodgeball game.
            </p>

            <ul>
              <p className="font-bold">Event Details:</p>
              <li key={event}>★ {event?.date}</li>
              <li>★ {event?.time}</li>
              <li>★ {event?.location}</li>
              <br></br>
              <p className="font-bold">What to bring:</p>
              <li>★ water</li>
              <li>★ runnin shoes</li>
              <li>★ good vibes</li>
            </ul>
            <button
              className=" btn btn-lg btn-primary"
              id="button"
              onClick={handleReserve}
              disabled={
                event?.status === "closed" ||
                event?.participants?.find((u) => u.id === user?.user_id)
              }
            >
              {event?.status === "closed"
                ? "Event Closed"
                : event?.participants?.find((u) => u.id === user?.user_id)
                ? "Reserved"
                : "Reserve"}
            </button>
          </div>
        </div>

        {/*  ---------------------------------- Table --------------------------------- */}
        <div>
          <h2 className="font-bold text-xl">Who's coming??</h2>
          <div className="overflow-x-auto">
            <table className="table table-compact w-1/2">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Nickname</th>
                  {/* <th>Pronouns</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th> */}
                </tr>
              </thead>
              <tbody>
                {event?.participants?.map((participant, i) => {
                  return (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{participant?.name}</td>
                      <td>{participant?.nickname}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Nickname</th>
                  {/* <th>company</th>
                  <th>location</th>
                  <th>Last Login</th>
                  <th>Favorite Color</th> */}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/*  ---------------------------------- Table --------------------------------- */}
      {/* <div className="overflow-x-auto">
        <table className="table table-compact w-1/2">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {event?.participants?.map((participant, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{participant.name}</td>
                  <td>{participant.nickname}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </tfoot>
        </table>
      </div> */}
    </>
  );
}

export default EventDetails;
