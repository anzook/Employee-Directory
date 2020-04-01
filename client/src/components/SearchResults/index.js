import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table table-sm table-hover search-results">
      <caption>Employee Search Results</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Department</th>
          <th scope="col">Status</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <tr key={result.id} className="">
            <th scope="row">
              {" "}
              {result.firstName} {result.lastName}{" "}
            </th>
            <td> {result.title} </td>
            <td> {result.department} </td>
            <td> {result.status} </td>
            <td> {result.phone} </td>
            <td> {result.email} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
