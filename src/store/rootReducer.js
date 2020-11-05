import actionTypes from "./actionTypes";
const initialState = {
  error: null,
  isLoading: false,
  weatherData: null,
  locationData: null,
  currentCity: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASYNC_FETCH_WEATHER_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ASYNC_FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        weatherData: action.payload,
        currentCity: action.currentCity,
      };
    case actionTypes.ASYNC_FETCH_WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case actionTypes.ASYNC_FETCH_LOCATION_COORDINATES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.ASYNC_FETCH_LOCATION_COORDINATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        locationData: action.payload,
      };
    case actionTypes.ASYNC_FETCH_LOCATION_COORDINATES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
