class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0;
        let r = Math.max(...piles);
        let res = 0;

        while (l <= r){
            let pace = Math.floor((l + r) / 2);
            let totalTime = 0;

            for (const pile of piles){
                totalTime += Math.ceil(pile / pace);
            }

            if (totalTime <= h){
                res = pace;
                r = pace - 1;
            } else {
                l = pace + 1;
            }
        }

        return res;
    }
}
