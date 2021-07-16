var list = ["a", "b","s","a","s","a","p"]
var arr = []
var index=0
for(index in list){
    var count = 0;
    for(j in list){
        if(list[index]==list[j]){
            count++
        }
    }
    arr.push([list[index],count])       
}
console.log(arr)
    
    