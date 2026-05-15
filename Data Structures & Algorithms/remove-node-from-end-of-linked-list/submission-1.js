/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        // move right pointer n times
        // so pointers have a gap of n
        while (n){
            right = right.next;
            n--;
        }

        // now move right till its null
        // the place left lands is the value before the 
        // node we need to remove (cause the gap between l and r is n)
        while(right !== null){
            right = right.next;
            left = left.next;
        }

        // now have left skip over the next node
        // if its the first node that need thats to be removed
        // because we init with dummy- we can skip over it
        left.next = left.next.next;

        return dummy.next;
    }
}
