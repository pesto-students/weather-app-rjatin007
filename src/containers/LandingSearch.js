import { useState, useEffect } from "react";
import styled from "styled-components";
import InputBar from "../ui/InputBar";
import List from "../ui/List";
import { fetchDataByCityLocation, fetchLocation } from "../store/actions";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import FlexColumnContainer from "../ui/ui-library/FlexColumnContainer";
import ErrorLabel from "../ui/ui-library/ErrorLabel";

const Layout = styled(FlexColumnContainer)`
  margin-top: 50px;
  justify-content: flex-start;
  width: ${({ width }) => (width ? width : "70%")};
  overflow-y: hidden;
`;

function LandingSearch({ fetchData, fetchCityLocation, citiesList }) {
  const [query, setQuery] = useState("");
  const [showError, setShowError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const handleOnChange = ({ target: { value } }) => {
    if (value.length > 0 && !isValidQuery(value)) {
      setShowError(true);
      setErrorMessage("Only alphabets please...!!!");
    }

    setQuery(value);
  };
  useEffect(() => {
    const debouncedFn = debounce(fetchCityLocation, 500);
    debouncedFn(query);
  }, [query, fetchCityLocation]);

  const isValidQuery = (query) => {
    const pattern = /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/;
    return pattern.test(query);
  };
  return (
    <Layout>
      <InputBar query={query} handleOnChange={handleOnChange} />
      {showError && <ErrorLabel>{errorMessage}</ErrorLabel>}
      <List cities={citiesList} fetchData={fetchData} />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  citiesList: state.locationData,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: (long, lat, city) =>
    dispatch(fetchDataByCityLocation(long, lat, city)),
  fetchCityLocation: (query) => dispatch(fetchLocation(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingSearch);
