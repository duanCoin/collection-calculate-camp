'use strict';
let _ = require('lodash');

var single_element = function (collection) {
  let evenArray = _.chain(collection)
    .filter((item, index, items) => (index + 1) % 2 === 0)
    .value();

 return _.chain(evenArray)
    .xor()
    .filter((item, index, items) => item !== evenArray[index])
    .value();
};

module.exports = single_element;
