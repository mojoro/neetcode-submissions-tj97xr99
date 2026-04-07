class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums, target) {
    //     for (let i = 0; i < nums.length; i++){
    //         for (let j = i+1; j < nums.length; j++){
    //             if (nums[i]+nums[j] == target) return [i,j]
    //         }
    //     }
    //     return [];
    // }
    twoSum(nums, target) {
        const numMap = new Map(nums.map((value, index) => [value, index]));
        for (let i = 0; i < nums.length; i++){
            if(numMap.get(target - nums[i]) && i != numMap.get(target - nums[i])) {
                return [i, numMap.get(target - nums[i])]
            }
        }
    }
}
