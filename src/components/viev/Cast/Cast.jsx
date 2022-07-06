import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesApi from "../../../service/Api-Service";
import s from "./Cast.module.css"

 const Cast=()=> {
    const {movieId}= useParams();
    const [actors, setActors] = useState(null);

   useEffect(() => {
     moviesApi.fetchMovieCredits(movieId).then(setActors);
   }, [movieId]);

    return (
    <>
       <div>
           {actors && (
           <ul className={s.Container}>
             {actors
               .filter((actor, index) => index < 10 && actor.profile_path)
               .map(({ id, name, profile_path, character }) => (
                 <li className={s.Card} key={id}>
                   <img className={s.img}
                     src={`https://image.tmdb.org/t/p/original${profile_path}`}
                     alt={name}
                     width={200}
                   />
                   <h3 className={s.Title}>{name}</h3>
                   <p className={s.Text}> Character : {character} </p>
                 </li>
               ))}
           </ul>
         )}
       </div>
    </>  
    )
}

export default Cast;   