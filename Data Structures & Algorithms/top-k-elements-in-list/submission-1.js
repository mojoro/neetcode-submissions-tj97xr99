class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        const sortedKeys = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
        const mostFrequentNumbers = [];
        let i = 0;
        while (i < k) {
            mostFrequentNumbers.push(sortedKeys[i++][0]);
        }

        return mostFrequentNumbers;
    }
}
