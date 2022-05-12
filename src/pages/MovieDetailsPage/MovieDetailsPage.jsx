import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "components/Loader/Loader"
import { MovieContainer, MovieInfo, MovieAdditionalInfo } from "./MoviesDetailsPage.styled";
import *as API from "../../services/api";

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    // console.log(movieId);


    useEffect(() => {
    const getData = async () => {
        const results = await API.getMovieDetails(movieId);
        setMovie(results);
        };

        getData();

    }, [movieId]);

    // const {poster_path, original_title, title, vote_average  } = movie

    return (
        <>
            {!movie && <Loader/>}
            {movie && <p>{ movie.title }</p>}
            {movie && (
                <>
                    <MovieContainer>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
                    </MovieContainer>
                </>
            )}
        </>
    ) 
    
}; 