function isType(type){
	return function(el){
		return Object.prototype.toString.call(el) === '[object '+type+']'
	}
}
var isArray = isType('Array')
var isObject = isType('Object')
var isFunction = isType('Function')
var isString = isType('String')
var isNumber = isType('Number');

var isUndefined = function(obj){
	return typeof obj === 'undefined'
}
var extend = (function(){
	if (typeof Object.assign === 'function') {
		return Object.assign
	} else {
		return function(target) {
			if (target == null) {
				throw new TypeError('Cannot convert undefined or null to object')
			}
			target = Object(target)
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index]
				if (source != null) {
					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key]
						}
					}
				}
			}
			return target
		}
	}
})()



function isEmptyObject(obj){
	return isObject(obj) && Object.keys(obj).length === 0
}


export default  {
    isEmptyObject:isEmptyObject,
    isArray:isArray,
    isObject : isObject,
    isFunction : isFunction,
    isString : isString,
    isUndefined : isUndefined,
    extend : extend,
    isNumber : isNumber
}
