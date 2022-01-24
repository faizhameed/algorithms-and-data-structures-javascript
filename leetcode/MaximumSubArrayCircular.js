function maxSubArrCircular(nums) {
  const max = Math.max;
  const min = Math.min;
  let maxSum, curMax, minSum, curMin, totalSum;
  curMax = curMin = maxSum = minSum = totalSum = nums[0];
  /* the maxSubArray circular will be equal to max of subArray sum linearly
  and the totalSum - minSubArrray so we calculate both and take the max of this
  but if all elements is less than 0 , then we simple take the largest element of the array. 
  which will still be max sum subarray */
  for (let i = 1; i < nums.length; i++) {
    const a = nums[i];
    curMax = max(a + curMax, a);
    maxSum = max(curMax, maxSum);
    curMin = min(a + curMin, a);
    minSum = min(curMin, minSum);
    totalSum += a;
  }

  /* Can also be written as
    const n = nums.length
    let tempMinSum =nums[0],tempMaxSum=nums[0],maxSubSum=nums[0],minSubSum=nums[0],totalSum =nums[0]
   
    for(let i=1;i<nums.length;i++){
        const curr =nums[i]
        tempMinSum =curr+ Math.min(tempMinSum,0)
        minSubSum = Math.min(tempMinSum,minSubSum)
        tempMaxSum = curr + Math.max(0,tempMaxSum)
        maxSubSum = Math.max(tempMaxSum,maxSubSum)
        totalSum+=curr
    }
    return maxSubSum>0?Math.max(totalSum-minSubSum,maxSubSum):maxSubSum
  
  */
  //check if all elements less than 0, if yes the we simply return maxSum
  return maxSum > 0 ? max(maxSum, totalSum - minSum) : maxSum;
}

const nums = [5, -3, 5];

console.log(maxSubArrCircular(nums));
