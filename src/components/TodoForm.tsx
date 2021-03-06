import React, { useEffect, useRef, useState } from 'react';

interface Iprops {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<Iprops> = (props): React.ReactElement => {
  const [title, setTitle] = useState<string>('');

  // focus on input //
  const ref: any = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  // focus on input //

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
        ref={ref}
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
