class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openMap = {
            "(": 1,
            "[": 2,
            "{": 3
        }
        const closeMap = ({
            ")": 1,
            "]": 2,
            "}": 3
        })

        const openCharStack = []

        for (let i = 0; i < s.length; i++) {
            if (openMap[s[i]]) {
                openCharStack.push(s[i])
                continue;
            }
            if (closeMap[s[i]]) {
                if(closeMap[s[i]] == openMap[openCharStack[openCharStack.length-1]]){
                    openCharStack.pop();
                } else if (closeMap[s[i]] != openMap[openCharStack[openCharStack.length-1]]) {
                    return false;
                }
            }
            
        }

        if (openCharStack.length) return false 
        else return true;
    }
}
