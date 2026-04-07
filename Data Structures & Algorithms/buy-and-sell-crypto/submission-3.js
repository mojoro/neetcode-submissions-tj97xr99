class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let profit = 0;

        for (let price of prices) {
            minPrice = Math.min(minPrice, price);   // best day to buy so far
            profit = Math.max(profit, price - minPrice); // best profit so far
        }

        return profit;
    }
}
