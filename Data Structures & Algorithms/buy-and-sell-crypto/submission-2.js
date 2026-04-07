class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    /* We seek the max of prices[right] - prices[left] */
    maxProfit(prices) {
        let right = 1;
        let profit = 0;
        for (let left = 0; left < prices.length; left++) {
            if (left == right) right++;
            if (right == prices.length) break;
            if (prices[left] > prices[right]) {
                continue;
            }
            while (prices[left] < prices[right]) {
                profit = Math.max((prices[right]-prices[left]), profit);
                right++;
            }
        }
        return profit;
    }
}
