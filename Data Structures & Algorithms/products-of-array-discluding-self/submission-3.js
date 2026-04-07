class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let [i, j, product] = [0, 0, 1];
        const result = [];

        while (i < nums.length) {
            if (i == j) {
                j++;
                continue;
            }
            product *= nums[j];
            j++;
            if (j == nums.length) {
                j = 0;
                i++;
                result.push(product);
                product = 1;
            }
            if (i == j && i == nums.length - 1) {
                result.push(product);
                return result;
            }
        }
    }
}
