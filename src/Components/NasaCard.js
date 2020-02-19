import React from "react";

const NasaCard = props => {
  return (
    <div className="img-list">
      <h2>Image Title: {props.title} </h2>
        <img alt = "nasa pictures" src = {props.hdurl} />

      <div>
        <p>Explanation: {props.explanation}</p>
        <p>Date: {props.date}</p>
      </div>
    </div>
  );
};
export default NasaCard;
