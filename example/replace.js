var Dump = require('..');

var buf = Buffer('   \n   \r   \t   ');
var dump = new Dump(buf.length);

dump.replace('\n'.charCodeAt(0), 'N'.charCodeAt(0));
dump.replace('\r', '␍');
dump.replace('\t', 'T');

var lines = dump.lines();
for (var i = 0; i < lines; i++) {
  var slice = dump.slice(buf, i);
  console.log(
    dump.offset(i),
    dump.hex(slice).join(' '),
    dump.strings(slice).join('')
  );
}

