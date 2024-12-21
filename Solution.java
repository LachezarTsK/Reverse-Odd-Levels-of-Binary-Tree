
public class Solution {

    public TreeNode reverseOddLevels(TreeNode root) {
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(root.left, root.right, 1);
        return root;
    }

    private void depthFirstSearchByPairingSymetricTreeNodesPerLevel(TreeNode left, TreeNode right, int level) {
        if (left == null || right == null) {
            return;
        }
        if (isOdd(level)) {
            swapTreeNodeValues(left, right);
        }
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.left, right.right, level + 1);
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.right, right.left, level + 1);
    }

    private boolean isOdd(int level) {
        return level % 2 == 1;
    }

    private void swapTreeNodeValues(TreeNode left, TreeNode right) {
        int leftValue = left.val;
        left.val = right.val;
        right.val = leftValue;
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
