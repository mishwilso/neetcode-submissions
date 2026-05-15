// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let memory = new Map();

        memory.set(null, null);

        // First traversal, copy list
        let curr = head;
        while (curr){
            memory.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        curr = head;
        while (curr){
            let copy = memory.get(curr);
            copy.next = memory.get(curr.next);
            copy.random = memory.get(curr.random);
            curr = curr.next;
        }

        return memory.get(head);
    }
}
