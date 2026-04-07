class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    /*
    Algorithm seeks the highest possible multiple of distance between indices and minimum index value.
    x = min(nums[i], nums[j]) * (j-i)
     */
    maxArea(heights) {
        const results = [];
        let j = heights.length - 1;
        let i = 0;
        while(i < heights.length) {
            if(j == i) {
                i++;
                j = heights.length - 1;
            }
            if (i < j) results.push(Math.min(heights[i], heights[j]) * (j-i));
            if (i != heights.length - 1) j--;
        }
        return Math.max(...results);
    }
}
