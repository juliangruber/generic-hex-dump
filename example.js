var Dump = require('./');

var buf = Buffer('abcdefghijklmnopqrstuvwxyz0123456789><\x00\x00');
var dump = new Dump(buf.length);

var lines = dump.lines();
for (var i = 0; i < lines; i++) {
  var off = i * 16;
  var slice = buf.slice(off, off + 16);
  console.log(
    dump.offset(i),
    dump.hex(slice).join(' '),
    dump.strings(slice).join('')
  );
}

