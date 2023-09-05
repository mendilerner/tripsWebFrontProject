import React, { useState, useContext } from "react";
import Trips from "./Trips";
import { blankTrip, tTrip } from "./interfaces";
import { Link } from "react-router-dom";
import { createTrip } from "./Services";
import { TripForm } from "./TripForm/TripForm";
import { TripsContext } from "./TripsContext";

const NewTripForm = () => {
  const context = useContext(TripsContext);
  if (!context) return null;
  const { trips, setTrips } = context;
  const [values, setValues] = useState(blankTrip);
  const getHandler = (name: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    values: tTrip
  ) => {
    e.preventDefault();
    console.log(values);
    const result = await createTrip(values);
    console.log("the result is:", result);
    if (result) {
      trips.push(result);
      console.log(trips);
      setTrips(trips);
    }
  };

  return (
    <>
      <div>
          <Link to="/trips" style={{ padding: 5 }}>
            trips
          </Link>
        
      </div>
      <TripForm
        tripData={values}
        getHandleSubmit={handleSubmit}
        onChange={getHandler}
      />
      {/* <form>
      <label htmlFor="name">Name:</label>
      <input id="name" value={values.name} onChange={getHandler('name')} />
      
      <label htmlFor="description">Description:</label>
      <input id="description" value={values.description} onChange={getHandler('description')} />
      
      <label htmlFor="image">Image URL</label>
      <input id="image" value={values.image} onChange={getHandler('image')} />
      
      <label htmlFor="activities">Activity</label>
      <input id="activities" value={values.activities} onChange={getHandler('activities')} />
      
      <label htmlFor="price">Price</label>
      <input id="price" name="price" value={values.price} onChange={getHandler('price')} />
      
      <label  htmlFor="start date">start date:</label>
      <input id='start date' value={values.startDate} onChange={getHandler('startDate')} />
      
      <label htmlFor="end date">end date:</label>
      <input id='end date' value={values.endDate} onChange={getHandler('endDate')} />
      
      <button type='submit' onClick={handleSubmut}>add</button>

      </form> */}
    </>
  );
};

export default NewTripForm;
