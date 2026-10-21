import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const KEY = process.env.REACT_APP_KEY;
  const TOKEN = process.env.REACT_APP_TMDB_TOKEN;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results || []))
      .catch((error) => console.error("Erro ao buscar filmes:", error));
  }, [KEY]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=pt-BR", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setGenres(data.genres || []))
      .catch((error) => console.error("Erro ao buscar gêneros:", error));
  }, [TOKEN]);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : movies;

  return (
    <Container>
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          <h1 className="col-6">Filmes</h1>
          <div className="filtro-genero col-6">
            <label htmlFor="genre">Filtrar por gênero</label>

            <select
              id="genre"
              value={selectedGenre}
              onChange={(event) => setSelectedGenre(event.target.value)}
            >
              <option value="">Todos</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <MovieList>
        {filteredMovies.map((movie) => (
          <Movie key={movie.id}>
            <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
            <span>{movie.title}</span>

            <Link to={`/${movie.id}`}>
              <Btn>Detalhes</Btn>
            </Link>
          </Movie>
        ))}
      </MovieList>
    </Container>
  );
}

export default Home;
