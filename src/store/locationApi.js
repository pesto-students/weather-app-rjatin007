const rootUrl = "https://api.locationiq.com/v1/autocomplete.php?";
const Access_Token = "pk.a9a947428f25ed0d9e1685eb95d9a50f";

export const fetchLocationCoordinates = (query) =>
  fetch(`${rootUrl}key=${Access_Token}&q=${query}`)
    .then((res) => res.json())
    .then((res) => res);
