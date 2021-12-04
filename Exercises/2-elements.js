'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    if (array.includes(item)) array.splice(array.indexOf(item), 1);
  }
};

module.exports = { removeElements };
