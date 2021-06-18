export function $(selector) {
  return document.querySelector(selector);
}

export function toggle(selector, status) {
  let styleStr = status ? 'block' : 'none'
  $(selector).setAttribute('style', `display:${styleStr}`);
}

export function toggleClass(selector, classname, status) {
  let action = status ? 'add' : 'remove';
  $(selector).classList[action](classname);
}

export function emit(eventName) {
  let someEvent = document.createEvent('Event');
  someEvent.initEvent(eventName, true, true);
  document.dispatchEvent(someEvent);
}

export function parents(node, selector) {
  let current = node,
    list = [];
  while (current.parentNode != null && current.parentNode != document.documentElement) {
    list.push(current.parentNode);
    current = current.parentNode;
  }
  return list.filter((o, i) => {
    return o.matches(selector)
  })
}