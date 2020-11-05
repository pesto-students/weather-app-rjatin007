const API_KEY = "1d600b250e42f85bdf276618d3016cce";
const units = "metric";
const rootUrl = `https://api.openweathermap.org/data/2.5/onecall?&appid=${API_KEY}&units=${units}`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
};
export const fetchDataByCityCoordinates = (long, lat) => {
  // console.log("city", cityName);
  return fetch(`${rootUrl}&lon=${long}&lat=${lat}`, headers)
    .then((res) => res.json())
    .then((res) => res);
};
