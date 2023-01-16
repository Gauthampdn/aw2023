import React from "react";

export default function Card(props) {
  const { country } = props;
  return (
    <div style={{ backgroundColor: "sienna", width: 200 }}>
      <h4>Country ID: {country.country_id}</h4>
      <span><b>Probability: </b>{country.probability}</span>
    </div>
  );
}