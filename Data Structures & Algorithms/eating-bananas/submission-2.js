class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    //piles[i] = number of bananas in pile
    //h = hours to eat all banans
    //k = decided banana-eating rate
    //each hour choose pile to eat k bananas from
    //if there are less than k bananas, you waste your time at the pile
    // return the slowest eating speed (minimum value of k) that will 
    //allow the complete eating of all the bananas
    minEatingSpeed(piles, h) {
        if (piles.length==h) return Math.max(...piles)
        piles.sort((a,b) => b-a);
        let lastValidK;
        let [left, right] = [1, piles[0]];
        while (left <= right) {
            let k = Math.floor((left+right)/2);
            let eatingSteps = 0
            for (const pile of piles) {
                eatingSteps += Math.ceil(pile/k);
            }
            if (eatingSteps > h) {
                left = k + 1;
            } else if (eatingSteps <= h) {
                right = k - 1;
                lastValidK = k;
            }
        }
        return lastValidK
    }
}
