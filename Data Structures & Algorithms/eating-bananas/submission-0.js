class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = Math.max(...piles);
        let res = r;

        while( l <= r ){
            // Find the mid point between
            let pace = Math.floor((l + r) / 2);
            let totalTime = 0

            for (const p of piles){
                totalTime += Math.ceil(p / pace);
            }

            // If time is less that our limit
            // replace our result and decrement the right side
            // try to find a smaller pace
            if (totalTime <= h){
                res = pace;
                r = pace - 1;
            } else {
                // else increment our left side
                // we need a larger pace
                l = pace + 1;
            }

            console.log(pace);
             
        }

        return res;


    }
}
