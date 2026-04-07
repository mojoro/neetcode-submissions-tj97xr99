class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const numMap = new Map();
        for (let i = 0; i < nums.length; i++){
            const distanceToZero = target - nums[i];
            if(numMap.has(distanceToZero)) {
                return [numMap.get(distanceToZero), i];
            }
            numMap.set(nums[i], i);
        }
        return [];
    }
}
