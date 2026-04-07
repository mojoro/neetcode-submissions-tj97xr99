class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let [left, right] = [0, matrix.length];
        let targetRow;
        while (targetRow == undefined) {
            let midPoint = Math.floor((left+right)/2);
            if (target == matrix[midPoint][0]) return true;
            if (right-left == 1) {
                targetRow = midPoint;
            } else if (target > matrix[midPoint][0]){
                left = midPoint;
            } else if (target < matrix[midPoint][0]) {
                right = midPoint;
            } 
        }

        [left, right] = [0, matrix[targetRow].length];
        while (true) {
            let midPoint = Math.floor((left+right)/2);
            let num = matrix[targetRow][midPoint];
            if (target == num) return true;
            else if (right-left == 1) return false;
            else if (target > num) left = midPoint;
            else if (target < num) right = midPoint;
        }
    }
}
