class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    // starting from height left, add it and its index to the stack and seek to extend the rectangle to the right. if height[i+1] < height[i], calculate height[i]'s area
    // with height[i] * the distance it was extended (number of indices it lasted before getting popped)
    // and pop it from the stack. Then add height[i+1] to the stack with its starting index equal to the index of height[i]
    // after iterating through the heights, iterate through the remaining elements in the stack with the same logic.
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];
        let [height, index] = [0,0];
        for (let i = 0; i < heights.length; i++) {
            index = i;
            while (stack.length>0 && stack[stack.length-1][0] >= heights[i]){
                [height, index] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
            }
            stack.push([heights[i], index])
        }
        while(stack.length > 0) {
            [height, index] = stack.pop();
            maxArea = Math.max(maxArea = Math.max(maxArea, height * (heights.length - index)))
        }
        return maxArea;
    }
}
