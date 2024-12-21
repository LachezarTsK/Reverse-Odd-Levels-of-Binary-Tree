
class Solution {

    fun reverseOddLevels(root: TreeNode?): TreeNode? {        
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(root?.left, root?.right, 1)
        return root
    }

    private fun depthFirstSearchByPairingSymetricTreeNodesPerLevel(left: TreeNode?, right: TreeNode?, level: Int) {
        if (left == null || right == null) {
            return
        }
        if (isOdd(level)) {
            swapTreeNodeValues(left, right)
        }
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.left, right.right, level + 1)
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.right, right.left, level + 1)
    }

    private fun isOdd(level: Int): Boolean {
        return level % 2 == 1
    }

    private fun swapTreeNodeValues(left: TreeNode, right: TreeNode) {
        val leftValue = left.`val`
        left.`val` = right.`val`
        right.`val` = leftValue
    }
}