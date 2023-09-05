import React from "react";
import { tTrip } from "../interfaces";
import { useState, MouseEventHandler } from "react";
import "./TripForm.css";
interface Props {
  tripData: tTrip;
  onChange: (
    name: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  getHandleSubmit: (
    e: React.MouseEvent<HTMLButtonElement>,
    values: tTrip
  ) => void;
}
export const TripForm = ({ tripData, getHandleSubmit, onChange }: Props) => {
  const HandleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    getHandleSubmit(e, tripData);
  };
  return (
    <form className="tripForm">
      <label htmlFor="name">Name:</label>
      <input id="name" value={tripData.name} onChange={onChange("name")} />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        value={tripData.description}
        onChange={onChange("description")}
      />

      <label htmlFor="image">Image URL</label>
      <input id="image" value={tripData.image} onChange={onChange("image")} />

      <label htmlFor="activities">Activity</label>
      <input
        id="activities"
        value={tripData.activities}
        onChange={onChange("activities")}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        value={tripData.price}
        onChange={onChange("price")}
      />

      <label htmlFor="start date">start date:</label>
      <input
        id="start date"
        type="date"
        value={tripData.startDate}
        onChange={onChange("startDate")}
      />

      <label htmlFor="end date">end date:</label>
      <input
        id="end date"
        type="date"
        value={tripData.endDate}
        onChange={onChange("endDate")}
      />

      <button type="submit" onClick={HandleSubmit}>
        add
      </button>
    </form>
  );
};
