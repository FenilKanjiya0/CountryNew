import React from "react";

const Table = (props) => {
  return (
    <>
    <div className="container d-flex justify-content-center">
      <table className="table table-bordered w-75">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Flage</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col">Population</th>
          </tr>
        </thead>
        {props?.data?.map((val, index) => {
          return (
            <React.Fragment  key={index}>
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td><img src={val.flags.png} style={{width: "50px", height:"30px"}} /></td>
                  <td>{val.name.common}</td>
                  <td>{val.capital}</td>
                  <td>{val.population}</td>
                </tr>
              </tbody>
            </React.Fragment>
          );
        })}
      </table>
      </div>    
    </>
  );
};

export default Table;
