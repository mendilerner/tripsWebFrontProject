import React, { useState, useContext } from "react";
import Trips from "./Trips";
import { blankTrip, tTrip } from "./interfaces";
import { Link , useNavigate} from "react-router-dom";
import { createTrip, getToken } from "./Services";
import { TripForm } from "./TripForm/TripForm";
import { TripsContext } from "./TripsContext";

const NewTripForm = () => {
  const Navigate = useNavigate()
  const context = useContext(TripsContext);
  if (!context) return null;
  const { trips, setTrips } = context;
  const [values, setValues] = useState(blankTrip);
  const getHandler = (name: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      if (name === 'activities'){
        setValues({ ...values, "activities": event.target.value.split(',') })
        
      } 
      else{
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
    const token = getToken()
    if (!token){
      return Navigate('/NotLoginMessage')
    }
    const result = await createTrip(values, token as string);
    if (result === 401){
      return Navigate('/NotLoginMessage')
    }
    else if (result) {
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
      </>
  );
};

export default NewTripForm;
