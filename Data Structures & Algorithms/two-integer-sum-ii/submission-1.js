class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [i, j] = [0, numbers.length];
        const map = new Map(numbers.map((value, index) => [value, index]));

        while (i < numbers.length) {
            if (map.has(target - numbers[i]) && map.get(target - numbers[i]) != i){
                return [i+1, map.get(target - numbers[i]) + 1];
            }
            i++;
        }
    }
}
