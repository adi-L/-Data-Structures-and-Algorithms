
/**
Given an integer numRows, return the first numRows of Pascal's triangle.

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascalTriangle = new Array(numRows);
    for(let i = 0; i < numRows; i++){
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for(let j = 1; j < row.length-1; j++){
            let rowAbove = pascalTriangle[i -1];
            row[j] = rowAbove[j] +rowAbove[j-1]
        }
        pascalTriangle[i] = row
    }
    return pascalTriangle;
};
