export function inject(document, tag, id, src, customAttributes) {
  const fjs = document.getElementsByTagName(tag)[0];
  if (document.getElementById(id)) return;
  const js = document.createElement(tag);
  js.id = id;
  js.src = src;
  (customAttributes || (() => {}))(js);
  fjs.parentNode.insertBefore(js, fjs);
}

export function eject(document, tag, src) {
  const js = document.querySelectorAll(`${tag}[src*="${src}"`);
  if (js.length > 0) {
    js.forEach((n) => n.parentNode.removeChild(n));
  }
}
