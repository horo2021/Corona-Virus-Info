import axios from "axios";
const baseURL = "https://api.covid19api.com";

export const getGlobal = async () => {
  const response = await axios.get(
    `${baseURL}/summary`
  );
 
  return response.data.Global;
};
export const getCountry = async () => {
  const response = await axios.get(
    `${baseURL}/summary`
  );
 
  return response.data.Countries;
};
