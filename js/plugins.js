// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
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

// plugins and extensions
particlesJS(
  "js-dots", {
  "particles": {
    "number": {
      "value": 20
    },
    "color": {
      "value": "#eee"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 12,
      "random": true,
      "anim": {
        "enable": false,
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});
