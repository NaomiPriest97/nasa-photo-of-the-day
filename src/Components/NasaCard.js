import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
  background-color: lightgray;


`;

const StyledH2 = styled.h2`
  padding:20px;
  border: 2px dashed red;
  background: lightgray;
  color: blue;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 40px;
`;

const StyledImg = styled.img`
  max-width:80%;
  border-radius: 10px;

`;

const StyledP = styled.p`
  display:flex;
  justify-content:center;
  align-content:center;
  margin:40px;
  border:2px dashed blue;
  color: red;
  padding: 20px;

`;

const StyledDate = styled.p`
  display:flex;
  align-content:center;
  justify-content:center;
  margin: 40px;
  border: 2px dashed red;
  padding: 20px;
  

`;

const NasaCard = props => {
  return (
    <StyledDiv key = {props.id} className="img-list">
      <StyledH2 className = "title">{props.title} </StyledH2>
        <StyledImg src = {props.image} alt = "nasa pictures" />

      <div className = "dateanddata">
        <StyledDate>{props.date}</StyledDate>
        <StyledP>{props.explanation}</StyledP>
      </div>
    </StyledDiv>
  );
};
export default NasaCard;
