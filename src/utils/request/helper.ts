const toString = Object.prototype.toString;

function isArray(v) {
  return toString.call(v) === "[object Array]";
}

function isPlainObject(v) {
  if (toString.call(v) !== "[object Object]") {
    return false;
  }
  const prototype = Object.getPrototypeOf(v);
  return prototype === null || prototype === Object.prototype;
}

function forEach(o, f) {
  if (o === null || typeof o === "undefined") {
    return;
  }
  if (typeof o !== "object") {
    o = [o];
  }
  if (isArray(o)) {
    for (let i = 0; i < o.length; i++) {
      f.call(null, o[i], i, o);
    }
  } else {
    for (const k in o) {
      if (Object.prototype.hasOwnProperty.call(o, k)) {
        f.call(null, o[k], k, o);
      }
    }
  }
}

function merge(...arges) {
  const args: any[] = [];
  for (let _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  const res: any = {};
  function assignValue(v, k) {
    if (isPlainObject(res[k] && isPlainObject(v))) {
      res[k] = merge(res[k], v);
    } else if (isPlainObject(v)) {
      res[k] = merge({}, v);
    } else if (isArray(v)) {
      res[k] = v.slice();
    } else {
      res[k] = v;
    }
  }
  for (let i = 0; i < args.length; i++) {
    forEach(args[i], assignValue);
  }
  return res;
}

export default {
  forEach,
  merge,
  isArray,
};
