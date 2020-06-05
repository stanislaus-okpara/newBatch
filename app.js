// let firstName = 'john';
// let lastName = 'smith';
// const yearOfBirth = 1990;

// function calcAge (year) {
//     return 2018 - year;
// }



// console.log('this is' + firstName + ' ' + lastName + '. He was born in' + yearOfBirth + '.Today, he is ' + calcAge(2002) + 'years old.')


//  const years = [1990, 1958, 1994, 1995];
// let age = years.map


var years = [1990, 1997, 1996, 1960, 1987];

function arraycalc(arr, can){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(can(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016-el;
}
function isfullAge (limit, el){
    return el >= limit;
}
var ages = arraycalc(years,calculateAge);
var fullJapan = arraycalc(ages, isfullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



















