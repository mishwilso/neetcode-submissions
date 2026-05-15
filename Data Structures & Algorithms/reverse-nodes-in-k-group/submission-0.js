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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {

        let dummy = new ListNode(0, head);
        
        //head
        let groupPrev = dummy;

        while(true){
            const kthNode = this.getKthNode(groupPrev, k);
            if (!kthNode) {
                break;
            }
            // head of next group
            const groupNext = kthNode.next;

            let prev = kthNode.next;
            let curr = groupPrev.next;

            console.log(kthNode.val, groupPrev.val)
            // reverse till we meet the head of the next group
            while (curr !== groupNext) {
                const tmp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = tmp;
            }

            // head of current group
            const tmp = groupPrev.next;
            groupPrev.next = kthNode //tail of group?
            groupPrev = tmp;

        }
        return dummy.next

    }

    getKthNode(curr, k) {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    }
}
