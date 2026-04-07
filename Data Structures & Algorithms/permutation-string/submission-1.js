class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const keyMap = new Map();
        const targetMap = new Map();
        for (let i = 0; i < s1.length; i++) {
            if (!keyMap.get(s1[i])) keyMap.set(s1[i], 1);
            else keyMap.set(s1[i], keyMap.get(s1[i]) + 1);

            if (!targetMap.get(s2[i])) targetMap.set(s2[i], 1);
            else targetMap.set(s2[i], targetMap.get(s2[i]) + 1);
        }

        let match = true;
        for (const key of keyMap.keys()) {
            if (keyMap.get(key) != targetMap.get(key)) match = false;
        }
        if (match) return match;

        for (let i = s1.length; i < s2.length; i++) {
            targetMap.set(s2[i - s1.length], targetMap.get(s2[i - s1.length]) - 1);
            if (!targetMap.get(s2[i])) targetMap.set(s2[i], 1);
            else targetMap.set(s2[i], targetMap.get(s2[i]) + 1);

            match = true;
            for (const key of keyMap.keys()) {
                if (keyMap.get(key) != targetMap.get(key)) match = false;
            }
            if (match) return match;
        }

        return false;
    }
}
