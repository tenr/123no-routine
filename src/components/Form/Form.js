import AuthContext from "../../components/contexts/AuthContext";
import { React, useState, useEffect, useContext } from "react";
import { updateDoc, collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
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
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* -------------------- Database variables and use states ------------------- */
  const { user, setUser } = useContext(AuthContext);
  const userCollectionRef = collection(db, "users");
  const [fetchedUserData, setFetchedUserData] = useState([]);

  /* ------------------- GET user data & setFetchedUserData ------------------- */
  useEffect(() => {
    const getUserData = async () => {
      try {
        const querySnapshot = await getDocs(userCollectionRef);
        const userData = querySnapshot.docs.find(
          (doc) => doc.id === user?.user_id
        );

        if (userData) {
          const formData = userData.data();
          setFormValues({
            name: formData.name || "",
            nickname: formData.nickname || "",
            pronouns: formData.pronouns || "",
            top_size: formData.top_size || "",
            bottom_size: formData.bottom_size || "",
            shoe_size: formData.shoe_size || "",
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, [user]);

  // console.log("user", user);
  /* ---------------- Handle Form Submit ---------------------- */
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    //i do not want to prevent, beacuse i want the refresh to show the new name.
    try {
      const userDoc = doc(db, "users", user?.user_id);
      await updateDoc(userDoc, formValues);
      setUser({ ...user, ...formValues });
      setSuccess(`Profile Updated`);
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(`Try Again`);
      setTimeout(() => {
        setError("");
      }, 7000);

      setSuccess("");
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    //keep the values displayed
  };

  return (
    <>
      {success && (
        <div className="alert alert-success">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        </div>
      )}
      {error && (
        <div className="alert alert-error ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}
      <form className="proile-form mb-8" onSubmit={handleUpdateProfile}>
        <div className="form-control w-full max-w-xs place-content-center flex gap-4 ">
          <div>
            <label className="label">
              <span className="label-text">What is your real name?</span>
            </label>
            <input
              required
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
              required
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
            <option>10+ WMNS</option>
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
            <option>14 MEN</option>
            <option>15+ MEN</option>
          </select>
          <button className="btn   md:btn-md lg:btn-lg">Update Profile</button>
        </div>
      </form>
    </>
  );
};
