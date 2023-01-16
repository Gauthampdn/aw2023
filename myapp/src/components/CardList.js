import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.country || [];
  }
  console.log(data);
  return (
    <ul>
      {data.map((item) => (
        <Card country={item} />
      ))}
    </ul>
  );
}

export default CardList;