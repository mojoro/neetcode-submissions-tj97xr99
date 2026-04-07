class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({'length': temperatures.length}, () => 0);
        let daysToWarmer = 0;
        for (let i = 0; i < temperatures.length; i++) {
            for (let k = i; k < temperatures.length; k++) {
                if (temperatures[i] < temperatures[k]) {
                    res[i] = ++daysToWarmer;
                    break;
                }
                else if (i != k && temperatures[i] >= temperatures[k]) daysToWarmer++;
            }
            daysToWarmer = 0;
        }
        return res;
    }
}
