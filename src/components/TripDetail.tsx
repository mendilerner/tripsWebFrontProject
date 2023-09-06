import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { tTrip, defaultTrip } from "./interfaces";
import { fetchTripData } from "./Services";

interface Props {
  id: number;
}
const TripDetail = () => {
  const Navigate = useNavigate();
  const { id } = useParams();

  const [trip, setTrip] = useState<tTrip | null>(null);
  useEffect(() => {
    getTrip();
  }, []);
  async function getTrip() {
    const temp: void | tTrip = await fetchTripData(`/trips/${id}`);
    if (temp) {
      setTrip(temp);
    }
  }
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/trips" style={{ padding: 5 }}>
          trips
        </Link>
      </nav>
      <div>
        {trip && (
          <div className="trip-detail-page">
            <div className="box">
              <img src={trip.image} alt="" />
              <h2>{trip.name}</h2>
              <p>{trip.description}</p>
              <h3>activities:</h3>
              <ul>
                {Array.isArray(trip.activities) ? (
                  trip.activities.map((act, i) => <li key={i}>{act}</li>)
                ) : (
                  <p>Activities data is not available</p>
                )}
              </ul>
              <h3>price: {trip.price} $</h3>
              <h3>from {trip.startDate} up to {trip.endDate}</h3>
              <button onClick={() => Navigate(`/updateTripForm/${trip.id}`)}>
                update trip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDetail;
