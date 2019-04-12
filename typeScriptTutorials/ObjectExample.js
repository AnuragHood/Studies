var address = /** @class */ (function () {
    function address(c, p, s) {
        this.city = c;
        this.pin = p;
        this.street = s;
    }
    address.prototype.toString = function () {
        return 'address(city:${this.city},pin:${this.pin},street:${this.street})';
    };
    return address;
}());
var address1 = function () {
    var obj = new address("GKP", 274207, "MMM street");
    return obj;
};
var exampleAge = function () {
    return 10 + 13;
};
var person = {
    fullname: "SN Pathak",
    age: exampleAge(),
    address: address1()
};
console.log(person);
