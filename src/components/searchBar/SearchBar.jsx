import "./searchBar.css";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useCountriesStore } from "../../store/countriesStore";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const { search, setSearch, filteredList } = useCountriesStore();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredList.length === 1) {
      navigate(`/${filteredList[0].cca3}`);
    }
  };

  return (
    <div className="search-bar">
      <div className="icon">
        <RxMagnifyingGlass />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
    </div>
  );
};

export default SearchBar;
