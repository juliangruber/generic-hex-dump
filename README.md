
# generic-hex-dump

  Get individual lines of a typical hex dump.

## Example

```js
var Dump = require('generic-hex-dump');

var buf = Buffer('abcdefghijklmnopqrstuvwxyz0123456789><\x00\x00');
var dump = new Dump(buf.length);

var lines = dump.lines();
for (var i = 0; i < lines; i++) {
  var slice = dump.slice(buf, i);
  console.log(
    dump.offset(i),
    dump.hex(slice).join(' '),
    dump.strings(slice).join('')
  );
}
```

Output:

```bash
$ node example.js
000000 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 abcdefghijklmnop
000010 71 72 73 74 75 76 77 78 79 7a 30 31 32 33 34 35 qrstuvwxyz012345
000020 36 37 38 39 3e 3c 00 00 6789><..
```

## Installation

```bash
$ npm install generic-hex-dump
```

## API

### Dump(length)

  Create a new dump for a buffer of total `length`.

### .lines()

  Get the number of lines the dump will have.

### .slice(buf, line)

  Get `buf`'s slice for `line`.

### .offset(line)

  Print the offset column for `line`.

### .hex(slice)

  Create an array of 2-character hex strings for each byte in `slice`.

### .strings(slice)

  Create an array of 1-character strings for each byte in `slice`, defaulting to `.` if a byte's value isn't human readable.

### .offsetWidth

  Get the width of the offset column.

## License

  MIT

