import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from "components/Loader/Loader"
import *as API from "../../services/api";

export default function CastPage() {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                const result = await API.getMovieCredits(movieId)
                setCast(result)
            } catch (error) {
                Notify.info(`${error.code}`);
    };
        }
        getCast()
    }, [movieId]);

    return (
        <>
            {!cast && <Loader />}

            {cast?.length === 0 && (<p>We don't have any casters info</p>)}

            {cast?.length > 0 && (
                <ul>
                {cast.map(item => {
                    return (
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt="" />
                            <p>{item.name}</p>
                            <p><b>Character:</b> {item.character}</p>
                        </li>
                    )
                })}
            </ul>
            )}
        </>
    )
}; 