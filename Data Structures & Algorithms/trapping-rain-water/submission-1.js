class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let res = 0; // holding value
        let l = 0;
        let r = height.length - 1;

        // wall heights
        let lMax = height[l];
        let rMax = height[r];

        while (l < r){
            console.log(lMax, rMax);
            if (lMax < rMax){
                // increment becuase we want to know how much 
                // is being contained
                // moving over to the contained amount area
                l++;

                lMax = Math.max(lMax, height[l]);

                res += lMax - height[l];
            } else {
                r--;

                rMax = Math.max(rMax, height[r]);

                res += rMax - height[r];
            }
        }

        return res;

    }
}
