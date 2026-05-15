//import { MinPriorityQueue } from '@datastructures-js/priority-queue'
// Logic - queue only needs to be k long cause we only care about th current kth KthLargest
// so we cand equeue the rest and use a MinPriorityQueue
// root < rest of array
// if array is 5 nodes big - root is the 5th largest and 1st smallest :)

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.min = new MinPriorityQueue();
        this.kth = k;
        
        for (const n of nums){
            this.min.enqueue(n);
        }

        while (this.min.size() > k){
            this.min.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.min.enqueue(val);
        
        if (this.min.size() > this.kth) {
            this.min.dequeue();
        }

        return this.min.front()
        
    }
}
