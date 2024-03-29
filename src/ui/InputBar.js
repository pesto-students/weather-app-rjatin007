import SearchBar from "./ui-library/SearchBar";
import Input from "./ui-library/Input";

const InputBar = ({ query, handleOnChange }) => (
  <>
    <SearchBar>
      <Input
        placeholder="Search Weather..."
        value={query}
        onChange={handleOnChange}
      />
    </SearchBar>
  </>
);
export default InputBar;
