//General Function
function test_function(...nums: number[]) {
    var i;
    var sum: number = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        console.log(nums[i]);
    }
    console.log("Result:=" + sum);

}
test_function(10, 10, 10);

//JavaScript Function
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);

//Lambda Expression
var lamdaExample = (x: number) => {
    x = x + 100;
    console.log("Lambda Expression value::" + x)
}
lamdaExample(10)

//Method overloading
//function disp(s1: string): void;
//function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log("Method overloading-->>X:" + x);
    console.log("Method overloading-->>Y:" + y);
}
disp("xyz")
disp(1, "xyz");

//Array Examples
var exampleArray: number[] = new Array()
var exampleArray2: string[] = ["one", "two", "three"]
exampleArray = [2, 5]
var alphaNumeric = exampleArray2.concat(exampleArray2);
console.log("ArrayExampleConcatenate :" + alphaNumeric.toString())

if (!exampleArray.every(isBigEnough)) {
    console.log("EveryExample test value Result:" + exampleArray.every(isBigEnough))
}
function isBigEnough(element, index, array) {
    return (element >= 10);
}

//Tuple Example
var tupleEx = ["RAM", "RAMAYANA", 123]
console.log(tupleEx.toLocaleString())

//Union Example 
function typeUnion(name: string | any[]) {
    var i: any;
    if (typeof name == "string") {
        console.log("I am string data type:" + name);
    }
    else {
        for (i in name) {
            console.log("printing array values:" + name[i]);
        }
    }

}
typeUnion("anurag")
typeUnion(["mohan", "rakesh", 123])


