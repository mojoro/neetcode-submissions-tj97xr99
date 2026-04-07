class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length == 1) return nums[0];
        let [left, right] = [0, nums.length - 1];
        if (nums[left] < nums[right]) return nums[0];
        while (left <= right) {
            const midPoint = Math.floor((left + right) / 2);
            if (nums[midPoint] < nums[left]) {
                right = midPoint;
            } else if (nums[midPoint] > nums[right]) {
                if (left == right - 1) return nums[right];
                left = midPoint;
            }
        }
    }
}
