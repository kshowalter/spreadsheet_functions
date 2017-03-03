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



};



module.exports = spreadsheet_functions;
