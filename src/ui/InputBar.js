import SearchBar from "./ui-library/SearchBar";
import Input from "./ui-library/Input";
import SearchIcon from "./ui-library/icons/SearchIcon";
const InputBar = () => (
  <>
    <SearchBar>
      <SearchIcon />
      <Input placeholder="Search by city name" />
    </SearchBar>
  </>
);
export default InputBar;
