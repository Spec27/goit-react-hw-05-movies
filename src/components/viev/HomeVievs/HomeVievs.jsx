import { useState ,useEffect } from 'react';
import * as moviesApi from '../../../service/Api-Service';
import { Link, /* useLocation  */} from 'react-router-dom';
import s from "./HomeVievs.module.css"


const HomeVievs = () => {
    /* const location  = useLocation() */
    const [films, setFilms] = useState(null);


    useEffect(() => {
        moviesApi.fetchTrending().then(setFilms)
},[])

    return (
        <>
        <div className={s.Container} >
                <h1 className={s.Title} >Популярне сьогодні</h1>
                {films && (
                    <ul className={s.List}>
                        {films.map(({ id, title ,poster_path}) => <li className={s.Card}  key={id}>
                            <Link className={s.Cardlink} to={`movies/${id}`}>
                                <img className={s.Poster} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                               <h3 className={s.CardTitle}>{title}</h3> 
                            </Link>
                        </li>)}
                    </ul>
            )}
        </div>
        </>
    )
}

export default HomeVievs;