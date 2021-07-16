const promise = new Promise((resolve,reject)=>{
    var string="evanjaline"
    var i=0
    var arr=[]

    var count=0
    for(i in string){
        if(!(arr.includes(string[i]))){
            arr.push(string[i])
            count++;

        }
     }

    resolve(count)
})
    

promise.then((result)=>{
    console.log("character",result)
})
.catch((err) => {
    console.log(err)
})





// ##################################################################################

             
            
        

