class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const keys = {};
        for (let i = 0; i < nums.length; i++) {
            if (keys[nums[i]]) return true;
            else keys[nums[i]] = 1;
        }
        return false;
    }
}
