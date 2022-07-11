import s from "./MovieDetailsVievs.module.css"
import { useState, useEffect , Suspense  } from "react";
import { useParams,NavLink,Outlet,useLocation,useNavigate} from "react-router-dom";
import * as moviesApi from '../../../service/Api-Service';


export default function MovieDetailsVievs() {
    const  {movieId}= useParams();
    const [film, setFilm] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
   

    useEffect(() => {
        moviesApi.fetchMovieDetails(movieId).then(setFilm).catch(console.log());
    }, [movieId]);

    const onGoBack = () => {
        navigate(location?.state?.from ?? '/');
      };
    
    return (
        <>
            <div className={s.Bcground}>
            <button type="button" onClick={onGoBack} className={s.btn}>
        Go back
      </button>
            </div>
            <div className={s.Container}>
                {film &&
                    <>
                        <div className={s.Poster}>
                          <div className={s.Bcg}>
                            <img className={s.Img} src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
                          </div>
                        </div>
                        <div className={s.ConteinerInfo}>
                           <div>
                               <h2 className={s.TitleH2}>{`${film.title} (${film.release_date.slice(0, 4)})`}</h2>
                               <p className={s.Text}>User score : {film.vote_average * 10}%</p>  
                           </div>
                           <div>
                               <h3 className={s.TitleH3}>Overview :</h3>
                               <p className={s.Text}>{film.overview}</p>
                           </div>
                           <div>     
                                <h3 className={s.TitleH3}>Genres :</h3>
                                <p className={s.Text}>{film.genres.map(({ name }) => name).join(' ')}</p>
                           </div>
                        </div>
                    </>} 
            </div> 
            <div className={s.ContainerCast}>
                <ul className={s.List}>
                     <li className={s.Item}>
                         <NavLink className={s.TitleH2}
                            to={`/movies/${movieId}/cast`}
                            state={{ from: location?.state?.from }}>Cast
                         </NavLink>
                    </li>
                    <li className={s.Item}>
                         <NavLink className={s.TitleH2}
                            to={`/movies/${movieId}/reviews`}
                            state={{ from: location?.state?.from }}>Reviews
                         </NavLink>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<div>Download...</div>}>
        <Outlet />
      </Suspense>
        </>
    )
}