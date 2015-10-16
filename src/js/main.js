/**
 * Created by grahamclapham on 16/10/15.
 */
var Data = require('./data_ticker');

var _init = function(){
    console.log("THE INIT HAS BEEN CALLED....");

    var _testArr = Data.arrayGenerator.createDataCell(11);

    console.log("THE TESTA AARAY = ", _testArr);
};


_init();
