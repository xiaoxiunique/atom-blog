### Node CryptoJs 加解密

```js
const CryptoJS = require("crypto-js");
//aes加密
export function aesEncrypt(data, secretKey) {
  const result = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(secretKey), {
    iv: CryptoJS.enc.Utf8.parse("偏移量"),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return result.toString();
}

//aes解密
export function aesDecrypt(cipher, secretKey) {
  const decrypted = CryptoJS.AES.decrypt(cipher, CryptoJS.enc.Utf8.parse(secretKey), { 
    iv: CryptoJS.enc.Utf8.parse('偏移量'),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decrypted);
}
```

