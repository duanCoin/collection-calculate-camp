'use strict';
let _ = require('lodash');
var is_exist_element = function(collection,element){
  return  _(collection)
    .filter((item, index, items)=>index % 2 === 0)
    .includes(element);
};
module.exports = is_exist_element;
