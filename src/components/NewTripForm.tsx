import React, { useState, useContext } from "react";
import Trips from "./Trips";
import { blankTrip, tTrip } from "./interfaces";
import { Link, useNavigate } from "react-router-dom";
import { createTrip, getToken } from "./Services";
import { TripForm } from "./TripForm/TripForm";
import { TripsContext } from "./TripsContext";
import Message from "./Message/Message";


const NewTripForm = () => {
  const [reqState, setReqState] = useState('before');
  const Navigate = useNavigate();
  const context = useContext(TripsContext);
  if (!context) return null;
  const { trips, setTrips } = context;
  const [values, setValues] = useState(blankTrip);
  const getHandler = (name: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (name === "activities") {
        setValues({ ...values, activities: event.target.value.split(",") });
      } else {
        setValues({ ...values, [name]: event.target.value });
      }
    };
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    values: tTrip
  ) => {
    e.preventDefault();
    console.log(values);
    const token = getToken();
    if (!token) {
      return Navigate("/NotLoginMessage");
    }
    const result = await createTrip(values, token as string);
    if (result === 401) {
      return Navigate('/NotLoginMessage')
    } else if (result) {
      trips.push(result);
      console.log(trips);
      setTrips(trips);
      setReqState('successes');
    }
    else{
      setReqState('error')
    }
  };

  return (
    <>
      <div>
        <Link to="/trips" style={{ padding: 5 }}>
          trips
        </Link>
      </div>
      {reqState === 'before' && <TripForm
          tripData={values}
          getHandleSubmit={handleSubmit}
          onChange={getHandler}
        />
      }
      {reqState === 'successes' &&
        <Message onClick={() => Navigate('/trips')} message="user added successfully" passTo="to trips"/>}
      {reqState === 'error' &&
        <Message onClick={() => setReqState('before')} message="oops something got wrong" passTo="try again"/>}
       
    </>
  );
};

export default NewTripForm;
