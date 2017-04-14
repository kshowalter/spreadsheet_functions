var spreadsheet_functions = {
  if: function(test, a, b){
    if(test){
      return a;
    } else {
      return b;
    }
  },
  or: function(){
    for( var i in arguments ){
      if( arguments[i] ){
        return true;
      }
    }
    return false;
  },
  and: function(){
    for( var i in arguments ){
      if( ! arguments[i] ){
        return false;
      }
    }
    return true;
  },
  not: function(value){
    return !value;
  },
  max: function(){
    var max = 0;
    for( var i in arguments ){
      if( arguments[i] > max ){
        max = arguments[i];
      }
    }
    return max;
  },
  min: function(){
    var min = arguments[0];
    for( var i in arguments ){
      if( arguments[i] < min ){
        min = arguments[i];
      }
    }
    return min;
  },
  index: function(array, index){
    return array[index];
  },
  lookup: function(search_key, table, col, reverse, allow_exact){
    if( col === undefined ){ col = 1; }
    if( reverse === undefined ){ reverse = false; }
    if( allow_exact === undefined ){ allow_exact = false; }
    var key_last_match;
    if( isNaN(search_key) ){ // search_key is string, not a number
      if( table[search_key] !== undefined ){
        key_last_match = search_key;
      } else {
        return false;
      }
    } else { // else is number
      var search_value = Number(search_key);
      key_last_match = Object.keys(table)[0];
      for( var key in table){
        var key_number = Number(key);
        if( (key_number === search_value) && (reverse == allow_exact) ){ // Exact match
        //if( key_number === search_value ){ // Exact match
          key_last_match = key;
          break;
        } else if( search_value > key_number && !reverse ){ // Possible match, but we might find a closer one.
          key_last_match = key;
        } else if( search_value < key_number && reverse ){ // Possible match, but we might find a closer one.
          key_last_match = key;
          break;
        }
      }
    }
    var return_value;
    if( col === 0 ){
      return_value = key_last_match;
    } else {
      return_value = table[key_last_match][col-1];
    }
    if( ! isNaN(return_value) ){
      return_value = Number(return_value);
    }
    return return_value;
  }

};



module.exports = spreadsheet_functions;
