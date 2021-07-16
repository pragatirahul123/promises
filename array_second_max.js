var array=[2,4,3,6,8,44]
i=0
var max=0
while(i<array.length){
    if (array[i]>max){
        max=array[i]
    }
    i++
}
console.log(max)


var j=0
var second_max=0
while(j<array.length){
    if ( max > array[j]  &&  second_max < array[j]){
        second_max=array[j]


    }
    j++
}
console.log(second_max)


