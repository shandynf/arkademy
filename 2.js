
var getDateArray = function(start, end) {
    var arr = new Array(); 
    var dt = new Date(start); // create date object
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

function betweenDays (startDate, endDate) {
    var startDate = new Date('2019-11-01');
    var endDate = new Date('2019-11-05');
    var dateArr = getDateArray(startDate, endDate); // calling function getDateArray
    var dates = '';
    for (var i = 0; i < dateArr.length; i++) {
        const month = dateArr[i].getMonth() + 1; // return the month (0-11)
        const day = dateArr[i].getDate(); // return the day of the month (1-31)
        const year = dateArr[i].getFullYear(); // return the year (4 digits)
        dates = dates + year + '-' + month + '-' + day + ', ';
    }
    return dates;
}

betweenDays('2019-11-01','2019-11-05'); // calling betweenDays