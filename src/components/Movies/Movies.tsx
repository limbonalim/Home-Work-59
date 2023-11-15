import React, {useState} from 'react';
import MovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm.tsx';

interface Movie {
  id: number;
  name: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const onSubmit = (name: string) => {
    const movie: Movie = {
      id: Math.random(),
      name: name,
    };
    setMovies(prevState => [...prevState, movie]);
  };

  const onDelete = (name: string, id: number) => {
    setMovies(prevState => prevState.filter((movie) => {
      return !(movie.name === name && movie.id === id);
    }));
  };

  const onChange = (id, newName) => {
    setMovies(prevState => prevState.map((movie) => {
      if (movie.id === id) {
        movie.name = newName;
      }
      return movie;
    }));
  };

  let listOfMovie: React.JSX.Element[] | null;

  if (movies.length > 0) {
    listOfMovie = movies.map((movie) =>
      <MovieItem
        key={movie.id}
        id={movie.id}
        name={movie.name}
        onDelete={onDelete}
        onChange={onChange}
      />
    );
  }

  return (
    <div>
      <MovieForm onSubmit={onSubmit}/>
      <div>
        {movies.length ? listOfMovie : <div>Add some movie</div>}
      </div>
    </div>
  );
};

export default Movies;