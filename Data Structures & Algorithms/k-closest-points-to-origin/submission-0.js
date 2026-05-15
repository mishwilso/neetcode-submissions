class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue(
            (n) => Math.sqrt((n[0] ** 2) + (n[1] ** 2))
        )

        for (const p of points){
            maxHeap.enqueue(p);
        }

        while (maxHeap.size() > k){
            maxHeap.dequeue();
        }

        return maxHeap.toArray();
    }
}
