class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0,
        maxLength = 0
        const sSet = new Set();
        for (let right = 0; right < s.length; right++){
            while(sSet.has(s[right])) {
                sSet.delete(s[left])
                left++;
            }
            sSet.add(s[right]);
            maxLength = Math.max(right - left + 1, maxLength)
        }
        return maxLength;
    }
}
