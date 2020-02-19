import React from "react";

const NasaCard = props => {
  return (
    <div key = {props.id} className="img-list">
      <h2>Image Title: {props.title} </h2>
        <img src = {props.image} alt = "nasa pictures" />

      <div>
        <p>Date: {props.date}</p>
        <p>Explanation: {props.explanation}</p>
      </div>
    </div>
  );
};
export default NasaCard;
