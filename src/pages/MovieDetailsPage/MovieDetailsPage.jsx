import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { MovieContainer, MovieInfo, MovieAdditionalInfo, AdditionalInfoItem, Button } from "./MoviesDetailsPage.styled";
import  notPoster  from "images/no-poster-available.jpg";
import *as API from "../../services/api";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(location);
    // console.log(navigate);
    

    useEffect(() => {
    const getData = async () => {
        const results = await API.getMovieDetails(movieId);
        setMovie(results);
        };
        
        getData();
    }, [movieId]);
    
    const handleClickGoBack = () => {
        console.log(location);
        navigate('/');
    }
    return (
        <>
            {!movie && <Loader />}
            <Button type="button" onClick={()=>handleClickGoBack()}>go back</Button>
            {movie && (
                <>
                    <MovieContainer>
                        {movie.poster_path?
                            (<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />) :
                            (<img src={notPoster} alt="Uknown" />)}
                        <MovieInfo>
                            <h1>{movie.title}({movie?.release_date?.split('-')[0]})</h1>
                            <p>User Score: {movie.vote_average * 10}%</p>
                            <h2>Overview</h2>
                            <p>{movie.overview}</p>
                            <h2>Genres</h2>
                            <p>{movie.genres.map(genre => <span key={genre.id}>{genre.name} </span>
                            )}</p>
                        </MovieInfo>
                    </MovieContainer>
                    <p>Additional information</p>
                    <MovieAdditionalInfo>
                        <AdditionalInfoItem>
                            <NavLink to="cast">Cast</NavLink>
                        </AdditionalInfoItem>
                        <AdditionalInfoItem>
                            <NavLink to="reviews">Reviews</NavLink>
                        </AdditionalInfoItem>
                        </MovieAdditionalInfo>
                        <Outlet />
                </>
            )}
        </>
    ) 
    
}; 