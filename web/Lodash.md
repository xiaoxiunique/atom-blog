记录一些常见的 Lodash 操作

### _.keyBy

```javascript
const userList = [
  {
    name: "lisi",
    age: 18,
  },
  {
    name: "zhangsan",
    age: 18,
  },
];

console.log(_.keyBy(userList, "name"));

{
  lisi: { name: 'lisi', age: 18 },
  zhangsan: { name: 'zhangsan', age: 18 }
}
```



### _.uniq



```javascript
const list = [1, 1, 2, 3];

console.log(_.uniq(list));
```



### _.uniqBy

对象去重

```javascript
const list = [
  {
    name: "zhangshan",
    age: "18",
  },
  {
    name: "zhangshan",
    age: "19",
  },
  {
    name: "lisi",
    age: "19",
  },
];

console.log('_.uniqBy(list, "name"): ', _.uniqBy(list, "name"));

[ { name: 'zhangshan', age: '18' }, { name: 'lisi', age: '19' } ]
```



### _.keys

=== Object.assign

```javascript
console.info(_.keys({
  name: 1,
  age: 18
}));

[ 'name', 'age' ]
```

















