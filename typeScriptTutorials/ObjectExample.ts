class address {
    city: string
    pin: number
    street: string
    constructor(c: string, p: number, s: string) {
        this.city = c;
        this.pin = p;
        this.street = s;
    }
   
    toString() {
        return 'address(city:${this.city},pin:${this.pin},street:${this.street})'
    }
}
var address1 =  () => {
    var obj = new address("GKP", 274207, "MMM street");
    return obj;
}

var exampleAge =  () => {
    return 10 + 13;
}

var person = {
    fullname: "SN Pathak",
    age: exampleAge(),
    address: address1()
}
console.log(person);