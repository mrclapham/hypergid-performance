/**
 * Created by grahamclapham on 16/10/15.
 */

var staticData = require('../../src/js/staticData');
var dataTicker = require('../../src/js/data_ticker');

describe("just to see if the Karma runner will run", function(){
    it("Will actually run", function(){
        expect(true).toBe(true);
    })
});

describe("Expect the data to be available to use", function(){

    it("The staticData will exist", function(){
        expect(staticData).toBe.ok;
    });

    it("staticData.data.NAME.length will equal 921", function(){
        expect(staticData.data.NAME.length).toEqual(921);
    });

    it("staticData.data.NAME[0] == 'Exxon Mobil Corp.' ", function(){
        expect(staticData.data.NAME[0]).toBe("Exxon Mobil Corp.");
    });

    it("staticData.data.NAME[1] == 'International Business Machines Corp.' ", function(){
        expect(staticData.data.NAME[1]).toBe("International Business Machines Corp.");
    });

});


describe("arrayGenerator.createDataCell.", function(){
    var _cell, _arrayCellGen;
    beforeEach(function(){
        _arrayCellGen = dataTicker.arrayGenerator();
        _cell = _arrayCellGen.createDataCell(0);
    });
    it("arrayGenerator.createDataCell returns an Object with expected properties ", function(){
        expect(_cell.NAME).toBe("Exxon Mobil Corp.");
        expect(_cell.TICKER).toBe("XOM");
        expect(_cell.COUNTRY).toBe("United States");
    });
});

describe("arrayGenerator.createDataArray returns an Array with the correct properties", function(){
    var _array, _arrayGen;
    beforeEach(function(){
        _arrayGen = dataTicker.arrayGenerator();
        _array = _arrayGen.createDataArray(10);
    });
    it("arrayGenerator.createDataArray returns an Array with the correct properties", function(){
        expect(_arrayGen).not.toBe(null);
        _arrayGen.setArrayLength(10);
        expect(_arrayGen.getArrayLength()).toEqual(10);
        expect(_arrayGen.getRandomArray().length).toEqual(10);
    })
});