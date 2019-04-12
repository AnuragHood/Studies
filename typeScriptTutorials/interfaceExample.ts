//Interface Example

interface Example {
    firstName: string
    lastName: string
    age: number
    address: string
    mobileNo: number[]
    printShow: () => string

}
class interfaceExample implements Example {
    firstName: string
    lastName: string
    age: number
    address: string
    mobileNo: number[]
    constructor(
        firstName: string,
        lastName: string,
        age: number,
        address: string,
        mobileNo: number[]) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
        this.mobileNo = mobileNo
    }

    printShow = (): string => {
        return "Class & interface example completed!!"
    }
    toString = (): string => {
        return `interfaceExample (firstName: ${this.firstName},
                                    lastName: ${this.lastName},age: ${this.age},
                                    address: ${this.address},
                                    mobileNo: ${this.mobileNo})`;
    }
}
var example = new interfaceExample("Anurag", "Pathak", 23, "Valencia", [7905384377, 9838321049, 9415500790]);
console.log("Inheritance example printing toString::" + example.toString())
console.log("calling method printShow:" + example.printShow())