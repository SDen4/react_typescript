import React, { useState } from 'react';

interface Iprops {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<Iprops> = (props): React.ReactElement => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    // prevent empty todo names
    if (!title.trim()) return null;

    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        type="text"
        id="title"
        placeholder="Enter todo"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter todo
      </label>
    </div>
  );
};
