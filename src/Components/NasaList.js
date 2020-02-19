import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList(){
    const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=GXzowfsVTghFeaKRFbpgHgBfFpOwABoQuOjlElV3`)
        .then(response => {
            console.log(response);
           setNasa([response.data]);
        })
        .catch(error => {console.log("the data was not returned", error)});
            
    }, []);

    return (
        <div className = "imgs">
            {nasa.map(image => {
                return (
                    <NasaCard 
                    title = {image.title}
                    key = {image.id}
                    image = {image.hdurl}
                    date = {image.date}
                    explanation = {image.explanation}
                    />
                    
                );
            })}
        </div>
    );
}