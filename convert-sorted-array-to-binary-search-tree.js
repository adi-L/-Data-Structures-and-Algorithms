/*******************************************************************************************************************
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Example 1:

      0
     / \
   -3   9
   /   /
 -10  5

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

      0
     / \
   -10   5
   /   /
 -3  9
 
Example 2:

  3   1
 /     \
1       3

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
*******************************************************************************************************************/


var sortedArrayToBST = function(nums) {
    return traverse(nums,0,nums.length-1);
};

function traverse(nums,start,end){
    if(start>end){
        return null;
    }
    let mid = Math.floor((start+end)/2);
    let root = new TreeNode(nums[mid]);
    root.left = traverse(nums,start,mid-1);
    root.right = traverse(nums,mid+1,end);
    return root;
}
