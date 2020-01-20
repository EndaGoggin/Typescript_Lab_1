// (a)
let value: string = "test 1"
console.log(myfunction(value));

function myfunction(value: string): number {
    let num: number = value.length;
    return num;
 }

 // (b)

let value1: string = "test 1"
console.log(myfunction1(value1));

function myfunction1(value1: string): number {
    value1 = value1.replace(/\s/g, "");
    let num: number = value1.length;
    return num;
 }

 // (c)
let value3: string = "test 1";
let choice: boolean = true;
myfunction2(choice, value3);

function myfunction2(choice: boolean, value3: string){
    if(choice == false){
        return console.log(myfunction(value));
    }
    else if (choice == true){
        return console.log(myfunction1(value1));
    }
 }