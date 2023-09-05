import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { blankTrip, tTrip } from "./interfaces";
import { fetchTripData, updateTrip } from "./Services";
import { TripForm } from "./TripForm/TripForm";
import { TripsContext } from "./TripsContext";

const UpdateTripForm = () => {
  const context = useContext(TripsContext);
  if (!context) return null;
  const { trips, setTrips } = context;
  const { id } = useParams();
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
    const result = await updateTrip(values);
    if (result) {
      const updatedTrips = trips.filter((trip) => trip.id !== id);
      updatedTrips.push(result);
      setTrips(updatedTrips);
    }
  };
  useEffect(() => {
    getTrip();
  }, []);

  async function getTrip() {
    const temp: void | tTrip = await fetchTripData(`/trips/${id}`);
    if (temp) {
      setValues(temp);
    }
  }
  return (
    <div>
        <Link to="/trips" style={{ padding: 5 }}>
          trips
        </Link>
      <TripForm
        tripData={values}
        getHandleSubmit={handleSubmit}
        onChange={getHandler}
      />
    </div>
  );
};

export default UpdateTripForm;
