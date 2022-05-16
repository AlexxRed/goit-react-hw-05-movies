import {useEffect, useState } from "react";
import { Link, Outlet,useLocation } from 'react-router-dom';
import { PageTitle } from "components/PageTitle/PageTitle";
import { MovieItem, MoviesList } from "./HomePage.styled";
import  notPoster  from "images/no-poster-available.jpg";
import * as API from "../../services/api";

export default function HomePage () {
    const [movies, setMovies] = useState(null);
    const location = useLocation()
    // console.log(location);

    useEffect(() => {
        if (!movies) {
            const getMovies = async () => {
                const fetchMovies = await API.getTrendingMovies()
                setMovies(fetchMovies)
        }
            getMovies();
        }
    }, [movies]);
    
    return (
        <>
            <PageTitle text={'Trending Movies'} />
            {movies && (
            <MoviesList>
                {
                    movies.map(({ title, name, id, poster_path }) => {
                        return (
                            <MovieItem key={id}>
                                <Link to={`movies/${id}`} state={{ from: location }}>
                                    {poster_path?
                                        (<img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />) :
                                        (<img src={notPoster} alt="Uknown" />)}
                                    {title ?? name}
                                </Link>
                            </MovieItem>
                        )
                    })
                }
                </MoviesList>
            )}
            <Outlet/>
        </>
    );
};

