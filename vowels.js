const promise=new Promise((resolve,reject)=>{
    var string="pragati"
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count=0
    let i=0
    for( i=i ; i<vowels.length;i++){
        if(vowels.indexOf(string[i])){
            count++
        }
    }
    resolve(count)

})

promise.then((result) => {
    console.log(result)
})




 
