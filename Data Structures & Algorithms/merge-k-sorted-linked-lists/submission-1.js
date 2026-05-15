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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        const dummy = new ListNode(0);
        
        let l1 = lists[0];

        for (let i = 0; i < lists.length; i++){   
            lists[i] = this.mergeLists(lists[i], lists[i - 1]);
        }
        
        return lists[lists.length - 1];
    }

    mergeLists(l1, l2){
        const dummy = new ListNode();
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
                current = current.next;
        }
        // Attach remaining nodes
        current.next = l2 ? l2 : l1;

        return dummy.next;
    }
}
