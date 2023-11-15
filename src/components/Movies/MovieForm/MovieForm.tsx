import React, {useState} from 'react';

const MovieForm = ({onSubmit}) => {
  const [movie, setMovie] = useState<string>('');

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(event.target.value);
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(movie);
    setMovie('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <input
          required={true}
          onChange={changeMovie}
          value={movie}
          type="text"
          name="name"
          className="form-control"
          placeholder="Add some Movie..."
          aria-label="Add Movie"
          aria-describedby="button"
        />
        <button className="btn btn-outline-success" type="submit" id="button">Add</button>
      </div>
    </form>);
};


export default MovieForm;