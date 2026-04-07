class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    // If the sum of all values except the greatest value is greater than k, shrink window from left and update values
    characterReplacement(s, k) {
        let left = 0;
        let maxLength = 0;
        let highestValueLetter = s[0];
        const map = new Map();
        map.set(s[left], 1);
        for (let right = 0; right < s.length; right++) {
            if (right != 0) {
                if (map.has(s[right])) map.set(s[right], map.get(s[right]) + 1);
                else map.set(s[right], 1);
            }
            highestValueLetter = map.get(highestValueLetter) > map.get(s[right]) ? highestValueLetter : s[right];
            while (right - left + 1 - map.get(highestValueLetter) > k) {
                maxLength = Math.max(maxLength, right - left);
                map.set(s[left], map.get(s[left]) - 1);
                highestValueLetter = map.get(highestValueLetter) > map.get(s[right]) ? highestValueLetter : s[right];
                left++;
            }
        }
        return Math.max(maxLength, s.length - left);
        }
}
