```
async function __replaceImagesToPayLoad(model, ret) {

 ret = ret.filter((F) => F.images.length > 0);

 ret = ret.filter((F) => !F.images[0].file);

 [...ret].forEach((art) => {

  console.log("art: ", art.images);

 });

}
```

