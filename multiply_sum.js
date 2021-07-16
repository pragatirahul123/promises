let readlineSync=require('readline-sync');
let num1=readlineSync.question("enter a number : ");
var arr=[]
for(var i=0;i<num1.length;i++){
    for(var j=1;j<=num1;j++){
        var mul=num1*j
            arr.push(mul)

        }
}
console.log(arr)






    
