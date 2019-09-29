//Your code here

function justInvoke(fn) {
  result = fn();
  return result;
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue);
}