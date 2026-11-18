function helperFunctionApply (fn, context, args) {
  return fn.apply(context, args)
}

module.exports = helperFunctionApply
