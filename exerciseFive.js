// (a)
var value = "test 1";
console.log(myfunction(value));
function myfunction(value) {
    var num = value.length;
    return num;
}
// (b)
var value1 = "test 1";
console.log(myfunction1(value1));
function myfunction1(value1) {
    value1 = value1.replace(/\s/g, "");
    var num = value1.length;
    return num;
}
// (c)
var value3 = "test 1";
var choice = true;
myfunction2(choice, value3);
function myfunction2(choice, value3) {
    if (choice == false) {
        return console.log(myfunction(value));
    }
    else if (choice == true) {
        return console.log(myfunction1(value1));
    }
}
