class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();
        
        for (const stone of stones){
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1) {
            let x = maxHeap.dequeue();
            let y = maxHeap.dequeue();

            let result = x - y;
            if (result) {
                maxHeap.enqueue(result);
            }
        }

        return maxHeap.size() ? maxHeap.front() : 0;

    }
}
