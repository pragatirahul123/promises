var dict1 ={a:100 , b:200, c:400}
var dict2={a:300 , b:500,d:500}

var dict3={}

// output ={a:400,b:700,c:400,d:500}
// var sum=0
for (var i in dict1){
    for (var j in dict2){
        if (dict1[j] + dict2[j]){
            dict3.push(dict2[j])

        
    }
    console.log(dict3)

    
    }
}
