class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [i, j] = [0, numbers.length - 1];
        while (i < numbers.length) {
            const temp = target - numbers[j];
            if (numbers[i] == temp) return [i+1, j+1];
            else if (numbers[i] < temp) i++;
            else j--;
        }
    }
}
