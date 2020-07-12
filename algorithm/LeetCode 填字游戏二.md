[题目地址](https://leetcode-cn.com/problems/word-search-ii/)



- :slightly_smiling_face: 第一次练习 

  首先尝试硬回溯，不行。。。。

  

- :smile: 第二次练习 



### 失败错误

解题代码

```java
private List<String> retList;

/**
 * 方向数组
 */
private int[][] direction = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
private boolean[][] marked;
private String word;
private char[][] board;

public int m;
public int n;

public List<String> findWords(char[][] board, String[] words) {
    retList = new ArrayList<>();
    for (String word : words) {
        if (exist(board, word)) {
            retList.add(word);
        }
    }
    return retList;
}

/**
     * 判断单词是否存在在二维矩阵中
     * @param board 范围
     * @param word 单词
     * @return true or false
     */
public boolean exist(char[][] board, String word) {
    m = board.length;
    if (m == 0) {
        return false;
    }
    n = board[0].length;
    marked = new boolean[n][m];
    this.word = word;
    this.board = board;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
}

/**
     * 利用回溯算法，搜索矩阵
     * @param i -> x
     * @param j -> y
     * @param start 搜索到单词的第几位了
     * @return 是否正确
     */
private boolean dfs(int i, int j, int start) {

    // 最后一位, 结束条件
    if (start == word.length() - 1) {
        return this.board[i][j] == word.charAt(start);
    }

    if (this.board[i][j] == word.charAt(start)) {
        // 当前位置的矩阵是匹配的，修改标记
        marked[i][j] = true;
        // 搜索4个方向的值
        for (int k = 0; k < 4; k++) {
            int x = i + direction[k][0];
            int y = j + direction[k][1];

            // 判断是否越界
            if (x >= 0 && x < m && y >= 0 && y < n) {
                if (!marked[x][y]) {
                    if (dfs(x, y, start + 1)) {
                        return true;
                    }
                }
            }
        }
        marked[i][j] = false;
    }

    return false;
}
```



### 官方题解

这份题解写的很垃圾，后面可以优化一下

```java
class TrieNode {
  HashMap<Character, TrieNode> children = new HashMap<Character, TrieNode>();
  String word = null;
  public TrieNode() {}
}

class Solution {
  char[][] _board = null;
  ArrayList<String> _result = new ArrayList<String>();

  public List<String> findWords(char[][] board, String[] words) {

    // Step 1). Construct the Trie
    TrieNode root = new TrieNode();
    for (String word : words) {
      TrieNode node = root;

      for (Character letter : word.toCharArray()) {
        if (node.children.containsKey(letter)) {
          node = node.children.get(letter);
        } else {
          TrieNode newNode = new TrieNode();
          node.children.put(letter, newNode);
          node = newNode;
        }
      }
      node.word = word;  // store words in Trie
    }

    this._board = board;
    // Step 2). Backtracking starting for each cell in the board
    for (int row = 0; row < board.length; ++row) {
      for (int col = 0; col < board[row].length; ++col) {
        if (root.children.containsKey(board[row][col])) {
          backtracking(row, col, root);
        }
      }
    }

    return this._result;
  }
  
  private void backtracking(int row, int col, TrieNode parent) {
    Character letter = this._board[row][col];
    TrieNode currNode = parent.children.get(letter);

    // check if there is any match
    if (currNode.word != null) {
      this._result.add(currNode.word);
      currNode.word = null;
    }

    // mark the current letter before the EXPLORATION
    this._board[row][col] = '#';

    // explore neighbor cells in around-clock directions: up, right, down, left
    int[] rowOffset = {-1, 0, 1, 0};
    int[] colOffset = {0, 1, 0, -1};
    for (int i = 0; i < 4; ++i) {
      int newRow = row + rowOffset[i];
      int newCol = col + colOffset[i];
      if (newRow < 0 || newRow >= this._board.length || newCol < 0
          || newCol >= this._board[0].length) {
        continue;
      }
      if (currNode.children.containsKey(this._board[newRow][newCol])) {
        backtracking(newRow, newCol, currNode);
      }
    }

    // End of EXPLORATION, restore the original letter in the board.
    this._board[row][col] = letter;

    // Optimization: incrementally remove the leaf nodes
    if (currNode.children.isEmpty()) {
      parent.children.remove(letter);
    }
  }
}
```



### 易错点

- 易错项 1 
