let CODE = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
let crypto = require('crypto');

function toAcceptKey(wsKey) {
  return crypto
    .createHash('sha1')
    .update(wsKey + CODE)
    .digest('base64');
}

function unmask(buffer, mask) {
  const length = buffer.length;
  for (let i = 0; i < length; i++) {
    buffer[i] ^= mask[i % 4];
  }
}

function toHeaders(rows) {
  let headers = {};
  rows.forEach((row) => {
    let [key, value] = row.split(': ');
    headers[key] = value;
  });
  return headers;
}

exports.toAcceptKey = toAcceptKey;
exports.unmask = unmask;
exports.toHeaders = toHeaders;
