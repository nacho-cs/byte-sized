# byte-size

## Easily convert an exact byte measurement to a file size and vice versa

---

## [Install:](#install)

Run:

```console
$ npm i byte-size
```

Then add either:

```javascript
import bytes from "byte-sized"; // ES6
```

or

```javascript
const bytes = require("byte-sized"); // CommonJS
```

to your JS code

---

## [How to use](#how-to-use)

From there, simply call the function `bytesize()` and pass in a value, going up to **petabytes**

```javascript
import bytes from "byte-sized";
console.log(bytes(696969)); // 680.63 KB
console.log(bytes("69 KB")); // 70656 bytes
```
