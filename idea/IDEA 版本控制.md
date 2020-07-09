
[[TOC]]

### 查看每一行代码的条件人, 提交时间（大部分人不知道）



<img src="http://193.112.98.8/atomImg/git/git-annotate.png" alt="git-annotate.png" style="zoom:80%;" />

**选择后入下图所示**

<img src="http://193.112.98.8/atomImg/git/git-annotate1.png" alt="git-annotate1.png" style="zoom:80%;" />

**鼠标移动上去还能看到提交详细信息**

<img src="http://193.112.98.8/atomImg/git/git-annotate-show-msg.png" alt="git-annotate-show-msg.png" style="zoom:80%;" />


### 克隆远程代码

> git clone origin url

常规操作

<img src="http://193.112.98.8/atomImg/git/git-clone.png" alt="git-clone.png" style="zoom:80%;" />



**装逼操作** 

<img src="http://193.112.98.8/atomImg/git/git-clone-action.png" alt="git-clone-action.png" style="zoom:80%;" />



### 拉取远程代码

> git pull 

<img src="http://193.112.98.8/atomImg/git/git-pull.png" alt="git-pull.png" style="zoom:80%;" />



**快捷方式**

```
ctrl + t
```



### 将暂存区代码提交到本地库

> git commit -m 'message'

<img src="http://193.112.98.8/atomImg/git/git-commit.png" alt="git-commit.png" style="zoom:80%;" />

<img src="http://193.112.98.8/atomImg/git/git-commit-t.png" alt="git-commit-t.png" style="zoom:80%;" />

### 将本地库 提交到远程库 

> git push

<img src="http://193.112.98.8/atomImg/git/git-push.png" alt="git-push.png" style="zoom:80%;" />



快捷键 

```
ctrl + shift + k
```

或

```
alt + 1 + 8
```



### 切换分支, 或拉取远程分支

<img src="http://193.112.98.8/atomImg/git/git-branch.png" alt="git-branch.png" style="zoom:80%;" />

以下提供几种快捷方式

```
ctrl + shift + `
```

或

```
alt + ~ + 7
```

或

<img src="http://193.112.98.8/atomImg/git/git-branch-btn.png" alt="git-branch-btn.png" style="zoom:80%;" />

###  查看当前打开类 历史记录

```
alt + ~ + 4
```



#### 查看项目工程历史记录

选中工程后

```
alt + ~ + 4
```

或 `alt + 9` 切换到 `Version Control` 面板 选择log

<img src="http://193.112.98.8/atomImg/git/git-version.png" alt="git-version.png" style="zoom:80%;" />



### Stash

应用场景

- 我在本地修改好后，发现远程分支已经被改动了，此时我本地也被改动了就造成了冲突，无法push或者pull。此时可以使用git stash

  ```shell
  1 git stash //把本地的改动暂存起来
  2 git pull  //拉取远端分支（此时本地分支会回滚到上次commit的情况，新的改动都存在了stash中）
  3 git stash pop // 将栈顶改动重新加回本地分支，就可以继续修改了，当然，如果改好了就是add,commit,push啥的。。
  ```

  

- 不小心改动了其他分支，例如忘记切换，直接在master分支上做改动，这里假设我的分支是test分支

  ```shell
  git stash          //把本地当前改动暂存起来，此时master分支就恢复到了上次拉取时的状态
  git checkout test  //切换到需要改动的分支
  git stash pop　　　 //将改动pop到自己当前的分支
  ```



Idea 将现在本地的修改存储在 Stash 中

`alt + ~`加 `9`

<img src="../.vuepress/public/image-20200506195626175.png" alt="image-20200506195626175" style="zoom: 101%;" />

将 Stash 中的代码还原

<img src="../.vuepress/public/image-20200506202108277.png" alt="image-20200506202108277" style="zoom:101%;" />



### Check Out

将本地修改的代码还原对应命令 `git checkout <file>`

