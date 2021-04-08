import React from 'react';

enum Membership {
  Simple,
  Standart,
  Premium,
}

export const Enum: React.FC = () => {
  const membership = Membership.Standart;
  const membershipReverse = Membership[2];
  console.log(membership);
  console.log(membershipReverse);

  return <h1>Enum</h1>;
};
