import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from "components/Loader/Loader"
import *as API from "../../services/api";


export default function ReviewsPages()  {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams()
    
    useEffect(() => {
        const getReviews = async () => {
            try {
            const result = await API.getMovieReviews(movieId)
                setReviews(result)
            } catch (error) {
                Notify.info(`${error.code}`);
                <p>Sorry, page not found :( <Link to="/">Please go to main page</Link></p>
            };
        }
        getReviews();
    }, [movieId]);

    return (
        <>
            {!reviews && <Loader />}

            {reviews?.length === 0 && (<p>We don't have any reviews info</p>)}

            {reviews && (
                <ul>
                {reviews.map(item => {
                    return (
                        <li key={item.id}>
                            <b><b>Author: </b>{item.author}</b>
                            <p> {item.content}</p>
                        </li>
                    )
                })}
            </ul>
            )}
            
        </>
    )
}; 