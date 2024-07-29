// CALL BACK FUNCTION

// function callBack(){
//     console.log("Gokul");
// }
// function callFunction(){
//     console.log("Raj");
// }
// callBack();
// callFunction();

// Passing Function Argument

// function callBack(callFunction){
//     console.log("Hi");
//     callFunction();
//     console.log("Gokul");
// }

// callBack(
//     function (){
//     console.log("Raj");
// }
// );

// Passing Function Name as Argument

// function callBack(callFunction){
//     console.log("Hi");
//     callFunction();
//     console.log("Gokul");
// }

// function callFunction(){
//     console.log("Raj");
// }
// callBack(callFunction);

// Passing Function Expression as Argument

function callBack(callFunction){
    console.log("Hi");
    callFunction();
    console.log("Gokul");
}

let callFunction = function (){
    console.log("Raj");
}
callBack(callFunction);

