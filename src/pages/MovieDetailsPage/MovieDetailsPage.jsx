import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { MovieContainer, MovieInfo, MovieAdditionalInfo, AdditionalInfoItem, Button } from "./MoviesDetailsPage.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  notPoster  from "images/no-poster-available.jpg";
import *as API from "../../services/api";


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    // console.log(navigate);
    

    useEffect(() => {
        const getData = async () => {
        try {
            const results = await API.getMovieDetails(movieId);
            setMovie(results);
        } catch (error) {
            Notify.info(`${error.code}`);
        };
        };
        
        getData();
    }, [movieId]);
    
    const handleClickGoBack = () => {
        if (
            location.pathname.includes('cast') ||
            location.pathname.includes('reviews') ||
            location?.state?.from?.search
        ) {

            console.log(location.state.from.pathname);
            console.log(location.state.from.search);
        return navigate(
            location.state.from.pathname + location.state.from.search
        );
    }
    navigate('/');;
    }
    return (
        <>
            {!movie && <Loader />}
            {/* <Link to={location.state}>go back</Link> */}
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
                            <NavLink to="cast" state={location.state}>Cast</NavLink>
                        </AdditionalInfoItem>
                        <AdditionalInfoItem>
                            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
                        </AdditionalInfoItem>
                        </MovieAdditionalInfo>
                        <Outlet />
                </>
            )}
        </>
    ) 
    
}; 