var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (hljs) {
    var LITERAL = {
      className: 'literal',
      begin: '[\\+\\-]',
      relevance: 0
    };
    return {
      aliases: ['bf'],
      contains: [hljs.COMMENT('[^\\[\\]\\.,\\+\\-<> \r\n]', '[\\[\\]\\.,\\+\\-<> \r\n]', {
        returnEnd: true,
        relevance: 0
      }), {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      }, {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      }, {
        // this mode works as the only relevance counter
        begin: /(?:\+\+|\-\-)/,
        contains: [LITERAL]
      }, LITERAL]
    };
  };

  return exports;
}