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
  console.log(user);

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
  //populate the appropiate event to show by using useParams

  /* ---------------------------------- User ---------------------------------- */

  // useEffect(() => {
  //   event?.participants?.map((p) => {
  //     getUserDetails(p.id);
  //   });
  // }, [event, loading]);

  // useEffect(() => {
  // const getUserDetails = async (id) => {
  //   const userRef = doc(db, "users", id);
  //   try {
  //     /* ------------------------- This returns a promise ------------------------- */
  //     const docSnap = await getDoc(userRef);
  //     setParticipants([...participants, docSnap.data()]);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };
  //   getUserDetails();
  // }, [user.email]);

  const handleReserve = async () => {
    setLoading(!loading);
    if (!user) {
      navigate("/login-signup");
    }

    try {
      await updateDoc(eventRef, {
        participants: arrayUnion({
          id: user.user_id,
          email: user.email,
          name: user.name,
          nickname: user.nickname,
        }),
      });
    } catch (error) {
      console.log(`ERROR UPDATING DOC: ${error}`);
    }
  };

  // console.log(participants);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse" id="wrapper">
          <img src={event.image || flyer} className="max-w-sm  shadow-xl " />
          <div className="my-5">
            <h1 className="text-5xl font-bold">{event?.activity}</h1>
            <p className="py-6">
              Come join us for another hard hitting Dodgeball game.
            </p>
            <ul>
              <p>Event Details</p>
              <li key={event}>★ {event?.date}</li>
              <li>★ sunscreen</li>
              <li>★ runnin shoes</li>
              <li>★ good vibes</li>
            </ul>
            <button
              className=" btn btn-lg btn-primary"
              id="button"
              onClick={handleReserve}
              disabled={event?.participants?.find((u) => u.id == user.user_id)}
            >
              {event?.participants?.find((u) => u.id == user.user_id)
                ? "reserved"
                : "reserve"}
            </button>
          </div>
        </div>
      </div>

      {/*  ---------------------------------- Table --------------------------------- */}
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
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
            {event?.participants.map((participant, i) => {
              return (
                <tr>
                  <th>{i + 1}</th>
                  <td>{participant.name}</td>
                  <td>{participant.nickname}</td>
                </tr>
              );
            })}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
              <td>8/15/2020</td>
              <td>Red</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
              <td>3/25/2021</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
              <td>5/22/2020</td>
              <td>Indigo</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Schuster-Schimmel</td>
              <td>Philippines</td>
              <td>2/17/2021</td>
              <td>Yellow</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>O'Hara, Welch and Keebler</td>
              <td>Indonesia</td>
              <td>5/23/2020</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Lesya Tinham</td>
              <td>Safety Technician IV</td>
              <td>Turner-Kuhlman</td>
              <td>Philippines</td>
              <td>2/21/2021</td>
              <td>Maroon</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Zaneta Tewkesbury</td>
              <td>VP Marketing</td>
              <td>Sauer LLC</td>
              <td>Chad</td>
              <td>6/23/2020</td>
              <td>Green</td>
            </tr>
            <tr>
              <th>11</th>
              <td>Andy Tipple</td>
              <td>Librarian</td>
              <td>Hilpert Group</td>
              <td>Poland</td>
              <td>7/9/2020</td>
              <td>Indigo</td>
            </tr>
            <tr>
              <th>12</th>
              <td>Sophi Biles</td>
              <td>Recruiting Manager</td>
              <td>Gutmann Inc</td>
              <td>Indonesia</td>
              <td>2/12/2021</td>
              <td>Maroon</td>
            </tr>
            <tr>
              <th>13</th>
              <td>Florida Garces</td>
              <td>Web Developer IV</td>
              <td>Gaylord, Pacocha and Baumbach</td>
              <td>Poland</td>
              <td>5/31/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>14</th>
              <td>Maribeth Popping</td>
              <td>Analyst Programmer</td>
              <td>Deckow-Pouros</td>
              <td>Portugal</td>
              <td>4/27/2021</td>
              <td>Aquamarine</td>
            </tr>
            <tr>
              <th>15</th>
              <td>Moritz Dryburgh</td>
              <td>Dental Hygienist</td>
              <td>Schiller, Cole and Hackett</td>
              <td>Sri Lanka</td>
              <td>8/8/2020</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>16</th>
              <td>Reid Semiras</td>
              <td>Teacher</td>
              <td>Sporer, Sipes and Rogahn</td>
              <td>Poland</td>
              <td>7/30/2020</td>
              <td>Green</td>
            </tr>
            <tr>
              <th>17</th>
              <td>Alec Lethby</td>
              <td>Teacher</td>
              <td>Reichel, Glover and Hamill</td>
              <td>China</td>
              <td>2/28/2021</td>
              <td>Khaki</td>
            </tr>
            <tr>
              <th>18</th>
              <td>Aland Wilber</td>
              <td>Quality Control Specialist</td>
              <td>Kshlerin, Rogahn and Swaniawski</td>
              <td>Czech Republic</td>
              <td>9/29/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>19</th>
              <td>Teddie Duerden</td>
              <td>Staff Accountant III</td>
              <td>Pouros, Ullrich and Windler</td>
              <td>France</td>
              <td>10/27/2020</td>
              <td>Aquamarine</td>
            </tr>
            <tr>
              <th>20</th>
              <td>Lorelei Blackstone</td>
              <td>Data Coordiator</td>
              <td>Witting, Kutch and Greenfelder</td>
              <td>Kazakhstan</td>
              <td>6/3/2020</td>
              <td>Red</td>
            </tr> */}
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
      </div>
    </>
  );
}

export default EventDetails;
