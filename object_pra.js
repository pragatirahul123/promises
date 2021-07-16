const promiseObj=new Promise((resolve,reject)=>{
    const obj ={name:"mona",
            age:23,
            study:"IT",

}
    obj["age"]=21
    resolve(obj)
})
promiseObj.then(
    (message)=>{console.log(message)}
)
.catch((err) => {
    console.log(err)
})

