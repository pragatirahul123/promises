let vowels ="JavaLooapi"
// let count = 0
let arr=[]
let arr1=[]


for(i=0;i<vowels.length;i++){  
    if (vowels[i]=="a" || vowels[i] == "e" || vowels[i]=="i" ||vowels[i]=="o" || vowels[i]=="u"){
        // count++
        arr.push(vowels[i])
    
    }
    else {
        arr1.push(vowels[i])
    }
}

let b=[]
b.push(arr)
b.push(arr1)
console.log(b)

for(k=0;k<b.length;k++){
    for(var j=0;j<b[k].length;j++){
        console.log(b[k][j])
    }
}

