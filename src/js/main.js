/**
 * Created by grahamclapham on 16/10/15.
 */
var dataTicker = require('./data_ticker');
var _testArr, _arrayGen, _array;
var _init = function(){
    var _testArr = dataTicker.arrayGenerator();
    _arrayGen = dataTicker.arrayGenerator();
    _array = _arrayGen._generateRandomNumberArray(10, 2000);
    console.log(_array);
};

_init();
