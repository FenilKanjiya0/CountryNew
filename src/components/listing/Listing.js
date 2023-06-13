import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../table/Table";

const APIDATA = "https://restcountries.com/v3.1/all";

const Listing = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [coustomName, setCoustomName] = useState("");
  const [checked, setChecked] = useState(false);

  const countryData = async () => {
    try{
      await axios
      .get(APIDATA)
      .then((res) => {
        setAllData(res.data);
        setLoading(false);
        setError(null);
      })
    } catch(err){
      setError("Something went wrong, Could not fatch data")
    }
    
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .get(
          `https://restcountries.com/v3.1/name/${coustomName}?fullText=${checked}`
        )
        .then((res) => {
          setAllData(res.data);
          setLoading(false);
          setError(null);
        });
    } catch (err) {
      console.log(err)
      setError("Sorry!! This country dose not exist");
    }
  };

  const handleReset = () => {
    countryData();
    setCoustomName('');
  }

  useEffect(() => {
    countryData();
  }, []);

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
        <button className="btn btn-warning" onClick={handleReset}>Reset</button>
        {error && <h2>{error}</h2>}
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
