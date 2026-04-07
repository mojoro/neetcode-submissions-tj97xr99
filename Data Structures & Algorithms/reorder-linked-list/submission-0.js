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
     * @return {void}
     */
    reorderList(head) {
        let slow = head, fast = slow.next, prev = slow;

        while (slow.next && slow.next.next) {
            if (fast.next) {
                prev = fast;
                fast = fast.next
            } else {
                prev.next = null;
                fast.next = slow.next;
                slow.next = fast;
                slow = fast.next;
            };
        }
        return head;
    }
}
