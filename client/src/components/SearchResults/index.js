import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <p> {result.firstName} {result.lastName} </p>
          <p> {result.title} </p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
