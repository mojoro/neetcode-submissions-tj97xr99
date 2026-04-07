class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    /*get where the filling starts, then subtract the amounts away from the theoretical maximum amount of water that would be held from the maximum. Maybe not
    
    Additive approach, increment or decrement from smaller column, then add the difference between the previous value and the current value. If columns are equal, 
    then do subtractive approach? theoretical maximum added to total area, then decrement a side and subtract index values from total
    */
    trap(height) {
        let [left, right] = [0, height.length - 1];
        let totalArea = 0;
        let [rightFillStart, leftFillStart] = [false, false];
        let [prevLeftBound, prevRightBound] = [0,0]
        let basinFormed = false;
        while (left < right) {
            if (height[right] > height[right-1] && !rightFillStart) {
                console.log(right)
                rightFillStart = true;
                prevRightBound = height[right]
            }
            if (height[left] > height[left+1] && !leftFillStart) {
                console.log(left)
                leftFillStart = true;
                prevLeftBound = height[left]
            }
            if(!rightFillStart) right--;
            if(!leftFillStart) left++;
            if(rightFillStart && leftFillStart) {
                if(height[left] < height[right]){
                    prevLeftBound = Math.max(height[left], prevLeftBound)
                    totalArea += Math.max((prevLeftBound - height[left]), 0);
                    left++;
                } else if (height[left] >= height[right]){
                    prevRightBound = Math.max(height[right], prevRightBound)
                    totalArea += Math.max((prevRightBound - height[right]), 0);
                    right--;
                }
            }
        }
        return totalArea
    }
}
