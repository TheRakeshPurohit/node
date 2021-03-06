// Flags: --expose-internals --frozen-intrinsics
'use strict';
require('../common');
const assert = require('assert');
const { E, SystemError, codes } = require('internal/errors');

E('ERR_TEST', 'custom message', SystemError);
const { ERR_TEST } = codes;

const ctx = {
  code: 'ETEST',
  message: 'code message',
  syscall: 'syscall_test',
  path: '/str',
  dest: '/str2'
};
assert.throws(
  () => { throw new ERR_TEST(ctx); },
  {
    code: 'ERR_TEST',
    name: 'SystemError',
    info: ctx,
  }
);
