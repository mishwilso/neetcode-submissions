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
        let dummy = new ListNode(0, head); // trick is to have dummy point to head
        let curr = dummy;
        let slow = head;

        for (let i = 0; i < n; i++){
            slow = slow.next;
        }

        while (slow){
            curr = curr.next;
            slow = slow.next;            
        }

        curr.next = curr.next.next; // map next to val after
        return dummy.next;
    }
}
