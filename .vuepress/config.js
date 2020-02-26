const { fs, path } = require("@vuepress/shared-utils");

// 读取blog 文件目录下的内容
let listBlogFiles = fs
  .readdirSync(path.resolve(__dirname, "../blog/"))
  .filter(f => f !== "README.md")
  .map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
  .sort();

listBlogFiles = [["", "深度好文"], ...listBlogFiles];

function getBlogSidebarList() {
  return [
    {
      title: "杂记",
      collapsable: false,
      sidebarDepth: 3,
      children: listBlogFiles
    }
  ];
}

// 读取idea 文件下的内容
let listIdeaFiles = fs
  .readdirSync(path.resolve(__dirname, "../idea/"))
  .filter(f => f !== "README.md")
  .map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
  .sort();

listIdeaFiles = [["", "开源项目"], ...listIdeaFiles];

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

// 读取devops 文件下的内容
let listDevOpsFiles = fs
  .readdirSync(path.resolve(__dirname, "../devops/"))
  .filter(f => f !== "README.md")
  .map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
  .sort();

listDevOpsFiles = [["", "介绍"], ...listDevOpsFiles];

function getDevOpsSidebar() {
  return [
    {
      title: "DevOps",
      collapsable: false,
      sidebarDepth: 3,
      children: listDevOpsFiles
    }
  ];
}

// 读取web 文件下的内容
let listWebFiles = fs
  .readdirSync(path.resolve(__dirname, "../web/"))
  .filter(f => f !== "README.md")
  .map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
  .sort();

listWebFiles = [["", "介绍"], ...listWebFiles];

function getWebSidebar() {
  return [
    {
      title: "Web",
      collapsable: false,
      sidebarDepth: 3,
      children: listWebFiles
    }
  ];
}


// 读取设计模式文件下的内容
let listDesignPattern = fs
  .readdirSync(path.resolve(__dirname, "../designPattern/"))
  .filter(f => f !== "README.md")
  .map(filename => [filename.slice(0, -3), filename.slice(0, -3)])
  .sort();

listDesignPattern = [["", "设计原则"], ...listDesignPattern];

function getDesignSidebar() {
  return [
    {
      title: "设计模式",
      collapsable: false,
      sidebarDepth: 3,
      children: listDesignPattern
    }
  ];
}

module.exports = {
  title: "我的学习测试",
  description: "我的学习测试",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "IDEA", link: "/idea/" },
      { text: "DevOps", link: "/devops/" },
      { text: "Web", link: "/web/" },
      { text: "设计模式", link: "/designPattern/" },
      { text: "杂记", link: "/blog/" }
    ],
    sidebar: {
      "/idea/": getIdeaSidebar(),
      "/blog/": getBlogSidebarList(),
      "/devops/": getDevOpsSidebar(),
      "/web/": getWebSidebar(),
      "/designPattern/": getDesignSidebar()
    }
  },
  markdown: {
    toc: { includeLevel: [1, 2, 3] },
  }
};
