class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = Array.from({'length': temperatures.length}, () => 0);
        for (let i = 0; i < temperatures.length; i++){
            if (temperatures[i] >= temperatures[i+1]) {
                stack.push({'index': i, 'value': temperatures[i]});
            } else {
                stack.push({'index': i, 'value': temperatures[i]});
                while (stack.length > 0) {
                    const obj = stack[stack.length-1];
                    if (obj.value < temperatures[i+1]){
                        res[obj.index] = i + 1 - obj.index;
                        stack.pop()
                    } else break;
                }
            }
        }
        return res;
    }
}
