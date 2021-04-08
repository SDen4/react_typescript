import React from 'react';
import { useHistory } from 'react-router-dom';
import { Sample } from '../types_example/Types';
import { Enum } from '../types_example/Enum';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ut
        facere minima, laudantium ullam velit impedit, eligendi vero, facilis
        cum rerum deserunt! Magni debitis consequatur eaque nostrum quia amet
        deserunt.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Return to todos list
      </button>
      <Sample />
      <Enum />
    </>
  );
};
