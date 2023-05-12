import React from "react";

export const Form = () => {
  return (
    <>
      <div className="form-control w-full max-w-xs place-content-center flex">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="pronouns-container">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">She/Her</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">He/Him</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">They/Them</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:radio-success"
                checked
              />
            </label>
          </div>
        </div>
        <select className="select select-bordered w-full max-w-xs">
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
        <select className="select select-bordered w-full max-w-xs">
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
        <select className="select select-bordered w-full max-w-xs">
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
      </div>
    </>
  );
};
