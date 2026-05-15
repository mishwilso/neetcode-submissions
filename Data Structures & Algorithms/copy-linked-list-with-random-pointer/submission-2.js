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

        // put the list in the map!!!
        const hashAddress = new Map();
        hashAddress.set(null, null);
        
        // first copy over the list
        let current = head;
        while(current !== null){
            const copy = new Node(current.val, null, null);
            hashAddress.set(current, copy);
            current = current.next;
        }

        // capture the random nodes
        current = head;
        while(current !== null){
            // account for random being null
            const copy = hashAddress.get(current);
            copy.next = hashAddress.get(current.next);
            copy.random = hashAddress.get(current.random);
            current = current.next;
        }

        return hashAddress.get(head);
    }
}
