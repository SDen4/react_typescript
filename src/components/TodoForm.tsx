import React, { useRef } from 'react';

interface Iprops {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<Iprops> = (props): React.ReactElement => {
  // const [title, setTitle] = useState<string>('');

  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  //   console.log(title);
  // };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';

      // console.log(title);
      // setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter todo"
        // onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter todo
      </label>
    </div>
  );
};
