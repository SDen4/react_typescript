import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';

import styles from './AboutPage.module.css';

export const AboutPage: React.FC = (): React.ReactElement => {
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
      {/* <button className="btn" onClick={() => history.push('/')}>
        Return to todos list
      </button> */}
      <Button
        typeButton="button"
        onClick={() => history.push('/')}
        btnAddClass={styles.additionalBtnClass}
      >
        Return to todos list
      </Button>
    </>
  );
};
