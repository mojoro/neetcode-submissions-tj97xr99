class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0,
        right = 1,
        maxLength = 0;
        const sSet = new Set();
        if (s.length <= 1) return s.length;
        while(right < s.length) {
            if (Array.from(sSet.keys()).length == 0) sSet.add(s[left]);
            if (!sSet.has(s[right])) {
                sSet.add(s[right]);
                right++
            } else {
                maxLength = Math.max(right-left, maxLength);
                sSet.clear();
                left++ 
                right = left+1;
            }
        }
        return(Math.max(right-left, maxLength))
        
    }
}
