class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        const prefixArray = [];
        const postfixArray = [];
        let product = 1;

        for (let i = 0; i < nums.length; i++){
            product *= nums[i];
            prefixArray.push(product);
        }
        product = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            product *= nums[i];
            postfixArray[i] = product;
        } 

        for (let i = 0; i < nums.length; i++) {
            const preProd = i == 0 ? 1 : prefixArray[i - 1];
            const postProd = i == nums.length - 1 ? 1 : postfixArray[i + 1];
            const finalprod = preProd * postProd;
            result.push(finalprod);
        }

        return result;
    }
}
