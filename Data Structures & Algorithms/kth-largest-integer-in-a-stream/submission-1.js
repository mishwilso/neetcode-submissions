class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
       this.heap = new MinPriorityQueue()
       this.kth = k;

       for (const n of nums){
            this.heap.enqueue(n);
       } 

       while (this.heap.size() > k){
            this.heap.dequeue();
       }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.enqueue(val);

        while (this.heap.size() > this.kth){
            this.heap.dequeue();
       }

        return this.heap.front();
    }
}
