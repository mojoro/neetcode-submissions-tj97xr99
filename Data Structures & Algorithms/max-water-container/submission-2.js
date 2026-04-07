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
        let j = heights.length - 1;
        let i = 0;
        let maxArea = 0;
        while(i < j) {
            const currentArea = Math.min(heights[i], heights[j]) * (j-i);
            maxArea = currentArea > maxArea ? currentArea : maxArea;
            if (heights[i] < heights[j]) i++
            else j--;
        }
        return maxArea;
    }
}
