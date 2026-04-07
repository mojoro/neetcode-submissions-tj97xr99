class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const [sArray, tArray] = [[], []];
        for (const char of s) {
            sArray.push(char)
        }
        for (const char of t) {
            tArray.push(char)
        }
        const sSorted = sArray.sort();
        const tSorted = tArray.sort();
        if (sSorted.length == tSorted.length){
            for (let i = 0; i < sSorted.length; i++){
                if(sSorted[i] != tSorted[i]) return false;
            }
            return true;
        }
        return false
    }
}






















