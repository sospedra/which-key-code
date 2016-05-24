document.addEventListener("DOMContentLoaded", function() {
  var body = document.getElementsByTagName('body')[0]
  var key = document.getElementById('js-key')
  var message = document.getElementById('js-message')
  var input = document.getElementById('js-input')

  var updateKeyCode = function (code) {
      key.innerHTML = code
      message.innerHTML = "key code"
      body.style.background = 'hsl(' + code * 2.6 + ', 35%, 50%)'
  }

  window.onkeypress = function (e) {
    updateKeyCode(e.which)
  }
  input.oninput = function (e) {
    var code = e.target.value.charCodeAt()

    updateKeyCode(code)

    e.target.value = ''
  }

  window.addEventListener('touchstart', function () {
      setTimeout(function () {
        input.focus()
      }, 500)
  }, false)
})
