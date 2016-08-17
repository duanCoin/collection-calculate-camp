'use strict';
let _ = require('lodash');
function rank_by_two_large_one_small(collection) {
  return _.chain(collection)
    .sortBy()
    .chunk(3)
    .map(arr => {
      if (arr.length > 2) {
        return [arr[1], arr[2], arr[0]]
      }
      return arr;
    })
    .flatten(collection, true)
    .value();
}
module.exports = rank_by_two_large_one_small;
