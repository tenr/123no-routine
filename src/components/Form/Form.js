import { React, useState } from "react";
// import { useAuth } from "firebase/auth";
// import { db } from "../../config/firebase";

export const Form = () => {
  //   const { currentUser } = useAuth;
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [top_size, setTopSize] = useState("");
  const [bottom_size, setBottomSize] = useState("");
  const [shoe_size, setShoeSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   setError("");
      //   const userDocRef = db.collection("users").doc(currentUser.uid);
      //   await userDocRef.update({
      //     name,
      //     pronouns,
      //     top_size,
      //     bottom_size,
      //     shoe_size,
      //   });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-full max-w-xs place-content-center flex">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="pronouns-container">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">She/Her</span>
              <input
                value="she/her"
                checked={pronouns === "she/her"}
                onChange={(e) => setPronouns(e.target.value)}
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">He/Him</span>
              <input
                value="he/him"
                checked={pronouns === "he/him"}
                onChange={(e) => setPronouns(e.target.value)}
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">They/Them</span>
              <input
                value="they/them"
                checked={pronouns === "they/them"}
                onChange={(e) => setPronouns(e.target.value)}
                type="radio"
                name="radio-10"
                className="radio checked:radio-success"
              />
            </label>
          </div>
        </div>

        <select
          value={top_size}
          onChange={(e) => setTopSize(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Pick your Top size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
          <option>XX-Large</option>
          <option>XXX-Large</option>
        </select>
        <select
          value={bottom_size}
          onChange={(e) => setBottomSize(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Pick your Bottom size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
          <option>XX-Large</option>
          <option>XXX-Large</option>
        </select>
        <select
          value={shoe_size}
          onChange={(e) => setShoeSize(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Pick your Shoe size
          </option>
          <option>4 WMNS</option>
          <option>4.5 WMNS</option>
          <option>5 WMNS</option>
          <option>5.5 WMNS</option>
          <option>6 WMNS</option>
          <option>6.5 WMNS</option>
          <option>7 WMNS</option>
          <option>7.5 WMNS</option>
          <option>8 WMNS</option>
          <option>8.5 WMNS</option>
          <option>8.5 WMNS</option>
          <option>8.5 WMNS</option>
          <option>9 WMNS</option>
          <option>9.5 WMNS</option>
          <option>8 MEN</option>
          <option>8.5 MEN</option>
          <option>9 MEN</option>
          <option>9.5 MEN</option>
          <option>10 MEN</option>
          <option>10.5 MEN</option>
          <option>11 MEN</option>
          <option>11.5 MEN</option>
          <option>12 MEN</option>
          <option>13 MEN</option>
        </select>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Update Profile
        </button>
      </div>
    </form>
  );
};
