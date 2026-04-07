class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */

    // if the steps a car takes to get to the target is <= the steps of the car in front of it, then it becomes part of the leading car's set
    // 
    carFleet(target, position, speed) {
        const sets = [];
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            const step = (target - position[i])/speed[i]
            cars.push([position[i], speed[i], step]);
        }
        cars.sort((a,b) => b[0] - a[0]);
        const currentSet = [];
        let maxUniqueSteps = 0;
        for (let i = 0; i < cars.length; i++) {
            currentSet.push(cars[i])
            maxUniqueSteps = Math.max(cars[i][2], maxUniqueSteps)
            if (cars[i+1] && (cars[i+1][2] <= cars[i][2] || cars[i+1][2] <= maxUniqueSteps) ){
                currentSet.push(cars[i+1])
            } else {
                console.log(currentSet)
                sets.push(currentSet);
                currentSet.length = 0;
            }
        }

        return sets.length;
    }
}
