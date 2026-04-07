class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {
  const res = [];
  nums.sort((a, b) => a - b); // sort ascending

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate 'i' values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // skip duplicate left values
        while (left < right && nums[left] === nums[left + 1]) left++;
        // skip duplicate right values
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}
}
