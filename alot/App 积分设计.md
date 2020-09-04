### App 积分设计

![image-20200720205312878](file:///Users/mac/atom.hu/self/code/atom-blog/.vuepress/public/image-20200720205312878.png?lastModify=1599239954)

![image-20200720205344332](file:///Users/mac/atom.hu/self/code/atom-blog/.vuepress/public/image-20200720205344332.png?lastModify=1599239954)

考虑会有哪些表？

| 表名                                | 描述                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| 规则表（mcenter_honor_rule)         | 记录添加积分会有哪些规则，例如：有的操作是只触发一次，有的操作可以多次触发 |
| 积分等级表（mcenter_member_level）  | 记录当前系统会员有哪些等级（大众会员、黄金会员、铂金会员、钻石会员） |
| 积分记录表（mcenter_score_record)   | 记录会员的加分记录，什么时间 因为什么操作 加了 多少分        |
| 积分记录表（mcenter_score_collect） | 记录会员的总分                                               |