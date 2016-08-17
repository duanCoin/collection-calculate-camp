'use strict';
let _ = require('lodash');
function one_add_next_multiply_three(collection){
  let result = [];
   _.chain(collection)
     .filter((item, index) =>{
       if(index < collection.length){
         result.push((item + collection[index + 1]) * 3);
       }
     })
    .value();

  return _.initial(result);
}
module.exports = one_add_next_multiply_three;


