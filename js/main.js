(function () {
    var updateKeyCode = function (code) {
        key.innerHTML = code
        message.innerHTML = "key code"
        body.style.background = 'hsl(' + code * 2.6 + ', 35%, 50%)'
    }

    document.addEventListener("DOMContentLoaded", function () {
      var body = document.getElementsByTagName('body')[0]
      var key = document.getElementById('js-key')
      var message = document.getElementById('js-message')
      var input = document.getElementById('js-input')
      var help = document.getElementById('js-help')
      var modal = document.getElementById('js-modal')
      var modalClose = modal.getElementsByClassName('js-modal-close')[0]

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
