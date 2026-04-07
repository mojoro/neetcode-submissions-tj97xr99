class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deque = [];
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            while (deque.length && nums[deque[deque.length-1]] < nums[i]) deque.pop();
            deque.push(i);
            if (deque.length && i >= k && nums[deque[0]] === nums[i - k]) {
                deque.shift()
            }
            if (i>=k-1) res.push(nums[deque[0]])
            console.log(deque)
        }
        return res
    }
}
