(function (d) {
  if (navigator.userAgent.indexOf('MSIE 9') === -1) return;
  var elements = [], values = [], ev = d.createEvent('CustomEvent');
  ev.initCustomEvent('input', true, true, {});

  d.addEventListener('selectionchange', function() {
    var actEl = d.activeElement;

    if (actEl.tagName.toLowerCase() === 'input' && actEl.type.toLowerCase() === 'text') {
      var idx = elements.indexOf(actEl), el = elements[idx] || elements.push(actEl);
      if (el.value !== values[idx]) {
        values[idx] = el.value;
        el.dispatchEvent(ev);
      }
    }
  });
})(document);
