class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";
        for (const [index, str] of strs.entries()) {
            if (strs.length == 1) return "!@#$@%!" + strs[0];
            if (index + 1 == strs.length) {
            encodedString += str;
            break;
            }
            //encodedString += `${str.length}#${str}`;
            encodedString += `${str}!@#\$@%!`;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];
        if (str === "!@#$@%!") return [""];
        const decodedString = str.split("!@#$@%!");
        if (decodedString.length == 2 && decodedString[0] === "") decodedString.shift()
        return decodedString;
    }
}
