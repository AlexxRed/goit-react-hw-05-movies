import {useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import * as API from "../../services/api";

export const HomePage = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (!movies) {
            const getMovies = async () => {
                const data = await API.getTrendingMovies();
                setMovies(data);
        }
            getMovies(movies)
        }
        
        console.log(movies);
    }, [movies]);
    
    return (
        <h1>Trending Movies</h1>
    )
};