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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let sorted, prev = null;
        if (list1 == null) return list2;
        else if (list2 == null ) return list1;

        while (list1 || list2){
            let temp;
            if (list1 == null) {
                prev.next = list2;
                break;
            }
            else if (list2 == null ) {
                prev.next = list1;
                break
            }
            else if (list1.val < list2.val) {
                temp = new ListNode(list1.val);
                list1 = list1.next;
            }
            else if (list2.val <= list1.val){
                temp = new ListNode(list2.val);
                list2 = list2.next;

            }
            if(!prev) {
                prev = temp;
                sorted = temp;
                continue;
            }
            prev.next = temp;
            prev = temp;
        }
        return sorted
    }
}
