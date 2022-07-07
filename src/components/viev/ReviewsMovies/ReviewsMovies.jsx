import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../../../service/Api-Service";
import s from "./ReviewsMovies.module.css"


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        moviesApi.fethMovieReviews(movieId).then(setReviews)
    }, [movieId]);

    return (
        <>
            <div className={s.Container}>
                {reviews && reviews.length > 0 ? (
                    <ul className={s.List}>
                        {reviews.map(({ author, content, id }) =>
                            <li className={s.Elem} key={id}>
                                <h3 className={s.Title}>Autor : {author}</h3>
                                <p className={s.Text}>{content}</p> 
                        </li>)}
                    </ul>) : (<p>We don't have any reviews for this movie.</p>)
              }  
            </div>
        </>
    )
}

export default Reviews;