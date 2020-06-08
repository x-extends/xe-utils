function helperCreateTreeFunc (handle) {
  return function (obj, iterate, options, context) {
    var opts = options || {}
    var optChildren = opts.children || 'children'
    return handle(null, obj, iterate, context, [], [], optChildren, opts)
  }
}

module.exports = helperCreateTreeFunc
