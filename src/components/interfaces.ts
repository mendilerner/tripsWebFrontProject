export interface tUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export interface tTrip {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description?: string;
  price?: number;
  image: string;
  activities?: string[];
}

export const defaultTrip: tTrip = {
  "id": "1",
  "name": "Beach Paradise",
  "destination": "Hawaii, USA",
  "startDate": "2023-10-01",
  "endDate": "2023-10-10",
  "description": "Enjoy the sun and surf on the beautiful beaches of Hawaii.",
  "price": 1200,
  "image": "hawaii.jpg",
  "activities": ["Surfing", "Snorkeling", "Hiking"]
}
export const blankTrip: tTrip = {
  "id": "",
  "name": "",
  "destination": "",
  "startDate": "",
  "endDate": "",
  "description": "",
  "price": 0,
  "image": "",
  "activities": []
};


// export interface TripsContextType{
//   trips: tTrip[]
// }
export interface TripContextProviderProps {
  children: React.ReactNode;
  }

export interface TripsContextType{
  trips:tTrip[];
  setTrips: React.Dispatch<React.SetStateAction<tTrip[]>>
}