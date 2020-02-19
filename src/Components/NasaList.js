import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList(){
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get( "https://api.nasa.gov/planetary/apod?api_key=9d1VVowdM3TEheS5vbJWwTCvrnconxVTdSBUiUfG")
        .then(response => {
            console.log(response.data);
           setImages(response.data);
        })
        .catch(error => [console.log("the data was not returned", error)
    ]);
    }, []);

    return (
        <div className = "imgs">
            {images.map(image => {
                return (
                    <NasaCard 
                    title = {image.title}
                    image = {image.hdurl}
                    date = {image.date}
                    explanation = {image.explanation}
                    />
                )
            })}
        </div>
    );
}