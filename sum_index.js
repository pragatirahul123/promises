// function sum(arr,target){
//     var i=0
//     var empty=[]
//     for(i=0;i<arr.length;i++){
//         if(arr[i]+arr[i]==target)
//             empty.push(i)
//         }
//         console.log(empty)
//     }

// sum([3,3],6)

// ##########################################################################################

const promiseObj=new Promise((resolve,reject)=>{
    function sum(arr,target){
        var i=0
        var empty=[]
        for(i=0;i<arr.length;i++){
            if(arr[i]+arr[i]==target)
                empty.push(i)
            }
            resolve(empty)
        }
    
    
    sum([3,3],6)
    })

promiseObj.then(
    (message)=>{console.log(message)}
)
.catch((err) => {
    console.log(err)
})

// **************************************************************************************

// var twoSum = function(nums, target) {
//     var i=0
//     var empty=[]
//     for(i=0;i<nums.length;i++){
//         if(nums[i]+nums[i]==target)
//             empty.push(i)
//         }
//         console.log(empty)
//     }

// twoSum([3,3],6)


    

        
