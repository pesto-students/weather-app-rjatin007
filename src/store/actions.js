import actionTypes from "./actionTypes";
import { fetchDataByCityName } from "./api";

export const fetchDataByCity = (cityName) => {
  return (dispatch) => {
     dispatch({
         type:actionTypes.ASYNC_FETCH_DATA
     }) 
    fetchDataByCityName(cityName).then((res) => {
      console.log("Data", res);
      dispatch({
        type: actionTypes.ASYNC_FETCH_DATA_SUCCESS,
        payload: res,
      });
    }).catch(error){
        dispatch({
        type: actionTypes.ASYNC_FETCH_DATA_FAILURE,
        payload: error,
      });
    }
  };
};
