import axios, { AxiosError } from "axios";
import { tTrip, tUserConnect } from "./interfaces";
const BASE_URL = "http://localhost:3000/api";
// let token = "test-token";

export const getToken = () =>{
  const token = localStorage.getItem('token-key');
  if (token !== null) {
    return token
  } else {
    return null
  }
  
}
const handleUnAuthuriseError = (error: AxiosError | unknown): void | 401 => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      console.log("Unauthorized: you are not login.")
      return axiosError.response.status;
    }
    if (axiosError.response?.status === 400) {
      console.log("Unauthorized: Please login or provide valid credentials.");
    } else {
      // Handle other Axios errors
      console.error("Axios error:", axiosError.message);
    }
  } else {
    // Handle other non-Axios errors
    console.error("Error:", error);
  }
};
export async function fetchAllData(_url: string): Promise<tTrip[] | void> {
  try {
    const fullUrl = `${BASE_URL}${_url}`;
    const response = await axios.get(fullUrl);
    return response.data;
  } catch (error) {
    handleUnAuthuriseError(error);
  }
}

export async function fetchTripData(_url: string): Promise<tTrip | void> {
  try {
    const fullUrl = `${BASE_URL}${_url}`;
    const response = await axios.get(fullUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleUnAuthuriseError(error);
  }
}

export async function createTrip(newTrip: tTrip, _token: string): Promise<tTrip | void| 401> {
  try {
    const options = {
      headers: { authorization: _token },
    };
    const response = await axios.post(`${BASE_URL}/trips`, newTrip, options);
    return response.data;
  } catch (error) {
    return handleUnAuthuriseError(error);
  }
}

export async function updateTrip(updatedTrip: tTrip, _token: string): Promise<tTrip | void| 401> {
  try {
    const options = {
      headers: { authorization: _token },
    };
    const response = await axios.put(
      `${BASE_URL}/trips/${updatedTrip.id}`,
      updatedTrip,
      options
    );
    console.log("this is from service", response.data);
    return response.data;
  } catch (error) {
    return handleUnAuthuriseError(error);
  }
}

export async function deleteTrip(tripId: string, _token: string): Promise<tTrip | void| 401> {
  try {
    const options = {
      headers: { authorization: _token },
    };
    const response = await axios.delete(`${BASE_URL}/trips/${tripId}`, options);
    return response.data;
  } catch (error) {
    return handleUnAuthuriseError(error);
  }
}

export async function loginUser(
  user: tUserConnect
): Promise<{
  message: string;
  responseObj: { user: tUserConnect; token: string };
} | void|401|number> {
  try {
    console.log("from services: ", user);
    const response = await axios.post(`${BASE_URL}/auth/login`, user);
    const resToken = response.data.responseObj?.token
    if (resToken){
    console.log("from services:", resToken);
    localStorage.setItem("token-key", resToken)}
    else{
      console.log('some error ocurred this is the token:',resToken );
    }
    return response.status;
  } catch (error) {
    handleUnAuthuriseError(error);
  }
}
export async function registerUser(
  user: tUserConnect
): Promise<number | void> {
  try {
    console.log("from services: ", user);
    const response = await axios.post(`${BASE_URL}/auth/register`, user);
    return response.status;
  } catch (error) {
    handleUnAuthuriseError(error);
  }
}
