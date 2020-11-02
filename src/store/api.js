const API_KEY = "1d600b250e42f85bdf276618d3016cce";
const units = "metric";
const rootUrl = `api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=${units}`;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
};
export const fetchDataByCityName = (cityName) =>
  fetch(`${rootUrl}&q=${cityName}`, headers)
    .then((res) => res.json())
    .then((res) => res);
