import axios from "axios";
import { tTrip } from "./interfaces";
const BASE_URL = "http://localhost:3000/api";
let token = "test-token"
export async function fetchAllData(_url: string): Promise<tTrip[] | void> {
  try {
    const fullUrl = `${BASE_URL}${_url}`;
    const response = await axios.get(fullUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTripData(_url: string): Promise<tTrip | void> {
  try {
    const fullUrl = `${BASE_URL}${_url}`;
    const response = await axios.get(fullUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createTrip(newTrip: tTrip): Promise<tTrip | void> {
  try {
    const options = {
      headers: {authorization : token}
    };
    const response = await axios.post(`${BASE_URL}/trips`, newTrip, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function updateTrip(updatedTrip: tTrip): Promise<tTrip | void> {
  try {
    const options = {
      headers: {authorization : token}
    };
    const response = await axios.put(`${BASE_URL}/trips/${updatedTrip.id}`, updatedTrip, options);
    console.log('this is from service',response.data);
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTrip(tripId: string): Promise<tTrip | void> {
  try {
    const options = {
      headers: {authorization : token}
    };
    const response = await axios.delete(`${BASE_URL}/trips/${tripId}`, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
