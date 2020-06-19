```javascript
const params = {
  force: '1',
  openid: '1',
  third: '1',
  timestamp: '1',
  type: '1',
  unionid: '1',
  uid: '1',
  a: {
    force: '1',
    openid: '1',
    third: '1',
    timestamp: '1',
    type: '1',
    unionid: '1',
    uid: '1',
    a: 1,
  },
};

const keySort = (json) => {
  const sortedKeys = Object.keys(json)
    .filter((f) => ![null, undefined].some((s) => s == json[f]))
    .sort();

  return sortedKeys.reduce((acc, key) => {
    if (json[key] && typeof json[key] === 'object') {
      acc[key] = keySort(json[key]);
    } else {
      acc[key] = json[key];
    }
    return acc;
  }, {});
};

console.log('keySort(params): ', keySort(params));

```

