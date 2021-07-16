// function outer1(){
//     console.log("Hii")
//     outer2()


// }
// function outer2(){
//     console.log("Hello")
    

// }
// outer1()

// #####################################################################################################

// function outer1(){
//     setTimeout(function(){
//         console.log("Hello")
//     },2000)
//     outer2()


// }
// function outer2(){
//     console.log("Hiiii")
// }
// outer1()

// #############################################################################################################

const promiseObj=new Promise((resolve,reject)=>{
    function outer1(){
        setTimeout(function(){
            console.log("Hello")
        },1000)
        outer2()
    }
    function outer2(){
        console.log("Hiii")
    }
    outer1()
})
promiseObj.then(
    (message)=>{console.log(message)}
)
.catch((err) => {
    console.log(err)
})


// ####################################################################################################3