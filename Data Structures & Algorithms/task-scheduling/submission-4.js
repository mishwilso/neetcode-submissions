class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
        for (const task of tasks){
            freq.set(task, (freq.get(task) || 0) + 1);
        }

        let maxHeap = new MaxPriorityQueue();

        for (const [task, count] of freq){
            maxHeap.enqueue(count);
        }

        let time = 0;
        let cooldownQueue = []

        while(maxHeap.size() || cooldownQueue.length){
            time++;

            if (maxHeap.size() > 0){
                let cnt = maxHeap.dequeue();

                cnt--;

                if (cnt) {
                    cooldownQueue.push([cnt, time + n])
                }
            }

            if (cooldownQueue.length && cooldownQueue[0][1] === time){
                let [item, _ ] = cooldownQueue.shift();
                maxHeap.enqueue(item);
            }
        }

        return time;


    }
}
