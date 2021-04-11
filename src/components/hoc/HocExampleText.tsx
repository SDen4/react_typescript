import React from 'react';
import HocExample from './HocExample';

const HocExampleText: React.FC = () => {
  return (
    <div>
      <p>
        !HOC! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aut
        aperiam dolore. Libero, esse? Ratione cum minus voluptatibus esse,
        vitae, distinctio facilis tenetur optio repudiandae odio reiciendis ipsa
        ea repellendus. !HOC!
      </p>
    </div>
  );
};

export default HocExample(HocExampleText);
