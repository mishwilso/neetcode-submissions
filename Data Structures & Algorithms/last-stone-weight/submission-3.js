class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        
        const maxHeap = new MaxPriorityQueue();

        for (const stone of stones){
            maxHeap.enqueue(stone);
        }

        while (maxHeap.size() > 1){
            const x = maxHeap.dequeue();
            const y = maxHeap.dequeue();

            const res = Math.abs(x - y);

            if (res){
                maxHeap.enqueue(res);
            }
        }

        return maxHeap.size() === 0 ? 0 : maxHeap.front();
    }
}
