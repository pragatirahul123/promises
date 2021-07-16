var dup=[1,3,4,4,8,9,1,6,9]
var arr  =[]
for (var i=0;i<dup.length;i++){
        if(!(arr.includes(dup[i]))){
            arr.push((dup[i]))

    }
}

console.log(arr)