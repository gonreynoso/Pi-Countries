import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_ID = "GET_COUNTRY_ID";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_ACTIVITIES = "GET_ACTIVITIES";


export const getCountries = () => async (dispatch) => {
  try {
    let apiData = await axios.get("/countries");
    return dispatch({ type: GET_COUNTRIES, payload: apiData.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`/countries?name=${name}`);
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: response.data });
    console.log(response);
  };
};

export const getCountryId = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/countries/${id}`);
    dispatch({ type: GET_COUNTRY_ID, payload: response.data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getActivities = () => async (dispatch) => {
  try {
    let json = await axios.get("/activities");
    console.log(axios);
    return dispatch({ type: GET_ACTIVITIES, payload: json.data });
  } catch (error) {
    console.log(error.message);
  }
};
