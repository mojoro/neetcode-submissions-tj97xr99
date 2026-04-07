class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerCase = s.toLowerCase();
        let sanitizedString = ''; 
        for (let i = 0; i < lowerCase.length; i++) {
            const charCode = lowerCase.charCodeAt(i);
            if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)){
                sanitizedString += lowerCase[i];
            }
        }
        let i = 0;
        let j = sanitizedString.length - 1;
        while (i < sanitizedString.length) {
            if (sanitizedString[i++] == sanitizedString[j--]) continue
            else return false
        }
        return true
    }
}
