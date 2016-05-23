document.addEventListener("DOMContentLoaded", function() {
  var body = document.getElementsByTagName('body')[0]
  var key = document.getElementById('js-key')
  var message = document.getElementById('js-message')

  window.onkeypress = function (e) {
    key.innerHTML = e.which
    message.innerHTML = "key code"
    body.style.background = 'hsl(' + e.which * 2.6 + ', 35%, 50%)'
  }
});
