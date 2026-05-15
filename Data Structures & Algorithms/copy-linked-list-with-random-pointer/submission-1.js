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

        const hashAddress = new Map();
        let dummy = new Node(0, null, null);

        let firstPass = dummy;
        

        // first copy over the list
        let current = head;
        while(current !== null){
            firstPass.next = new Node(current.val, null, null);
            hashAddress.set(current, firstPass.next);
            current = current.next;
            firstPass = firstPass.next;
        }

        // capture
        hashAddress.set(current, firstPass.next);
        let secondPass = dummy;

        while(head){
            // account for random being null
            secondPass.next.random = hashAddress.get(head.random);
            head = head.next;
            secondPass = secondPass.next;
        }

        return dummy.next;
    }
}
