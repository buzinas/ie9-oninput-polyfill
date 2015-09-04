(function (d) {
  if (navigator.userAgent.indexOf('MSIE 9') === -1) return;
  var elements = [];
  var values = [];
  var ev = document.createEvent('CustomEvent');
  ev.initCustomEvent('input', true, true, {});

  d.addEventListener('selectionchange', function() {
    var actEl = d.activeElement;

    if (actEl.tagName.toLowerCase() === 'input' && actEl.type.toLowerCase() === 'text') {
      var idx = elements.indexOf(actEl);
      var el = elements[idx] || elements.push(actEl);
      if (el.value !== values[idx]) {
        values[idx] = el.value;
        el.dispatchEvent(ev);
      }
    }
  });
})(document);
