import actionTypes from "./actionTypes";
import { fetchDataByCityCoordinates } from "./weatherApi";
import { fetchLocationCoordinates } from "./locationApi";
export const fetchDataByCityLocation = (long, lat, city) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ASYNC_FETCH_WEATHER_DATA,
    });
    fetchDataByCityCoordinates(long, lat, city).then((res) => {
      dispatch({
        type: actionTypes.ASYNC_FETCH_WEATHER_DATA_SUCCESS,
        payload: res,
        currentCity: city,
      });
    }).catch = (error) => {
      dispatch({
        type: actionTypes.ASYNC_FETCH_WEATHER_DATA_FAILURE,
        payload: error,
      });
    };
  };
};
export const fetchLocation = (query) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ASYNC_FETCH_LOCATION_COORDINATES,
    });
    fetchLocationCoordinates(query).then((res) => {
      if (res.error) {
        dispatch({
          type: actionTypes.ASYNC_FETCH_LOCATION_COORDINATES_FAILURE,
          payload: res,
        });
      }
      dispatch({
        type: actionTypes.ASYNC_FETCH_LOCATION_COORDINATES_SUCCESS,
        payload: res,
      });
    }).catch = (error) => {
      dispatch({
        type: actionTypes.ASYNC_FETCH_LOCATION_COORDINATES_FAILURE,
        payload: error,
      });
    };
  };
};
