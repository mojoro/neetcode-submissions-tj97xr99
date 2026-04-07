class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        const [keyMap, targetMap] = [{},{}];
        let matchCount = 0,
            containsTarget = true,
            currentSubstring = "";
        
        for (let i = 0; i < t.length; i++) {
            keyMap[t[i]] = (keyMap[t[i]] || 1) + 1;
            targetMap[s[i]] = (targetMap[s[i]] || 1) + 1;
            currentSubstring += s[i];
        }

        for (const key in keyMap) {
            if (keyMap[key] != targetMap[key]) {
                containsTarget = false;
            }
            if (keyMap[key] <= targetMap[key]) matchCount++;
        }

        if (containsTarget) return currentSubstring;

        let left = 0,
            right = t.length - 1,
            minString = s,
            matchFound = false;

        while(right < s.length) {
            console.log("Matches: " + matchCount + "\n left char, right char: " + s[left] + ", " + s[right] + "\n minString: " + minString)
            containsTarget = (matchCount == Object.keys(keyMap).length) ? true : false;
            console.log(containsTarget + "["+left+", "+right+"]")
            if (!containsTarget) {
                right++
                targetMap[s[right]] = (targetMap[s[right]] || 1) + 1;
                currentSubstring += s[right];
                if (targetMap[s[right]] == keyMap[s[right]]) matchCount++
            } else {
                matchFound = true;
                minString = minString.length < currentSubstring.length ? minString : currentSubstring;
                left++;
                currentSubstring = currentSubstring.substring(1);
                if (targetMap[s[left-1]] == keyMap[s[left-1]]) matchCount--;
                targetMap[s[left-1]] = targetMap[s[left-1]] - 1;
            }
        }
        if(matchFound) return minString
        else return ""
    }
}
