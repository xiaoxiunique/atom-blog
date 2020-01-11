const { fs, path } = require('@vuepress/shared-utils')


// 读取blog 文件目录下的内容
let listBlogFiles = fs
.readdirSync(path.resolve(__dirname, '../blog/'))
.filter(f => f !== "README.md")
.map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
.sort();

listBlogFiles = [['', '深度好文'], ...listBlogFiles];

function getBlogSidebarList() {
  return [
    {
      title: "博客",
      collapsable: false,
      sidebarDepth: 3,
      children: listBlogFiles
    }
  ];
}

// 读取idea 文件下的内容
let listIdeaFiles = fs
.readdirSync(path.resolve(__dirname, '../idea/'))
.filter(f => f !== "README.md")
.map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
.sort();

listIdeaFiles = [['', '开源项目'], ...listIdeaFiles];

function getIdeaSidebar() {
  return [
    {
      title: "IDEA 从入门到精通",
      collapsable: false,
      sidebarDepth: 3,
      children: listIdeaFiles
    }
  ];
}

module.exports = {
  title: "tool-tips",
  description: "小西博客",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "IDEA", link: "/idea/" },
      { text: "博客", link: "/blog/" }
    ],
    sidebar: {
      "/idea/": getIdeaSidebar(),
      "/blog/": getBlogSidebarList()
    },
    smoothScroll: true,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "vuejs/vuepress",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "查看源码",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "vuejs/vuepress",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！"
  }
};
