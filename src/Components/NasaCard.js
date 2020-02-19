import React from "react";

const NasaCard = props => {
  return (
    <div key = {props.id} className="img-list">
      <h2 className = "title">{props.title} </h2>
        <img src = {props.image} alt = "nasa pictures" />

      <div className = "dateanddata">
        <p>{props.date}</p>
        <p>{props.explanation}</p>
      </div>
    </div>
  );
};
export default NasaCard;
