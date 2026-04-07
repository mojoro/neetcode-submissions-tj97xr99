class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    // it's like the last problem, except the target is the opposite of whatever number we are iterating over
    threeSum(nums) {
    const result = new Map();
    nums.sort((a, b) => a - b);
    let [j, k] = [0, nums.length - 1];
    let kDescended = false;
    while (j != k) {
        for (let i = 0; i < nums.length; i++) {
            if (i == j || i == k) continue;
            const target = (nums[j] + nums[k]) * -1;
            if (nums[i] == target){
                const sortedTriplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                if (!result.has(`${sortedTriplet}`))
                    result.set(`${sortedTriplet}`, sortedTriplet);
                }
            }
        if (k != nums.length-1 && k == j+1){
            kDescended = true;
            k = nums.length - 1;
        } else if (kDescended){
            j++;
            k=nums.length -1;
            kDescended = false;
        }
        else k--;
    }
        
    return Array.from(result.values());
    }
}
