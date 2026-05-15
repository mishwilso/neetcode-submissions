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
        let k = 0;

        let current = head;
        while(current){
            current = current.next;
            k++;
        }

        // Using dummy so we do have to check for null
        let dummy = new ListNode(0);
        dummy.next = head;
        
        current = dummy;
        for (let i = 0; i < (k - n); i++){
            current = current.next;
        }

        current.next = current.next.next;
        return dummy.next;
    }
}
