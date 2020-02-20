import React from "./node_modules/react";


const NasaCard = (props) => {
 
  


  return (
    
    <div key = {props.id} className="img-list">
      <h2 className = "title">{props.title} </h2>
      <img src = {props.image} alt = "nasa pictures" />

        <p>{props.date}</p>
       
          <p>{props.explanation}</p>
      
    </div>
    
  );
  
};

export default NasaCard;
