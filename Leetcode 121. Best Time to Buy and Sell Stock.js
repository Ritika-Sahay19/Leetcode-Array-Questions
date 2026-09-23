/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_Pro= -Infinity;
    let min_Pri= +Infinity;
    for(let i=0; i<prices.length ; i++){
        max_Pro= Math.max(max_Pro, prices[i] - min_Pri);
        min_Pri= Math.min(prices[i], min_Pri);
    }

    return max_Pro >0? max_Pro : 0;
}; 
Time Complexity - O(n)
Space Complexity - O(1) 
