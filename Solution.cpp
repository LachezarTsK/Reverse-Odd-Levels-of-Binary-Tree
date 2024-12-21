
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this struct.
 */
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;

    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {

public:
    TreeNode* reverseOddLevels(TreeNode* root) const {
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(root->left, root->right, 1);
        return root;
    }

private:
    void depthFirstSearchByPairingSymetricTreeNodesPerLevel(TreeNode* left, TreeNode* right, int level) const {
        if (left == nullptr || right == nullptr) {
            return;
        }
        if (isOdd(level)) {
            swapTreeNodeValues(left, right);
        }
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left->left, right->right, level + 1);
        depthFirstSearchByPairingSymetricTreeNodesPerLevel(left->right, right->left, level + 1);
    }

    bool isOdd(int level) const {
        return level % 2 == 1;
    }

    void swapTreeNodeValues(TreeNode* left, TreeNode* right) const {
        int leftValue = left->val;
        left->val = right->val;
        right->val = leftValue;
    }
};
