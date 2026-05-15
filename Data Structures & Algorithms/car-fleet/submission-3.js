class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((pos, idx) => [pos, speed[idx]]);
        let fleetStack = [];

        for (const [pos, speed] of cars.sort((a, b) => b[0] - a[0])){
            let dist = (target - pos) / speed;
            console.log([pos, speed], dist);
            if (!fleetStack.length || dist > fleetStack[fleetStack.length - 1]){
                fleetStack.push(dist);
            }
        }

        return fleetStack.length;

        
    }
}
