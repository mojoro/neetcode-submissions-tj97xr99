class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const window = []
        const res = []
        let max = 0;
        for (let i = 0; i < k; i++) {
            max = Math.max(nums[i], max);
            window.push(nums[i])
        }

        res[0] = max;
        console.log(window)
        for (let i = k; i< nums.length; i++) {

            window.shift();
            window.push(nums[i]);
            console.log(window)
            res.push(Math.max(...window));
        }
        return res
    }
}
