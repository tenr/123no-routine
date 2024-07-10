import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../components/contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../config/firebase";

function EventDetails(props) {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const eventRef = doc(db, "events", event_id);

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
          pronouns: user?.pronouns,
        }),
      });
    } catch (error) {
      console.log(`ERROR UPDATING DOC: ${error}`);
    }
  };

  const handlePaymentRedirect = () => {
    if (event && event.paymentLink) {
      window.open(event.paymentLink, "_blank");
    } else {
      console.log("Payment Link not found.");
    }
  };

  return (
    <>
      <div className="hero min-h-[640px] bg-base-200 flex flex-col px-2  md:px-8 lg:px-10 xl:px-12">
        <div
          className="mt-12 gap-12 hero-content flex-col lg:flex-row-reverse"
          id="wrapper"
        >
          <img src={event?.image} className="max-w-sm shadow-xl" alt="Event" />
          <div className="my-5">
            <h1 className="text-4xl font-bold">{event?.activity}</h1>
            <p className="py-6">{event?.long_description}</p>

            <ul>
              <p className="font-bold">Event Details:</p>
              <li>★ {event?.date}</li>
              <li>★ {event?.time}</li>
              <li>★ {event?.location}</li>
              <br />
              <p className="font-bold">What to bring:</p>
              <li>★ water</li>
              <li>★ running shoes</li>
              {event?.bring1 && <li>★ {event?.bring1}</li>}
              {event?.bring2 && <li>★ {event?.bring2}</li>}
              <li>★ good vibes</li>
            </ul>
            <button
              className="btn btn-lg btn-primary mt-6 w-full md:w-1/2"
              onClick={() =>
                event?.paid ? handlePaymentRedirect() : handleReserve()
              }
              disabled={
                event?.status === "closed" ||
                event?.participants?.find((u) => u.id === user?.user_id)
              }
            >
              {event?.status === "closed"
                ? "Event Closed"
                : event?.participants?.find((u) => u.id === user?.user_id)
                ? "Reserved"
                : event?.paid
                ? "Pay and Reserve"
                : "Reserve"}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-xl">Who's coming??</h2>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full lg:w-1/2 mx-auto">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Nickname</th>
                </tr>
              </thead>
              <tbody>
                {event?.participants?.map((participant, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{participant?.name}</td>
                    <td>{participant?.nickname}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
