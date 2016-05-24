(function () {
    var freqs = [0, 67, 45]
    var context = new (window.AudioContext || window.webkitAudioContext)()
    var FADE_DURATION = 30
    var FADE_FACTOR = 10

    var fadeIn = function (vol, fade) {
        vol.gain.value = 1 - fade-- / FADE_FACTOR

        setTimeout(function () {
            if (fade) fadeIn(vol, fade)
        }, FADE_DURATION)
    }

    var fadeOut = function (osc, vol, fade) {
        vol.gain.value = fade-- / FADE_FACTOR

        setTimeout(function () {
            return fade ? fadeOut(osc, vol, fade) : osc.stop()
        }, FADE_DURATION * 2)
    }

    var boop = function (hz) {
        var osc = context.createOscillator();
        var vol = context.createGain();

        vol.gain.value = 0.1;
        osc.connect(vol);
        osc.frequency.value = hz
        vol.connect(context.destination);
        osc.start(context.currentTime);

        fadeIn(vol, 10)

        setTimeout(function () {
            fadeOut(osc, vol, 10)
        }, 700)
    }

    var beep = function (code) {
        var delta = ((code + 40) * 2.9) - 30
        freqs.forEach(function (fq) {
            boop(delta + fq)
        })
    }

    document.addEventListener("DOMContentLoaded", function () {
      var body = document.getElementsByTagName('body')[0]
      var key = document.getElementById('js-key')
      var message = document.getElementById('js-message')
      var input = document.getElementById('js-input')
      var help = document.getElementById('js-help')
      var modal = document.getElementById('js-modal')
      var modalClose = modal.getElementsByClassName('js-modal-close')[0]
      var updateKeyCode = function (code) {
          key.innerHTML = code
          message.innerHTML = "key code"
          body.style.background = 'hsl(' + code * 2.6 + ', 35%, 50%)'

          beep(code)
      }

      window.onkeypress = function (e) { updateKeyCode(e.which) }

      input.oninput = function (e) {
        updateKeyCode(e.target.value.charCodeAt())
        e.target.value = ''
      }

      help.onclick = function (e) { modal.className = 'modal is-active' }
      modalClose.onclick = function (e) { modal.className = 'modal visuallyhidden' }

      window.addEventListener('touchstart', function () {
          setTimeout(function () { input.focus() }, 500)
      }, false)
    })
})()
