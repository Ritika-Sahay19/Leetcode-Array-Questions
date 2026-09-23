/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let  n= nums.length;
    let ans =new Array(n).fill(1);
    let sufix =1;
    for(let i=1; i < n; i++){
        ans[i]= nums[i-1]*ans[i-1];
    }

    for(let i=n-2; i>=0; i--){
        sufix= sufix* nums[i+1];
        ans[i]= ans[i]*sufix;
    }

    return ans;

};
Time Complexity - O(n)
Space Complexity- O(n)
