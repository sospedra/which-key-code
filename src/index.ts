document.addEventListener('DOMContentLoaded', () => {
  const $which = document.querySelector<HTMLTextAreaElement>('#js-which')
  const $code = document.querySelector<HTMLInputElement>('#js-code')
  const $key = document.querySelector<HTMLInputElement>('#js-key')
  const $toast = document.querySelector<HTMLDivElement>('#js-toast')

  if ($code && $key && $which && $toast) {
    ;[$which, $code, $key].forEach(($el) => {
      $el.addEventListener('click', () => {
        $el.select()
        if (document.queryCommandSupported('copy')) {
          document.execCommand('copy')
          $toast.style.animation = 'fadein 2s'
          $toast.addEventListener('animationend', () => {
            $toast.style.animation = ''
          })
        }
      })
    })

    document.body.addEventListener('keydown', (e) => {
      $which.setAttribute('value', `${e.which}`)
      $code.setAttribute('value', `${e.code}`)
      $key.setAttribute('value', `${e.key}`)

      const interpolate = (e.which / 255) * 360 // 255 max key code intpl to 360 max hue
      document.body.style.background = `hsl(${interpolate}, 35%, 50%)`
    })
  }
})
