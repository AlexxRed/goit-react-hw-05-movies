import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import *as API from "../../services/api"

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    console.log(useParams());
    const { movieId } = useParams();
    console.log(movieId);


    useEffect(() => {
    const getData = async () => {
        const results = await API.getMovieDetails(movieId);
        console.log(results);
        setMovie(results);
        };
        getData();
    }, [movieId]);

    return (
        <div>
            {!movie && <p>loading</p>}
            {movie && <div>
                {/* <img src={ }/> */}
                <p>{ movie}</p>
            </div>}
        </div>
    ) 
    
}; 