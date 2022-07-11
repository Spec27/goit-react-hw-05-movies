import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as moviesApi from '../../../service/Api-Service';
import s from './MoviesVievs.module.css';

const MoviesVievs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [filmQuery, setFilmQuery] = useState([]);
  const [searchedFilms, setSearchedFilms] = useState([]);

  const searchQuery = new URLSearchParams(location.search).get('query');

  const handleChange = e => setFilmQuery(e.target.value.toLowerCase());

  const handleSubmit = e => {
    e.preventDefault();

    if (!filmQuery) return;
    navigate({ ...location, search: `query=${filmQuery}` });

    setFilmQuery('');
  };

  useEffect(() => {
    if (!searchQuery) return;
    moviesApi.searchMovies(searchQuery).then(setSearchedFilms);
  }, [searchQuery]);

  return (
    <>
      <form className={s.Container} onSubmit={handleSubmit}>
        <label>
          <input
            className={s.Input}
            type="text"
            name="name"
            value={filmQuery}
            onChange={handleChange}
          />
        </label>
        <button className={s.Button} type="submit">
          Search
        </button>
      </form>
      <div className={s.Bcg}>
        {searchedFilms && (
          <ul className={s.List}>
            {searchedFilms.map(({ id, title, poster_path }) => (
              <li className={s.Card} key={id}>
                <Link
                  className={s.Cardlink}
                  to={`${id}`}
                  state={{ from: location }}
                >
                  <div>
                    <img
                      className={s.Img}
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={title}
                    />
                  </div>
                  <h2 className={s.CardTitle}>{title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoviesVievs;
