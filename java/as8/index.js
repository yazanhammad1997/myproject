
var customerName = 'bob';
var leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {

    leastFavoriteCustomer = 'new person';
}
console.log(upperCaseCustomerName());

setBestCustomer();
console.log(bestCustomer);

overwriteBestCustomer();
console.log(bestCustomer);

console.log(leastFavoriteCustomer);
changeLeastFavoriteCustomer()
console.log(leastFavoriteCustomer); 