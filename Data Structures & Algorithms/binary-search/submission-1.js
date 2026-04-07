class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    search(nums, target) {
        let [left, right] = [0, nums.length];
        let midPoint = Math.floor((left+right)/2);
        while (nums[midPoint] != target) {
            if (right - left == 1 && nums[midPoint] != target) return -1 
            if (nums[midPoint] > target) {
                right = midPoint
                midPoint = Math.floor((left+right)/2);
            } else if (nums[midPoint] < target) {
                left = midPoint;
                midPoint = Math.floor((left+right)/2);
            }
        }
        return midPoint
    }
}
