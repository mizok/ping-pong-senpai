export function $(selector) {
  return document.querySelector(selector);
}

export function toggle(selector, status) {
  $(selector).setAttribute(style, status ? 'block' : 'none');
}