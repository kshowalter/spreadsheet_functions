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
  }



};



module.exports = spreadsheet_functions;
