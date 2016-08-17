'use strict';
let _ = require('lodash');
var even_asc_odd_desc = function (collection) {
  let evenArray = _.chain(collection)
    .remove(n => n % 2 === 0)
    .sortBy()
    .value();

  let oddArray = _.chain(collection)
    .sortBy()
    .reverse()
    .value();

  return _.concat(evenArray, oddArray);
};
module.exports = even_asc_odd_desc;
