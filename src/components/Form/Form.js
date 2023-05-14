import AuthContext from "../../components/contexts/AuthContext";
import { React, useState, useEffect, useContext } from "react";
import { updateDoc, collection, getDocs, doc } from "firebase/firestore";
import { auth, googleProvider, db } from "../../config/firebase";
import "./Form.css";

export const Form = () => {
  /* ----------------------------- Form use states ---------------------------- */
  const [formValues, setFormValues] = useState({
    name: "",
    nickname: "",
    pronouns: "",
    top_size: "",
    bottom_size: "",
    shoe_size: "",
  });

  /* -------------------- Database variables and use states ------------------- */
  const user = useContext(AuthContext);
  const userCollectionRef = collection(db, "users");
  const [fetchedUserData, setFetchedUserData] = useState([]);

  /* ------------------- GET user data & setFetchedUserData ------------------- */
  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchedUserData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  /* ------------ useEffect console logging User Data -------------- */
  useEffect(() => {
    {
      fetchedUserData.length > 0 && console.log(fetchedUserData);
    }
  }, [fetchedUserData]);

  /* ---------------- Handle Form Submit ---------------------- */
  const handleUpdateProfile = async (e, id) => {
    e.preventDefault();
    //i do not want to prevent, beacuse i want the refresh to show the new name.
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, formValues);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form
        className="proile-form mb-8"
        onSubmit={(e) => handleUpdateProfile(e, user.uid)}
      >
        <div className="form-control w-full max-w-xs place-content-center flex gap-4 ">
          <div>
            <label className="label">
              <span className="label-text">What is your real name?</span>
            </label>
            <input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">What is your nickname?</span>
            </label>
            <input
              name="nickname"
              value={formValues.nickname}
              onChange={handleChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="pronouns-container">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">She/Her</span>
                <input
                  name="pronouns"
                  value="she/her"
                  checked={formValues.pronouns === "she/her"}
                  onChange={handleChange}
                  type="radio"
                  className="radio checked:bg-red-500"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">He/Him</span>
                <input
                  name="pronouns"
                  value="he/him"
                  checked={formValues.pronouns === "he/him"}
                  onChange={handleChange}
                  type="radio"
                  className="radio checked:bg-blue-500"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">They/Them</span>
                <input
                  name="pronouns"
                  value="they/them"
                  checked={formValues.pronouns === "they/them"}
                  onChange={handleChange}
                  type="radio"
                  className="radio checked:radio-success"
                />
              </label>
            </div>
          </div>

          <select
            name="top_size"
            value={formValues.top_size}
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
            defaultValue="Pick your Top size"
          >
            <option value="" disabled>
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
            name="bottom_size"
            value={formValues.bottom_size}
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
            defaultValue="Pick your Bottom size"
          >
            <option value="" disabled>
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
            name="shoe_size"
            value={formValues.shoe_size}
            onChange={handleChange}
            className="select select-bordered w-full max-w-xs"
            defaultValue="Pick you Shoe size"
          >
            <option value="" disabled>
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
    </>
  );
};
