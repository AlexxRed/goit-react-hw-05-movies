import { useState, useEffect } from 'react';
import { FormContainer, FormInput, Button, MoviesList, ListItem } from './MoviesPage.styled';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { Loader } from "components/Loader/Loader"
import *as API from "../../services/api";
import  notPoster  from "images/no-poster-available.jpg";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function MoviesPage() {
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        if (!query.get('query')) {
        setMovies(null);
        return;
        }

        const getData = async () => {
        const results = await API.getSearchMovies(query.get('query'));
        setMovies(results);
        if (results.length === 0) {
            Notify.info('Movies is not found');
        }
        };
        getData();
    }, [query]);

    const handleSearchChange = e => {
        setInputValue(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!inputValue) {
            Notify.info('Please enter film name');
        }
        setQuery({ query: inputValue });
        setInputValue('');
    };

    return (
        <>
        <FormContainer autoComplete="off" onSubmit={handleSubmit}>
            <FormInput
            type="text"
            value={inputValue}
            onChange={handleSearchChange}
            />
            <Button type="submit">Search</Button>
        </FormContainer>
        {!movies && query.get('query') && <Loader />}
        {movies && (
            <MoviesList>
            {movies.map(movie => {
                return (
                <ListItem key={movie.id}>
                    <Link
                    to={`${movie.id}`}
                            state={{ from: location }}>
                            {movie.poster_path?
                                        (<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} width={300} height={450} />) :
                                (<img src={notPoster} alt="Uknown"  width={300} height={450}/>)}
                    {movie.title ?? movie.name}
                    </Link>
                </ListItem>
                );
            })}
            </MoviesList>
        )}
        </>
    );
}