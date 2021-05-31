const promiseObj=new Promise((resolve,reject)=>{

    var a=1000
    var b=20
    var c=500
    if (a>b){
        if (a<c){
            resolve(a)
    }
        else if(b>c){
            reject(b)

    }
        else{
                reject(c)
    }
    }else{
        if(a>c){
            resolve(a)
    }
        else if(b<c){
            reject(b)
    }
        else{
            reject(c)
    }
}
})
promiseObj.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log( error);
})




