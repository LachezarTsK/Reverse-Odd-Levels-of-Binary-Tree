
package main

import "fmt"

func reverseOddLevels(root *TreeNode) *TreeNode {
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(root.Left, root.Right, 1)
    return root
}

func depthFirstSearchByPairingSymetricTreeNodesPerLevel(left *TreeNode, right *TreeNode, level int) {
    if left == nil || right == nil {
        return
    }
    if isOdd(level) {
        swapTreeNodeValues(left, right)
    }
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.Left, right.Right, level+1)
    depthFirstSearchByPairingSymetricTreeNodesPerLevel(left.Right, right.Left, level+1)
}

func isOdd(level int) bool {
    return level % 2 == 1
}

func swapTreeNodeValues(left *TreeNode, right *TreeNode) {
    leftValue := left.Val
    left.Val = right.Val
    right.Val = leftValue
}

/*
Struct TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
*/
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}
