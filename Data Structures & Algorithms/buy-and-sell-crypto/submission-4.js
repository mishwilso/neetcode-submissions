class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let minBuy = prices[0];

        for (const price of prices){
            maxP = Math.max(maxP, price - minBuy);
            minBuy = Math.min(minBuy, price);
        }

        return maxP;
    }
}
