
using System;

public class Solution
{
    public TreeNode ReverseOddLevels(TreeNode root)
    {
        DepthFirstSearchByPairingSymetricTreeNodesPerLevel(root.left, root.right, 1);
        return root;
    }

    private void DepthFirstSearchByPairingSymetricTreeNodesPerLevel(TreeNode left, TreeNode right, int level)
    {
        if (left == null || right == null)
        {
            return;
        }
        if (IsOdd(level))
        {
            SwapTreeNodeValues(left, right);
        }
        DepthFirstSearchByPairingSymetricTreeNodesPerLevel(left.left, right.right, level + 1);
        DepthFirstSearchByPairingSymetricTreeNodesPerLevel(left.right, right.left, level + 1);
    }

    private bool IsOdd(int level)
    {
        return level % 2 == 1;
    }

    private void SwapTreeNodeValues(TreeNode left, TreeNode right)
    {
        int leftValue = left.val;
        left.val = right.val;
        right.val = leftValue;
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;

    public TreeNode(int val = 0, TreeNode? left = null, TreeNode? right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
