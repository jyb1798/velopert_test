import React from "react";

const FilterTest = () => {
  const numbers = [1, 2, 3, 4, 5];
  const biggerThanThree = numbers.filter((number) => number !== 3);

  return <>{biggerThanThree}</>;
};

export default FilterTest;
