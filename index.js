
module.exports = Dump;

function Dump(length){
  this._length = length;
  this._offsetWidth = Math.max(length.toString(16).length, 6);
  this._lines = Math.ceil(length / 16);
  this._replace = {};
}

Dump.prototype.offset = function(line){
  return pad(line * 16, this._offsetWidth);
};

Dump.prototype.hex = function(buf){
  var out = [];
  for (var i = 0; i < buf.length; i++) {
    out.push(pad(buf[i], 2));
  }
  return out;
};

Dump.prototype.strings = function(buf){
  var out = [];
  for (var i = 0; i < buf.length; i++) {
    var char = buf[i];
    if (this._replace[char]) {
      char = this._replace[char];
    } else if (!this.printable(char)) {
      char = '.'.charCodeAt(0);
    }
    out.push(String.fromCharCode(char));
  }
  return out;
};

Dump.prototype.lines = function(){
  return this._lines;
};

Dump.prototype.printable = function(v){
  return v >= 32 && v <= 126;
};

Dump.prototype.replace = function(from, to){
  if (typeof from == 'string') from = from.charCodeAt(0);
  if (typeof to == 'string') to = to.charCodeAt(0);
  this._replace[from] = to;
};

Dump.prototype.slice = function(buf, line){
  var off = line * 16;
  return buf.slice(off, off + 16);
};

Dump.prototype.offsetWidth = function(){
  return this._offsetWidth;
};

function pad(n, max){
  var out = n.toString(16);
  while (out.length < max) out = '0' + out;
  return out;
}
