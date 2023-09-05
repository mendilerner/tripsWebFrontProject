import React, { createContext, useEffect, useState } from "react";
import { tTrip, defaultTrip, TripContextProviderProps, TripsContextType } from "./interfaces";
import { fetchAllData } from "./Services";

export const TripsContext = createContext<TripsContextType| null>(null);


const TripsContextProvider: React.FC<TripContextProviderProps> = (props) => {
  const [trips, setTrips] = useState<tTrip[]>([]);
  useEffect(() => {  
    getTrips();
  }, []);

  async function getTrips() {
    const temp: void | tTrip[] = await fetchAllData('/trips');
    if (temp) {
      setTrips(temp);
    }
  }
  return (
    <TripsContext.Provider value={ {trips , setTrips}}>
      {props.children}
    </TripsContext.Provider>
  );
};
export default TripsContextProvider;
