import React, {useState} from 'react';
import MemoMovieItem from './MovieItem.tsx';
import MovieForm from './MovieForm/MovieForm.tsx';
import {Movie} from './types';

const local: string = 'Movie';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>(JSON.parse(window.localStorage.getItem(local)));

  const onSubmit = (name: string) => {
    const movie: Movie = {
      id: Math.random(),
      name: name,
    };

    setMovies(prevState => {
      window.localStorage.setItem(local, JSON.stringify([...prevState, movie]));
      return [...prevState, movie];
    });
  };

  const onDelete = (name: string, id: number) => {
    setMovies(prevState => {
      const data: Movie[] = prevState.filter((movie: Movie) => {
        return !(movie.name === name && movie.id === id);
      });
      window.localStorage.setItem(local, JSON.stringify(data));
      return data;
    });
  };

  const onChange = (id: number, newName: string) => {
    setMovies(prevState => {
      const data: Movie[] = prevState.map((movie: Movie) => {
        if (movie.id === id) {
          movie.name = newName;
        }
        return movie;
      });
      window.localStorage.setItem(local, JSON.stringify(data));
      return data;
    });
  };

  let listOfMovie: React.JSX.Element[] | null;

  if (movies.length > 0) {
    listOfMovie = movies.map((movie: Movie) =>
      <MemoMovieItem
        key={movie.id}
        movie={movie}
        onDelete={onDelete}
        onChange={onChange}
      />
    );
  }

  return (
    <>
      <MovieForm onSubmit={onSubmit}/>
      <div>
        {movies.length ? listOfMovie : <div>Add some movie</div>}
      </div>
    </>
  );
};

export default Movies;