class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedArray = nums.sort((a, b) => a - b);
        const buildingArray = [];
        const longestArray = [];
        for (let i = 0; i < sortedArray.length; i++){
            if (sortedArray[i - 1] == sortedArray[i]) continue;
            if (buildingArray.length == 0) {
                buildingArray.push(sortedArray[i]);
                continue;
            }
            if(sortedArray[i-1] == sortedArray[i]-1) buildingArray.push(sortedArray[i]);
            else {
                if (longestArray.length < buildingArray.length){
                    longestArray.length = 0;
                    longestArray.push(...buildingArray);
                }
                buildingArray.length = 0;
                buildingArray.push(sortedArray[i]);
            }
        }
        if (longestArray.length < buildingArray.length) {
            longestArray.length = 0;
            longestArray.push(...buildingArray);
        }
        return longestArray.length;
    }
}
