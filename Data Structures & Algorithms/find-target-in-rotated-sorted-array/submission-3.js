class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // find the border of the rotation and search within the
    // half that will contain the target.
    // if left < midpoint < right, string is not rotated
    // if right < midpoint || left > midpoint, string is rotated
    search(nums, target) {
        let [left, right] = [0, nums.length - 1];

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] == target) return mid
            if (nums[left] == target) return left
            if (nums[left] < nums[right]) {
                if (nums[mid] > target) right = mid - 1
                else left = mid + 1
            } else {
                if ((nums[left] < target && target < nums[mid]) || 
                    (target < nums[mid] && nums[mid] < nums[right])) right = mid - 1;
                else left = mid + 1
            }
        }
        return -1;
    }
}
