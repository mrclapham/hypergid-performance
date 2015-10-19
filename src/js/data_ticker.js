/**
 * Created by grahamclapham on 16/10/15.
 */
var staticData = require('./staticData');

var data = staticData.data;
var countryMap = staticData.countryMap;

var _arrayLength = 60;
var _returnArray = [];
//--- API on Static data

var _arrayGeneratorPrivate = {
    _privateFunction: function _privateFunction(){
        return "HELLO WORLD";
    }

}

var arrayGeneratorProto = {
        _array: null,
    _generateEmptyArr:function _generateArr(){
            if(!this._array || this._array.length != this.getArrayLength()) {
                this._array = [];
                for (var i = 0; i < this.getArrayLength(); i++) {
                    this._array.push(null);
                }
                return this._array;
            }
        },
        _arrayLength: 10,
        setArrayLength: function setArrayLength(val){
        if(isNaN(val)) return;
            arrayGenerator.arrayLength = val
        },
        getArrayLength: function getArrayLength(){
            return this._arrayLength;
        },
    _generateRandomNumberArray: function _generateRandomNumberArray(length, sampleLength){
        if( isNaN(parseInt(length)) || isNaN(parseInt(sampleLength)) ) {
            throw new Error("_generateRandomNumberArray requires a length shorter than the sampleLength.")
        }

        function addRandomNumber(arr){
            var _arr = arr || [];
            var _rand = Math.round( Math.random() * sampleLength );

            if(arr.length < length ){
                if(_arr.indexOf(_rand != -1)){
                    _arr.push(_rand);
                }
                addRandomNumber(_arr);
            }

            return _arr
        }
        return addRandomNumber([]);
    },
    getRandomArray: function getRandomArray(){
        if(this._arrayLength > data.NAME.length) throw new Error("Your Array length exceeds the data size.")
        var _usedNumbers = [];

        return this._generateEmptyArr(this.getArrayLength())
            .map(function(d,i){
                return this.createDataCell(i);
            }.bind(this));
    },
    createDataCell:function createDataCell(i){
        return {
            NAME: data.NAME[i],
            TICKER: data.TICKER[i],
            COUNTRY: data.COUNTRY[i],
            ICB: data.ICB[i],
            INDUS: data.INDUS[i],
            SUP_SEC: data.SUP_SEC[i],
            SEC: data.SEC[i],
            SUB_SEC: data.SUB_SEC[i],
            Date: new Date(),
            Time: Date.now(),
            Open: data.Open[i],
            Close: data.Close[i],
            PreviousClose: data.PreviousClose[i],
            PreviousCloseDate: new Date(Date.now() - 1000*60*60*24),
            High: data.High[i],
            Low: data.Low[i],
            Last: data.Last[i],
            Change: data.Change[i],
            PercentChange: data.PercentChange[i],
            Volume: Math.floor(data.Volume[i]),
            BidQuantity: data.BidQuantity[i],
            Bid: data.Bid[i],
            Spread: data.Spread[i],
            Ask: data.Ask[i],
            AskQuantity: data.AskQuantity[i],
            Today:[0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0],
            flash: 0,
            flashColor: 'green',
            countryCode: countryMap[data.COUNTRY[i]]
        }
    },
    createDataArray:function createDataArray(val) {
        if (isNaN(val)) return;
        return [1,2,3,4,5];
    }
};

var arrayGenerator = function () {
    return Object.create(arrayGeneratorProto);
};




var count = data.NAME.length;
var i = 0;
var stocks = [];
window.CC = {};
for (i = 0; i < count; i++) {
    CC[data.COUNTRY[i]] = true;
    stocks[i] = {
        NAME: data.NAME[i],
        TICKER: data.TICKER[i],
        COUNTRY: data.COUNTRY[i],
        ICB: data.ICB[i],
        INDUS: data.INDUS[i],
        SUP_SEC: data.SUP_SEC[i],
        SEC: data.SEC[i],
        SUB_SEC: data.SUB_SEC[i],
        Date: new Date(),
        Time: Date.now(),
        Open: data.Open[i],
        Close: data.Close[i],
        PreviousClose: data.PreviousClose[i],
        PreviousCloseDate: new Date(Date.now() - 1000*60*60*24),
        High: data.High[i],
        Low: data.Low[i],
        Last: data.Last[i],
        Change: data.Change[i],
        PercentChange: data.PercentChange[i],
        Volume: Math.floor(data.Volume[i]),
        BidQuantity: data.BidQuantity[i],
        Bid: data.Bid[i],
        Spread: data.Spread[i],
        Ask: data.Ask[i],
        AskQuantity: data.AskQuantity[i],
        Today:[0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0],
        flash: 0,
        flashColor: 'green',
        countryCode: countryMap[data.COUNTRY[i]]
    }
}

stocks.sort(function(a,b){
    return a.TICKER < b.TICKER ? -1 : 1;
});

var seed = 1;

var rnd = function() {
    var x = Math.sin(seed++)*10000;
    var r = x - Math.floor(x);
    return r;
};

//var shuffle = function(array) {
//  var currentIndex = array.length, temporaryValue, randomIndex ;
//
//  // While there remain elements to shuffle...
//  while (0 !== currentIndex) {
//
//    // Pick a remaining element...
//    randomIndex = Math.floor(Math.random() * currentIndex);
//    currentIndex -= 1;
//
//    // And swap it with the current element.
//    temporaryValue = array[currentIndex];
//    array[currentIndex] = array[randomIndex];
//    array[randomIndex] = temporaryValue;
//  }
//
//  return array;
//};


var shuffle = function(arr){
    //var scrambleRecursive = function(arr, count){
    //    count++;
    //    var _p1 = arr.splice(Math.floor(Math.random() * arr.length), 1)
    //    var _arr = _p1.concat(arr.reverse());
    //    return count <= arr.length ? scrambleRecursive(_arr, count) : _arr;
    //};
    //return 	scrambleRecursive(arr, 0)
    getRandomSelection(arr);
};

var getRandomSelection = function(arr, length){
    var _length = length || 100
    var _arr = [];
    for(var i=0; i<length; i++){
        _arr.push( arr[Math.round(Math.random() * arr.length)] );
    }
    return _arr
}


var toPickFrom = stocks.slice(0);
shuffle(toPickFrom);

var randomizeTicks = function() {
    if (toPickFrom.length < 200) {
        toPickFrom = stocks.slice(0);
        shuffle(toPickFrom);
    }
    for (i = 0; i < 200; i++) {
        var each = toPickFrom.shift();
        randomizeTick(each);
    }
};

var randomizeTick = function(stock) {
    stock.Bid = (stock.Bid * 0.99) + (stock.Bid * 0.017 * rnd())
    stock.Spread = rnd()/10;
    stock.Ask = stock.Bid + stock.Spread;
    //trades don't always happen
    if (stock.Spread < 0.03) {
        stock.BidQuantity = Math.floor(12 * rnd()) * 100;
        stock.AskQuantity = Math.floor(12 * rnd()) * 100;
        stock.Volume = Math.floor(stock.Volume + stock.BidQuantity);
        stock.Change = stock.Bid - stock.Last
        stock.PercentChange = (stock.Change)/stock.Last*100;
        stock.Today.push(5 + Math.floor(90 * rnd()));
        if (stock.Today.length === 17) {
            stock.Today.shift();
        }
        stock.Last = stock.Bid;
        stock.flashColor = stock.Change > 0 ? 'green' : 'red';
        stock.High = Math.max(stock.High, stock.Last);
        stock.Low = Math.min(stock.Low, stock.Last);
        stock.Time = Date.now();

        if (stock.Time - stock.lastViewedTime < 100) {
            stock.flash = 40;
        }
    }
}

module.exports = {
    arrayGenerator: arrayGenerator,
    stocks: stocks,
    randomize: randomizeTicks
};


