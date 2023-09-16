# Result

The result of the file reading are

|      | 6KB    | 124KB  | 9MB     | 40MB     | 123MB    | Total   |
| ---- | ------ | ------ | ------- | -------- | -------- | ------- |
| Bun  | 0.98ms | 0.20ms | 2.90ms  | 7.18ms   | 21.89ms  | 35.60ms |
| Node | 0.33ms | 2.32ms | 3.202ms | 11.979ms | 34.314ms | 57.75ms |

The interesting conclusion from the tests I ran is that node.js is faster in reading small files but once the file gets bigger the speed starts to decrease significantly while bun's speed starts to take over.
