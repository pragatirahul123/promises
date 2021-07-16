let readlineSync = require('readline-sync')
let num = readlineSync.question("enter a number  : ")

var a = 1
var b = 0
while(a<num){
    if(num%a==0){
        b=b+2
    }
    a++
}
if(b==2){
    console.log("prime number")
}
else{
    console.log("Not prime")
}