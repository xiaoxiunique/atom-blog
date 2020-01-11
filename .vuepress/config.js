module.exports = {
  title: "A",
  description: "小西博客",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "IDEA", link: "/idea/" },
      { text: "博客", link: "/blog/" }
    ],
    sidebar: {
      "/blog/": [
        {
          title: "博客",
          collapsable: false,
          sidebarDepth: 3,
          children: [
            ['', "tool-tips"],
            ['IDEA 常用快捷键', 'IDEA 常用快捷键'],
            ['IDEA 常用设置', 'IDEA 常用设置'],
            ['IDEA 装机必备插件', 'IDEA 装机必备插件'],
            ['IDEA 版本控制', 'IDEA 版本控制'],
            ['Chrome 浏览器插件整理', 'Chrome 浏览器插件整理'],
            ['优秀网站合集', '优秀网站合集'],
            ['工具网站整理', '工具网站整理'],
            ['装机必备软件', '装机必备软件'],
            ['centos 7 安装 mongodb', 'centos 7 安装 mongodb'],
            ['centos 自动配置 vim 编辑器', 'centos 自动配置 vim 编辑器'],
            ['docker 安装nexus', 'docker 安装nexus'],
            ['docker', 'docker'],
            ['dubbo 初体验', 'dubbo 初体验'],
            ['Git 教程', 'Git 教程'],
            ['JS 数组整理', 'JS 数组整理'],
            ['Kafka 入门探索', 'Kafka 入门探索'],
            ['LeetCode 122号问题 买卖股票的最佳时机', 'LeetCode 122号问题 买卖股票的最佳时机'],
            ['LeetCode 189号问题 旋转数组', 'LeetCode 189号问题 旋转数组'],
            ['LeetCode 203号问题 删除链表中的元素', 'LeetCode 203号问题 删除链表中的元素'],
            ['LeetCode 21号问题， 合并 k 条链表', 'LeetCode 21号问题， 合并 k 条链表'],
            ['leetCode 存在重复元素', 'leetCode 存在重复元素'],
            ['LeetCode 第70号 爬楼梯 问题', 'LeetCode 第70号 爬楼梯 问题'],
            ['linux 记录', 'linux 记录' ],
            ['MQTT 简介', 'MQTT 简介'],
            ['MybatisPlus 自动生成器配置', 'MybatisPlus 自动生成器配置'],
            ['MYSQL EXPLAIN', 'MYSQL EXPLAIN'],
            ['Nginx 命令', 'Nginx 命令'],
            ['Node.js 知识点整理', 'Node.js 知识点整理'],
            ['Redis KeyGenerator key 生成器', 'Redis KeyGenerator key 生成器'],
            ['RequestBody 和 RequestParam的区别', 'RequestBody 和 RequestParam的区别'],
            ['SpringIOC 概述', 'SpringIOC 概述'],
            ['vue 整理', 'vue 整理'],
            ['websocket 参考代码', 'websocket 参考代码'],
            ['xshell  配色方案', 'xshell  配色方案'],
            ['写出优美Java代码注意事项', '写出优美Java代码注意事项'],
            ['创建一个属于自己的动态数组', '创建一个属于自己的动态数组'],
            ['我平常开发都会用什么额外软件辅助开发', '我平常开发都会用什么额外软件辅助开发'],
            ['手写快速排序', '手写快速排序'],
            ['排序算法', '排序算法'],
            ['搭建JENKINS 服务器', '搭建JENKINS 服务器'],
            ['计算机基础杂记', '计算机基础杂记'],
            ['配置https 网站', '配置https 网站'],
            ['链表队列 LinkedListQueue', '链表队列 LinkedListQueue']
            
          ]
        }
      ]
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


// const officalPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort();
