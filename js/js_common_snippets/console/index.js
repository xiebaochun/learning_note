// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

var myDiv = document.getElementById('myDiv');
var bcr = myDiv.getBoundingClientRect();
console.log(bcr);

var o = {
}
Object.defineProperty(o, 'name', {
    get: function() {
        return 3;
    },
    set: function() {
        console.log('this is name form ds');
    }
});

o.name = 'ds';

