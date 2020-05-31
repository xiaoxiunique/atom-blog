### 安装

 [点击这里](https://nodesource.com/) 查看有哪些版本 添加源后 

```shell
curl --silent --location https://rpm.nodesource.com/setup_10.x | bash -

yum install -y nodejs
```





## 将格式化的 JSON 文件转化为 Markdown 文件

```javascript
let data = {};
data = data.nodes;

let content = [...data].reduce((acc, node) => {
  const title = node.text.substr(19, 4);
  acc += `## ${title} \r\n\r\n`;
  const __content = `
| 描述                                                | Windows                     | Mac Os              |
| --------------------------------------------------- | ----------------------- | -------------------- | \r\n`;

  // find children
  const childrenStr = node.children.reduce((__acc, subNode) => {
    __acc += `|${subNode.note} | \`${subNode.text}\`  |  | \r\n`;
    return __acc;
  }, __content);
  acc += childrenStr;

  return acc;
}, '');
content = _.replace(content, /\<span\>/g, '');
content = _.replace(content, /\<\/span\>/g, '');
content = _.replace(content, /&nbsp;/g, ' ');
content = _.replace(content, /（必备）/g, '👓');

fs.writeFileSync(__dirname + '/idea.md', content);
```



:::details

```javascript
const _ = require('lodash');
const fs = require('fs');

let data = {
  nodes: [
    {
      children: [
        {
          children: [],
          id: '67ba7bdb50b76094737f8486c42ce88e',
          modified: 1587696276103,
          note: '<span>编辑源&nbsp;（必备）\n</span>',
          text: '<span>F4</span>',
        },
        {
          children: [],
          id: 'ffc8cf0ce3b621aa19e121c047ad64b7',
          modified: 1587707436709,
          note:
            '<span>进入光标所在的方法/变量的接口/定义处（必备）==&nbsp;Ctrl&nbsp;+&nbsp;鼠标左击</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;B</span>',
        },
        {
          children: [],
          id: '70fab184c3a1677bcdfda873470fbc9e',
          modified: 1587707473565,
          note: '<span>跳转到类型声明处（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;B</span>',
        },
        {
          children: [],
          id: '474716519c1507dec11f0452e0226a1c',
          modified: 1587707558742,
          note:
            '<span>在某个调用的方法名上使用会跳转到具体的实现处，可以跳过接口</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;B</span>',
        },
        {
          children: [],
          id: '633c838c44bc7a9e1bfd0f75b4e295bf',
          modified: 1587707694959,
          note: '<span>快速查看光标所在的方法/类的定义</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;I</span>',
        },
        {
          children: [],
          id: '2189c5f17b45eb0c2b4c12ecc2047dad',
          modified: 1587710021947,
          note:
            '<span>查找光标所在的方法&nbsp;/&nbsp;变量&nbsp;/&nbsp;类被调用的地方</span>',
          text: '<span>Alt&nbsp;+&nbsp;F7</span>',
        },
        {
          children: [],
          id: '2a053e66c8b3e3239925f9c306a803c8',
          modified: 1587710084722,
          note:
            '<span>显示使用的地方。寻找被该类或是变量被调用的地方，用弹出框的方式找出来</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;F7</span>',
        },
        {
          children: [],
          id: '853b89102dbc905020cd5582d578d6ab',
          modified: 1587710209609,
          note: '<span>弹出框查询所有使用的地方</span>',
          text:
            '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;Alt&nbsp;+&nbsp;F7</span>',
        },
        {
          children: [],
          id: 'dae1780d16d6fedc767bb868242ebd63',
          modified: 1587696286951,
          note:
            '<span>跳转到下一个&nbsp;高亮错误&nbsp;/&nbsp;警告位置&nbsp;（必备）</span>',
          text: '<span>F2</span>',
        },
        {
          children: [],
          id: '2708bac080e8d7d3f2ee5b7211454cfc',
          modified: 1587697144136,
          note: '<span>跳转到上一个高亮错误&nbsp;/&nbsp;警告位置</span>',
          text: '<span>Shift&nbsp;+&nbsp;F2</span>',
        },
        {
          id: 'f01719cf83252119',
          modified: 1587692370698,
          note: '<span>方法参数提示显示（必备）</span>',
          text: 'Ctrl + P',
        },
        {
          id: '16b1719cfa3f61113',
          modified: 1587692414594,
          note:
            '<span>光标所在的变量/类名/方法名等上面（也可以在提示补充的时候按），显示文档内容</span>',
          text: 'Ctrl + Q',
        },
        {
          id: '29f1719cfa7bbc0ad',
          modified: 1587692645493,
          note:
            '<span>前往当前光标所在的方法的父类的方法/接口定义（必备）</span>',
          text: 'Ctrl + U',
        },
        {
          id: '3b41719cfbcf90122',
          modified: 1587692661091,
          note: '<span>显示当前类的层次结构</span>',
          text: 'Ctrl + H',
        },
        {
          children: [],
          id: 'cdddbe227e1f1586a6646f3dd2e28cab',
          modified: 1587697217894,
          note: '<span>调用层次</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;H</span>',
        },
        {
          id: '3791719cfc5cd2045',
          modified: 1587692744824,
          note:
            '<span>弹出当前文件结构层，可以在弹出的层上直接输入，进行筛选</span>',
          text: 'Ctrl + F12',
        },
        {
          id: '2f7171a4c8c198097',
          modified: 1587692862248,
          note: '<span>显示当前文件结构</span>',
          text: 'Alt + 7',
        },
        {
          id: '1e8171a4cabf39096',
          modified: 1587692897657,
          note: '<span>定位/显示到当前文件的Navigation&nbsp;Bar</span>',
          text: 'Alt + Home',
        },
        {
          id: '4c171a4cad2710e1',
          modified: 1587692951314,
          note: '<span>高亮显示所有该选中文本，按Esc高亮消失（必备）</span>',
          text: 'Ctrl + Shift + F7',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '1e81719cf66464186',
      modified: 1588211083706,
      text: '<span class="bold">代码分析</span>',
    },
    {
      children: [
        {
          children: [],
          id: '0d4e61b06ecdfce0a9ac1df715473f88',
          modified: 1587707180396,
          note: '<span>等效于点击工具栏的&nbsp;Run&nbsp;按钮​</span>',
          text: '<span>Shift&nbsp;+&nbsp;F10</span>',
        },
        {
          children: [],
          id: '87e9c1d926c24f5678ceeb8af8cea42e',
          modified: 1587707180193,
          note: '<span>Run&nbsp;当前代码</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F10</span>',
        },
        {
          children: [],
          id: '93e7430773d0ce08269e0b416caf53d1',
          modified: 1587707208969,
          note: '<span>弹出&nbsp;Run&nbsp;的可选择菜单</span>',
          text: '<span>Alt+&nbsp;Shift&nbsp;+&nbsp;F10</span>',
        },
        {
          children: [],
          id: 'b9a811a5ba97a0970fd7a0da57fb503e',
          modified: 1587707197857,
          note: '<span>编译选中的文件/包/Module</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F9</span>',
        },
        {
          children: [],
          id: 'f0fa2cbaa0b211e0d10af1f7b06f480d',
          modified: 1587696731851,
          note:
            '<span>Debug&nbsp;模式下,如当前行断点是一个方法,则进入当前方法,如果该方法体还有方法,则不会进入该内嵌方法</span>',
          text: '<span>F7</span>',
        },
        {
          children: [],
          id: 'ff3eb9aa55421176b359a76703582057',
          modified: 1587696737515,
          note:
            '<span>Debug&nbsp;模式下,如当前行断点是一个方法,则不进入当前方法</span>',
          text: '<span>F8</span>',
        },
        {
          children: [],
          id: '5e144e9ae1044441d2ca6944a99da8da',
          modified: 1587696742988,
          note:
            '<span>Debug&nbsp;模式下,恢复程序运行,但是如果该断点下面代码还有断点则停在下一个断点上</span>',
          text: '<span>F9</span>',
        },
        {
          children: [],
          id: '1887c0ac4e887c48e1f3e61035f319f2',
          modified: 1587696981358,
          note:
            '<span>在&nbsp;Debug&nbsp;模式下，设置光标当前行为断点，如果当前已经是断点则去掉断点</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;F8</span>',
        },
        {
          children: [],
          id: '010523409be9ed7113928e0b87750841',
          modified: 1587696388440,
          note: '<span>等效于点击工具栏的&nbsp;Debug&nbsp;按钮</span>',
          text: '<span>Shift&nbsp;+&nbsp;F9</span>',
        },
        {
          children: [],
          id: '64a95b9729077a2eb930406eb3ae3794',
          modified: 1587696417796,
          note:
            '<span>在&nbsp;Debug&nbsp;模式下，跳出，表现出来的效果跟&nbsp;F9&nbsp;一样</span>',
          text: '<span>Shift&nbsp;+&nbsp;F8</span>',
        },
        {
          children: [],
          id: '6ef0efd6160a3d0cb544777487533c62',
          modified: 1587696699091,
          note: '<span>在&nbsp;Debug&nbsp;模式下，指定断点进入条件</span>',
          text: '<span>Ctrl&nbsp;&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F8</span>',
        },
        {
          children: [],
          id: '93cd87d1e406a20dc89eb3b2a92aa058',
          modified: 1587696435543,
          note:
            '<span>在&nbsp;Debug&nbsp;模式下，智能步入。断点所在行上有多个方法调用，会弹出进入哪个方法</span>',
          text: '<span>Shift&nbsp;+&nbsp;F7</span>',
        },
        {
          children: [],
          id: 'e9c817c44fc4c5bdad121e5233441a8e',
          modified: 1587696559744,
          note: '<span>弹出&nbsp;Debug&nbsp;的可选择菜单</span>',
          text: '<span>Alt+&nbsp;Shift&nbsp;+&nbsp;F9</span>',
        },
        {
          children: [],
          id: '0ba23dd1b9f7eaef2320f8b8eefb202a',
          modified: 1587696576053,
          note: '<span>Debug&nbsp;模式下,进入当前方法体内</span>',
          text: '<span>Alt+&nbsp;Shift&nbsp;+&nbsp;F7</span>',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: 'a23f296fbc74f05d7ab59f5706e08ce1',
      modified: 1588211088603,
      text: '<span class="bold">代码运行</span>',
    },
    {
      children: [
        {
          id: 'fd1719a38daea01f',
          modified: 1587692981194,
          note: '<span>在当前文件进行文本替换&nbsp;（必备）</span>',
          text: 'Ctrl&nbsp;+&nbsp;R',
        },
        {
          children: [],
          id: '8b05c568405e4c86a78ec5762dcd9db5',
          modified: 1587697273175,
          note:
            '<span>根据输入内容替换对应内容，范围为整个项目或&nbsp;指定目录内文件&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R</span>',
        },
        {
          children: [],
          id: 'c97b2472edb177a6d90f33146c3604c5',
          modified: 1587692993875,
          note: '<span>撤销&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Z</span>',
        },
        {
          children: [],
          id: 'af73582bf4370580e5de45ebaf1d6ebb',
          modified: 1587693005546,
          note: '<span>删除光标所在行或&nbsp;删除选中的行&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Y</span>',
        },
        {
          children: [],
          id: 'b52173ea10b87aba9c7c651ca303da83',
          modified: 1587693046391,
          note: '<span>复制光标所在行&nbsp;/&nbsp;复制选择内容</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;C</span>',
        },
        {
          children: [],
          id: '5ab4b9069d3faaaba4b6f3bdc0e774f4',
          modified: 1587693043965,
          note: '<span>剪切光标所在行&nbsp;/&nbsp;&nbsp;剪切选择内容</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;X</span>',
        },
        {
          children: [],
          id: '7fc3e0f9868c505732ede790174d3507',
          modified: 1587693066525,
          note:
            '<span>复制光标所在行&nbsp;/&nbsp;复制选择内容，并把复制内容插入光标位置下面&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;D</span>',
        },
        {
          id: '3421719a5047cf13b',
          modified: 1587693085644,
          note: '<span>取消撤销&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + Z',
        },
        {
          id: '1181719a5191500df',
          modified: 1587693103734,
          note: '<span>删除光标后面的单词或是中文句&nbsp;（必备）</span>',
          text: 'Ctrl + Delete',
        },
        {
          id: 'c81719a51b548156',
          modified: 1587693125627,
          note: '<span>删除光标前面的单词或是中文句&nbsp;（必备）</span>',
          text: 'Ctrl + BackSpace',
        },
        {
          id: '10d1719a62e1eb13e',
          modified: 1587693145263,
          note:
            '<span>光标所在行上空出一行，光标定位到新行&nbsp;（必备）</span>',
          text: 'Ctrl  + Alt + Enter',
        },
        {
          id: '1031719a6a5ed017a',
          modified: 1587693160005,
          note: '<span>复制当前文件磁盘路径到剪贴板&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + C',
        },
        {
          id: '951719a6a8ab00e4',
          modified: 1588924331033,
          note: '<span>删除变量、方法、类、文件等</span>',
          text: 'Alt + Delete',
        },
        {
          children: [],
          id: '5656e8d677b900c0b29a17d180d6e9aa',
          modified: 1588924352813,
          note: '<span>批量修改名称</span>',
          text: '<span>Shift + F6</span>',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      finish: false,
      id: 'f0fd07f15edb751db7c57e85ea443bcf',
      modified: 1588211091285,
      text: '<span class="bold">文本编辑</span>',
    },
    {
      children: [
        {
          id: '1811719a5d0c8815f',
          modified: 1587693233780,
          note: '<span>在当前文件跳转到指定行处</span>',
          text: 'Ctrl + G',
        },
        {
          id: '2791719a50f0b7013',
          modified: 1587693244777,
          note: '<span>递进式选择代码块（必备）</span>',
          text: 'Ctrl + W',
        },
        {
          id: '34a1719a51059710b',
          modified: 1587693260160,
          note: '<span>递进式取消选择代码块&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + W',
        },
        {
          children: [],
          id: '0bc858229f03c6e866ee62d3d0ad6bc4',
          modified: 1587708127423,
          note:
            '<span>光标跳转到当前单词&nbsp;/&nbsp;中文句的左侧开头位置&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;&nbsp;&nbsp;←</span>',
        },
        {
          children: [],
          id: '9bf003a48946bd142c9127760f782a9f',
          modified: 1587708132379,
          note:
            '<span>光标跳转到当前单词&nbsp;/&nbsp;中文句的右侧开头位置&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;&nbsp;→&nbsp;</span>',
        },
        {
          id: '641719a529021174',
          modified: 1587693315734,
          note: '<span>展开/折叠代码</span>',
          text: 'Ctrl + +/-',
        },
        {
          id: '34d1719a52d94011c',
          modified: 1587693343579,
          note: '<span>展开/折叠所有代码&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + +/-',
        },
        {
          id: '1ca1719a537558105',
          modified: 1587694335941,
          note: '<span>跳到文件头</span>',
          text: 'Ctrl + Home',
        },
        {
          id: '15f1719a53874802d',
          modified: 1587694343420,
          note: '<span>跳到文件尾</span>',
          text: 'Ctrl + End',
        },
        {
          id: '36b1719a5880dd08b',
          modified: 1587694359158,
          note: '<span>选中光标到当前行头位置</span>',
          text: 'Shift + Home',
        },
        {
          id: '1351719a5896bc06a',
          modified: 1587694364930,
          note: '<span>选中光标到当前行尾位置</span>',
          text: 'Shift + End',
        },
        {
          id: '1d51719a58a8b401c',
          modified: 1587694381088,
          note:
            '<span>开始新一行。光标所在行下空出一行，光标定位到新行位置&nbsp;（必备）</span>',
          text: 'Shift + Enter',
        },
        {
          children: [],
          id: '2a41719a62313b15',
          modified: 1587694406423,
          note: '<span>退回到上一个操作的地方&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;←</span>',
        },
        {
          id: '6c1719a6362db187',
          modified: 1587694480863,
          note: '<span>前往到下一个操作的地方&nbsp;（必备）</span>',
          text: 'Ctrl + Alt + → ',
        },
        {
          id: 'b1719a67896f0b6',
          modified: 1587694501591,
          note: '<span>移动光标到当前所在代码的花括号开始位置</span>',
          text: 'Ctrl + [',
        },
        {
          id: '1f1719a679c76021',
          modified: 1587694509680,
          note: '<span>移动光标到当前所在代码的花括号结束位置</span>',
          text: 'Ctrl + ]',
        },
        {
          id: '2c1719a67ad9e00e',
          modified: 1587694526207,
          note:
            '<span>选中从光标所在位置到它的顶部中括号位置&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + [',
        },
        {
          id: '3501719a683a1f123',
          modified: 1587694531943,
          note:
            '<span>选中从光标所在位置到它的底部中括号位置&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + ]',
        },
        {
          id: '2e2171a4ac7aac024',
          modified: 1587708423623,
          note: '<span>移动光标到当前所在代码的开始或结束位置</span>',
          text: 'Ctrl + Shift + M',
        },
        {
          children: [],
          id: 'fdb265cb2a9906c703b6efa1b14acb2a',
          modified: 1587708151478,
          note: '<span>切换当前已打开的窗口中的子视图&nbsp;（必备）</span>',
          text: '<span>Alt+&nbsp;&nbsp;&nbsp;←</span>',
        },
        {
          children: [],
          id: 'eb15329ee046d61d2156c6f094084563',
          modified: 1587708160557,
          note: '<span>按切换当前已打开的窗口中的子视图&nbsp;（必备）</span>',
          text: '<span>Alt+&nbsp;&nbsp;→&nbsp;</span>',
        },
        {
          id: '380171a4c5fd430af',
          modified: 1587694547743,
          note:
            '<span>当前光标跳转到当前文件的前一个方法名位置&nbsp;（必备）</span>',
          text: 'Alt + ↑',
        },
        {
          id: '2e1171a4c60e81069',
          modified: 1587694556471,
          note:
            '<span>当前光标跳转到当前文件的后一个方法名位置&nbsp;（必备）</span>',
          text: 'Alt + ↓',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '791719a50d5580ba',
      modified: 1588211094148,
      text: '<span class="bold">代码选择</span>',
    },
    {
      children: [
        {
          id: '2911719a5d7db00df',
          modified: 1587694572415,
          note: '<span>弹出&nbsp;SearchEverywhere&nbsp;弹出层</span>',
          text: 'double Shift',
        },
        {
          id: '691719a38a4aa156',
          modified: 1587694585217,
          note: '<span>在当前文件进行文本查找&nbsp;（必备）</span>',
          text: 'Ctrl&nbsp;+&nbsp;F',
        },
        {
          id: '2b01719a38bd2b0dd1',
          modified: 1587694600872,
          note:
            '<span>根据输入的&nbsp;类名&nbsp;查找类文件&nbsp;（必备）</span>',
          text: 'Ctrl + N',
        },
        {
          id: '1de1719a4ef87e06b',
          modified: 1587694627449,
          note:
            '<span>根据输入内容查找整个项目或&nbsp;指定目录内文件&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + F',
        },
        {
          id: '29c1719a4f38bd023',
          modified: 1587694640185,
          note:
            '<span>通过文件名定位/打开文件/目录,打开目录需要在输入的内容后面多加一个/&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + N',
        },
        {
          id: '2f21719a4f5b05141',
          modified: 1587695230746,
          note: '<span>查找动作/设置</span>',
          text: 'Ctrl + Shift + A',
        },
        {
          id: '2201719a5ef510033',
          modified: 1587695245181,
          note: '<span>前往指定的变量/方法</span>',
          text: 'Ctrl + Shift + Alt + N',
        },
        {
          id: '21a171a4dfb94205c',
          modified: 1587695336388,
          note: '<span>在查找模式下，定位到下一个匹配处</span>',
          text: 'F3',
        },
        {
          id: '268171a4dfbfbe09',
          modified: 1587695344114,
          note: '<span>在查找模式下，查找匹配上一个</span>',
          text: 'Shift + F3',
        },
        {
          children: [],
          id: 'fb7f62aa76601284873360b061d0022c',
          modified: 1587697657173,
          note: '<span>调转到所选中的词的下一个引用位置&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;F3</span>',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '512efaa95b95cdbdb419575e0e2af52c',
      modified: 1588211097893,
      text: '<span class="bold">内容查找</span>',
    },
    {
      children: [
        {
          id: '1b91719cf8f5b3177',
          modified: 1587695373702,
          note: '<span>插入自定义动态代码模板&nbsp;（必备）</span>',
          text: 'Ctrl + J',
        },
        {
          id: '2181719a4dea5510f',
          modified: 1587695393182,
          note: '<span>基础代码补全（必备）</span>',
          text: 'Ctrl + Space (Alt + /)',
        },
        {
          id: '3ac1719a4e11d50aa',
          modified: 1587695411164,
          note: '<span>智能代码提示</span>',
          text: 'Ctrl + Shift + Space',
        },
        {
          id: '12a1719a596175072',
          modified: 1587695423463,
          note: '<span>自动结束代码，行末自动添加分号&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + Enter',
        },
        {
          id: '16d171a4f0678a003',
          modified: 1587696927554,
          note:
            '<span>代码自动生成，如生成对象的&nbsp;set&nbsp;/&nbsp;get&nbsp;方法，构造函数，toString()&nbsp;等&nbsp;（必备）</span>',
          text: 'Alt + Insert',
        },
        {
          children: [],
          id: '062fe5f6100cdb0b59cecf6ca9f6eb74',
          modified: 1587696910025,
          note:
            '<span>根据光标所在问题，提供快速修复选择，光标放在的位置不同提示的结果也不同&nbsp;（必备）</span>',
          text: '<span>Alt&nbsp;+&nbsp;Enter</span>',
        },
        {
          id: '118171a4f07e45057',
          modified: 1587695459077,
          note: '<span>弹出模板选择窗口，将选定的代码加入动态模板中</span>',
          text: 'Ctrl + Alt + J',
        },
        {
          id: 'de171a4f86c750d8',
          modified: 1587695471201,
          note: '<span>选择可重写的方法</span>',
          text: 'Ctrl + O',
        },
        {
          id: '1bd171a4f87c850d7',
          modified: 1587695476455,
          note: '<span>选择可继承的方法</span>',
          text: 'Ctrl + I',
        },
        {
          id: '36d171a4f88a4e007',
          modified: 1587695491113,
          note:
            '<span>对当前类生成单元测试类，如果已经存在的单元测试类则可以进行选择&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + T',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '24c1719a390ede07f',
      modified: 1588211100429,
      text: '<span class="bold">代码辅助</span>',
    },
    {
      children: [
        {
          id: '7e1719a69e7e405d',
          modified: 1587695514102,
          note:
            '<span>注释光标所在行代码，会根据当前不同文件类型使用不同的注释符号&nbsp;（必备）</span>',
          text: 'Ctrl + /',
        },
        {
          id: '2361719a6a0e28057',
          modified: 1587695526017,
          note: '<span>代码块注释&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + /',
        },
        {
          id: '01719a57dbcf186',
          modified: 1587695537679,
          note: '<span>缩进&nbsp;（必备）</span>',
          text: 'Tab',
        },
        {
          id: '1631719a57e3b3178',
          modified: 1587697169808,
          note: '<span>取消缩进&nbsp;（必备）</span>',
          text: 'Shift + Tab',
        },
        {
          id: '2bd1719a4ec9d50f',
          modified: 1587695567731,
          note:
            '<span>格式化代码，可以对当前文件和整个包目录使用&nbsp;（必备）</span>',
          text: 'Ctrl + Alt + L',
        },
        {
          id: '27e1719a54fdb10cd',
          modified: 1587695578844,
          note:
            '<span>优化导入的类，可以对当前文件和整个包目录使用&nbsp;（必备）</span>',
          text: 'Ctrl + Alt + O',
        },
        {
          id: '3b1719a551b81084',
          modified: 1587695584434,
          note:
            '<span>光标所在行或&nbsp;选中部分进行自动代码缩进，有点类似格式化</span>',
          text: 'Ctrl + Alt + I',
        },
        {
          id: '3341719a55d9b20ee',
          modified: 1587695589823,
          note: '<span>对选中的代码弹出环绕选项弹出层&nbsp;（必备）</span>',
          text: 'Ctrl + Alt + T',
        },
        {
          children: [],
          id: 'dd0b8c938b8b1898ea4d311e5e44362a',
          modified: 1587697383580,
          note: '<span>对选中的代码进行大/小写轮流转换&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;U</span>',
        },
        {
          children: [],
          id: 'b0749803ea64eb61acf97877ed864ac6',
          modified: 1587697424067,
          note: '<span>自动将下一行合并到当前行末尾&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;J</span>',
        },
        {
          id: '17d171a5581006134',
          modified: 1587698614738,
          note: '<span>快速移除环绕代码（必备）</span>',
          text: 'Ctrl + Shift + Delete',
        },
        {
          id: '1f31719a60aab10b8',
          modified: 1587698569393,
          note: '<span>重构-快速提取参数到方法</span>',
          text: 'Ctrl + Alt + P',
        },
        {
          id: 'b71719a60bdc117d',
          modified: 1587695642152,
          note: '<span>重构-快速提取常量</span>',
          text: 'Ctrl + Alt + C',
        },
        {
          id: '2781719a60db8907b',
          modified: 1587695646796,
          note: '<span>重构-快速提取成员变量</span>',
          text: 'Ctrl + Alt + F',
        },
        {
          id: '2f71719a60ed89116',
          modified: 1587695651759,
          note: '<span>重构-快速提取变量</span>',
          text: 'Ctrl + Alt + V',
        },
        {
          id: '1fc1719a6101a1072',
          modified: 1587698648027,
          note: '<span>重构-快速提取方法</span>',
          text: 'Ctrl + Alt + M',
        },
        {
          id: '170171a50f8bc707a',
          modified: 1587695708346,
          note: '<span>对文件&nbsp;/&nbsp;文件夹&nbsp;重命名</span>',
          text: 'Shift + F6',
        },
        {
          id: '123171a4fbad80132',
          modified: 1587695724583,
          note: '<span>移动光标所在行向上移动&nbsp;（必备）</span>',
          text: 'Alt + Shift + ↑',
        },
        {
          id: '3e1171a556b2f70d41',
          modified: 1587695730895,
          note: '<span>移动光标所在行向下移动&nbsp;（必备）</span>',
          text: 'Alt + Shift + ↓',
        },
        {
          id: '2f9171a5572089015',
          modified: 1587695741958,
          note:
            '<span>光标放在方法名上，将方法移动到上一个方法前面，调整方法排序&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + ↑',
        },
        {
          id: '382171a55742300ce1',
          modified: 1587695748189,
          note:
            '<span>光标放在方法名上，将方法移动到下一个方法前面，调整方法排序&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + ↓',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '3421719a4ea685088',
      modified: 1588211102781,
      text: '<span class="bold">代码优化</span>',
    },
    {
      children: [
        {
          children: [],
          id: 'b96f18f1932b4837a8a0b72316e90c77',
          modified: 1587698075038,
          note: '<span>显示版本控制常用操作菜单弹出层&nbsp;（必备）\n</span>',
          text: '<span>Alt&nbsp;+&nbsp;`</span>',
        },
        {
          children: [],
          id: '119d12e83c5d57038e2e7c98eb6780be',
          modified: 1587698335982,
          note:
            '<span>版本控制提交项目，需要此项目有加入到版本控制才可用</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;K</span>',
        },
        {
          children: [],
          id: '362672307519ec64e0d0a3d81edaac0c',
          modified: 1587698341798,
          note:
            '<span>版本控制更新项目，需要此项目有加入到版本控制才可用</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;T</span>',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: 'f8722f633a62a9de9093de500893f5a0',
      modified: 1588211106748,
      text: '<span class="bold">版本控制</span>',
    },
    {
      children: [
        {
          children: [],
          id: 'e9379785627afb3afa2dc5bcaf9936cf',
          modified: 1587699037528,
          note: '<span>弹出该文件路径&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;F12</span>',
        },
        {
          children: [],
          id: '95bdeae5edc61f50c699ffdec013a558',
          modified: 1587698510966,
          note: '<span>在打开的文件标题上，弹出该文件路径&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;鼠标左击</span>',
        },
        {
          children: [],
          id: 'a512cccc101974ac74e1d5b79fca9c37',
          modified: 1587698510966,
          note:
            '<span>显示当前文件选择目标弹出层，弹出层中有很多目标可以进行选择&nbsp;（必备）</span>',
          text: '<span>Alt&nbsp;+&nbsp;F1&nbsp;</span>',
        },
        {
          id: '3d91719a6622ad0cd',
          modified: 1587695948145,
          note:
            '<span>打开&nbsp;IntelliJ&nbsp;IDEA&nbsp;系统设置&nbsp;（必备）</span>',
          text: 'Ctrl + Alt + S',
        },
        {
          children: [],
          id: 'e2ca4ece459661f92079c2c07dcf4ed2',
          modified: 1587695935784,
          note: '<span>打开当前项目设置&nbsp;（必备）</span>',
          text:
            '<span>Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;Alt&nbsp;+&nbsp;S</span>',
        },
        {
          id: '1e81719a6ac4e9048',
          modified: 1587695783469,
          note: '<span>编辑器最大化&nbsp;（必备）</span>',
          text: 'Ctrl + Shift + F12',
        },
        {
          children: [],
          id: 'b668c7f1afc8ffaea9118a4d829fe472',
          modified: 1587698152957,
          note: '<span>隐藏当前或&nbsp;最后一个激活的工具窗口</span>',
          text: '<span>Shift&nbsp;+&nbsp;Esc</span>',
        },
        {
          children: [],
          id: 'c35c9da5957b6b21ba3a103c7d387d9a',
          modified: 1587698256382,
          note: '<span>从工具窗口进入代码文件窗口&nbsp;（必备）</span>',
          text: '<span>Esc</span>',
        },
        {
          children: [],
          id: '7d1cac8c48adcbcde7d6fd48e6d11365',
          modified: 1587699079421,
          note:
            '<span>编辑窗口切换，如果在切换的过程又加按上delete，则是关闭对应选中的窗口</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;Tab</span>',
        },
        {
          children: [],
          id: '316efdfb6f26538cfe36b0d2362349a6',
          modified: 1587699100691,
          note: '<span>显示最近打开的文件记录列表&nbsp;（必备）</span>',
          text: '<span>Ctrl&nbsp;+&nbsp;E</span>',
        },
      ],
      collapsed: false,
      color: '#dc2d1e',
      id: '3681719a65e0ae135',
      modified: 1588211109956,
      text: '<span class="bold">IDE相关</span>',
    },
  ],
};

data = data.nodes;

let content = [...data].reduce((acc, node) => {
  const title = node.text.substr(19, 4);
  acc += `## ${title} \r\n\r\n`;
  const __content = `
| 描述                                                | Windows                     | Mac Os              |
| --------------------------------------------------- | ----------------------- | -------------------- | \r\n`;

  // find children
  const childrenStr = node.children.reduce((__acc, subNode) => {
    __acc += `|${subNode.note} | \`${subNode.text}\`  |  | \r\n`;
    return __acc;
  }, __content);
  acc += childrenStr;

  return acc;
}, '');
content = _.replace(content, /\<span\>/g, '');
content = _.replace(content, /\<\/span\>/g, '');
content = _.replace(content, /&nbsp;/g, ' ');
content = _.replace(content, /（必备）/g, '👓');

fs.writeFileSync(__dirname + '/idea.md', content);

```



:::