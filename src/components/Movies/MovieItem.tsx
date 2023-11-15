import React, {useState} from 'react';

interface Props {
  id: number;
  name: string;
  onDelete: (name: string, id: number) => void;
  onChange: (id: number, newName: string) => void;
}

const MovieItem: React.FC<Props> = ({id, name, onDelete, onChange}) => {
  const [currentName, setCurrentName] = useState<string>(name);
  console.log('[MovieItem] change');

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.target.value);
    onChange(id, event.target.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        onChange={onNameChange}
        value={currentName}
        type="text"
        className="form-control"
        aria-label="Movie' name"
        aria-describedby="button"
      />
      <button
        onClick={() => onDelete(name, id)}
        className="btn btn-outline-danger"
        type="button"
        id="button"
      >Delete
      </button>
    </div>
  );
};

export default MovieItem;