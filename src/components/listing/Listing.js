import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../table/Table";

const APIDATA = process.env.REACT_APP_API_KEY;

const Listing = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form State
  const [coustomName, setCoustomName] = useState("");
  const [checked, setChecked] = useState(false);

  // Call all data's api function
  useEffect(() => {
    countryData();
  }, []);

  // listing all data function
  const countryData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${APIDATA}/all`);
      setAllData(res.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("Something went wrong, Could not fatch data");
      setLoading(false);
    }
  };

  // Country Search Query
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        `${APIDATA}/name/${coustomName}?fullText=${checked}`
      );
      setAllData(res.data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("Sorry!! This country dose not exist");
      setLoading(false);
    }
  };

  // Reset Button Query
  const handleReset = () => {
    countryData();
    setCoustomName("");
  };

  // Form Component Function
  const searchItem = (
    <div className="m-5">
      <form onSubmit={handleSearch}>
        <div className="form-check form-switch">
          <input
            className="form-check-input form-switch"
            type="checkbox"
            role="switch"
            onChange={(e) => setChecked(e.target.checked)}
          />

          <input
            type="text"
            value={coustomName}
            placeholder="Enter CountryName"
            onChange={(e) => setCoustomName(e.target.value)}
          />
          <button className="btn btn-primary" type="submit ">
            Search
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div className="container">
        <h1 className="mb-5">Country Data</h1>
        {searchItem}
        <button className="btn btn-warning mb-5" onClick={handleReset}>
          Reset
        </button>
        {error && !loading && <h2>{error}</h2>}
        {!error ? (
          loading ? (
            <h2>Loading....</h2>
          ) : (
            <Table data={allData} />
          )
        ) : null}
      </div>
    </>
  );
};

export default Listing;
