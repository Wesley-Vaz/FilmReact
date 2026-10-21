import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`,
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
          // eslint-disable-next-line
          return key.id == id;
        });
        setMovie(filme);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div className="container mb-2">
      <nav className="row">
        <h1>Movie</h1>
      </nav>
      <div className=" row gx-4">
        <div className=" image col-6 p-0">
          <img
            className="img_movie img-cover w-100 h-100 "
            src={`${imagePath}${movie.poster_path}`}
            alt="{movie.title}"
          />
        </div>
        <div className=" description col-md-6 d-flex flex-column justify-content-evenly">
          <h1>{movie.title}</h1>
          <h5>Data de lançamento: {movie.release_date}</h5>
          <div className="descricao">
            <h4>Descrição: </h4>
            <p className="movie-desc">{movie.overview}</p>
          </div>
          <Link to="/">
            <button className="link_button">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
