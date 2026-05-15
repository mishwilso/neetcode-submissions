class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let taskCount = new Map();
        for (const task of tasks){
            taskCount.set(task, (taskCount.get(task) || 0) + 1);
        }

        let maxHeap = new MaxPriorityQueue();
        for (const [key, value] of taskCount){
            maxHeap.enqueue(value);
        }

        let time = 0;
        let queue = new Queue;

        while (maxHeap.size() || queue.size()){
            time++;

            if (maxHeap.size()) {
                let cnt = maxHeap.dequeue() - 1;
                if (cnt !== 0){
                    queue.push([cnt, time + n]);
                }
            }

            if (queue.size() && queue.front()[1] === time){
                maxHeap.push(queue.pop()[0]);
            }
        } 

        return time;


    }
}
