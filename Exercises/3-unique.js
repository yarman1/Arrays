'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const clearArray = [];
  array.forEach((item) => {
    if (!clearArray.includes(item)) clearArray.push(item);
  });
  return clearArray;
};

module.exports = { unique };
