import axios from 'axios';

const API_KEY = '07d8f6bb3fbc4adc66305e6fcf7baef2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    };
};

export const getSearchMovies = async searchQuery => {
    try {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    };
};

export const getMovieDetails = async id => {
    try {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    };
};

export const getMovieCredits = async id => {
    try {
        const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
        return response.data.cast;
    } catch (error) {
        console.log(error);
    };
};

export const getMovieReviews = async id => {
    try {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error);
    };
};

const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
];

export function getGenres(arrayId) {
    const arr = [];
    for (const value of genres) {
        if (arrayId.includes(value.id)) {
        arr.push(value.name);
        }
    }
    if (arrayId.length > 2) {
        arr.splice(2, arr.length - 2, 'Other');
    }

    return arr.join(', ');
}