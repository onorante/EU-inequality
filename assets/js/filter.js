// Filters on the Publications page: show only the entries that match the
// selected topic and type. Without JavaScript, all entries stay visible.
(function () {
  var form = document.querySelector('[data-filter-for]');
  if (!form) return;
  var list = document.getElementById(form.getAttribute('data-filter-for'));
  var empty = document.querySelector('[data-filter-empty]');
  if (!list) return;
  var selects = form.querySelectorAll('select[data-filter]');

  function apply() {
    var visible = 0;
    var items = list.children;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var show = true;
      for (var j = 0; j < selects.length; j++) {
        var key = selects[j].getAttribute('data-filter');
        var value = selects[j].value;
        if (!value) continue;
        var values = (item.getAttribute('data-' + key) || '').split(' ');
        if (values.indexOf(value) === -1) show = false;
      }
      item.hidden = !show;
      if (show) visible++;
    }
    if (empty) empty.hidden = visible > 0;
  }

  for (var k = 0; k < selects.length; k++) selects[k].addEventListener('change', apply);
})();
