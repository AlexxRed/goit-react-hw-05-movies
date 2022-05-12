import { PageTitle } from "components/PageTitle/PageTitle";
import {useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import * as API from "../../services/api";

export const HomePage = () => {
    const [movies, setMovies] = useState(null);
    // const location = useLocation()
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
                            <li key={id}>
                                <Link to={`movies/${id}`} >
                                    {title ?? name}
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            )}
            <Outlet/>
        </>
    );
};

