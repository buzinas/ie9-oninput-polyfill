(function (d) {
  if (navigator.userAgent.indexOf('MSIE 9') === -1) return;
  var elements = [], values = [], ev = d.createEvent('CustomEvent');
  ev.initCustomEvent('input', true, true, {});

  d.addEventListener('selectionchange', function() {
    var actEl = d.activeElement;
    var tagName = actEl.tagName;

    if ((tagName === 'INPUT' && actEl.type === 'text') || tagName === 'TEXTAREA') {
      var idx = elements.indexOf(actEl), el = elements[idx] || elements.push(actEl);
      if (el.value !== values[idx]) {
        values[idx] = el.value;
        el.dispatchEvent(ev);
      }
    }
  });
})(document);
