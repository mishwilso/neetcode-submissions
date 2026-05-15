class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        // contains indices
        let deque = [];

        // has results
        let result = [];

        for (let r = 0; r < nums.length; r++){
            // TODO: Remove indices outside window from front
            // aka while deque has vals and the front of deque is in the deque
            while(deque.length && deque[0] <= r - k){
                deque.shift()
            }
    
            // TODO: Remove indices with smaller values from back cause they can't be the max.
            // So our deque holds max vals in decending order.
            while (deque.length && nums[deque[deque.length - 1]] < nums[r]){
                deque.pop()
            }
        
            // TODO: Add current index to the back
            deque.push(r);
        
            // TODO: Once window is full, record max
            if (r >= k - 1){
                result.push(nums[deque[0]]);
            }
        }
        return result;

    }
}


// If my deque had the indices [1, 2, 4]
// it means that index 1 is the max val
// if we shift it out the window
// then the next max would be 2
// if we reach idx 5 and find that its val is larger than [2, 4]
// then we remove those from the deque. becuase 5 is the largest in the window
// if the next num is not larger than the one at index 5 we wont add it if idx 5 is still in the window