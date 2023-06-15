import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../store/countrySlice";

const Search = () => {
  const [customName, setCustomName] = useState("");
  const [checked, setChecked] = useState(false);

  const dispach = useDispatch();

  const handleSearch = () => {
    dispach(searchCountry({ customName, checked }));
    dispach(searchCountry());
  };

  return (
    <>
      <div className="m-5">
        <div className="form-check form-switch">
          <input
            className="form-check-input form-switch"
            type="checkbox"
            role="switch"
            onChange={(e) => setChecked(e.target.checked)}
          />
          <input
            type="text"
            value={customName}
            placeholder="Enter Country Name"
            onChange={(e) => setCustomName(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
