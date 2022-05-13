import {useEffect, useState } from "react";
import { Link, Outlet,useLocation } from 'react-router-dom';
import { PageTitle } from "components/PageTitle/PageTitle";
import { MovieItem } from "./HomePage.styled";
import * as API from "../../services/api";

export default function HomePage () {
    const [movies, setMovies] = useState(null);
    const location = useLocation()
    // console.log(location);

    useEffect(() => {
        if (!movies) {
            const getMovies = async () => {
                await API.getTrendingMovies().then(setMovies);
        }
            getMovies();
        }
    }, [movies]);
    
    return (
        <>
            <PageTitle text={'Trending Movies'} />
            {movies && (
            <ul>
                {
                    movies.map(({ title, name, id }) => {
                        return (
                            <MovieItem key={id}>
                                <Link to={`movies/${id}`} state={{ from: location }}>
                                    {title ?? name}
                                </Link>
                            </MovieItem>
                        )
                    })
                }
                </ul>
            )}
            <Outlet/>
        </>
    );
};

