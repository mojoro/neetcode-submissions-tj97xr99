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
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null) return head;
        let prev, next;
        let current = head;
        while (current) {

            if (!prev) {
                prev = current;
                current = current.next;
                prev.next = null;
                continue;
            }
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev
    }
}
