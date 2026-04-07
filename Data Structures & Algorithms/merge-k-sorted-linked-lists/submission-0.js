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
        let lowestHead = { val: Infinity, next: null };
        let lhi = 0;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] == null || lowestHead.val < lists[i].val) continue
            else {
                lowestHead = lists[i];
                lhi = i;
            }
        }
        if (lowestHead.val === Infinity) return null

        lists.splice(lhi, 1);

        let curr = lowestHead
        
        while (curr) {
            let nextNode = curr.next || { val: Infinity, next: null };
            let nextNodeChanged = false;
            let nodeIndex = 0;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i] == null || nextNode.val < lists[i].val) continue;
                else {
                    nextNode = lists[i];
                    nextNodeChanged = true;
                    nodeIndex = i;
                }
            }

            if (nextNodeChanged) {
                lists[nodeIndex] = lists[nodeIndex].next;
                nextNode.next = curr.next;
                curr.next = nextNode;
            }
            curr = curr.next;
        }
        return lowestHead;
    }
}
