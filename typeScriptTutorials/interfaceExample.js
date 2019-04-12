//Interface Example
var interfaceExample = /** @class */ (function () {
    function interfaceExample(firstName, lastName, age, address, mobileNo) {
        var _this = this;
        this.printShow = function () {
            return "Class & interface example completed!!";
        };
        this.toString = function () {
            return "interfaceExample (firstName: " + _this.firstName + ",\n                                    lastName: " + _this.lastName + ",age: " + _this.age + ",\n                                    address: " + _this.address + ",\n                                    mobileNo: " + _this.mobileNo + ")";
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.mobileNo = mobileNo;
    }
    return interfaceExample;
}());
var example = new interfaceExample("Anurag", "Pathak", 23, "Valencia", [7905384377, 9838321049, 9415500790]);
console.log("Inheritance example printing toString::" + example.toString());
console.log("calling method printShow:" + example.printShow());
//# sourceMappingURL=interfaceExample.js.map