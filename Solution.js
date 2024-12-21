
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var reverseOddLevels = function (root) {
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(root.left, root.right, 1);
    return root;
};

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @param {number} level
 * @return {void}
 */
function  depthFirstSearchByPairingSymetricTreeNodesPerLevel(left, right, level) {
    if (left === null || right === null) {
        return;
    }
    if (isOdd(level)) {
        swapTreeNodeValues(left, right);
    }
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.left, right.right, level + 1);
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.right, right.left, level + 1);
}

/**
 * @param {number} level
 * @return {boolean}
 */
function isOdd(level) {
    return level % 2 === 1;
}

/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {void}
 */
function swapTreeNodeValues(left, right) {
    let leftValue = left.val;
    left.val = right.val;
    right.val = leftValue;
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
