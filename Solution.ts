
function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(root.left, root.right, 1);
    return root;
};

function depthFirstSearchByPairingSymetricTreeNodesPerLevel(left: TreeNode, right: TreeNode, level: number): void {
    if (left === null || right === null) {
        return;
    }
    if (isOdd(level)) {
        swapTreeNodeValues(left, right);
    }
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.left, right.right, level + 1);
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.right, right.left, level + 1);
}

function isOdd(level: number): boolean {
    return level % 2 === 1;
}

function swapTreeNodeValues(left: TreeNode, right: TreeNode): void {
    let leftValue = left.val;
    left.val = right.val;
    right.val = leftValue;
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
