function getSecondLargest(nums) {
    // Complete the function
    var max =0
    var secondmax =0
    for(var i=0;i<nums.length;i++){
        if (nums[i]>max){
            max = nums[i]
        }
        for(var j=0;j<nums.length;j++){
          if (max>nums[j] && secondmax<nums[j]){
            secondmax = nums[j]
          }
        }
    }
    
return(secondmax); 
}
console.log(getSecondLargest([2,4,7,8,1,9,66 ]))