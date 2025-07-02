;(function () {
  let timer
  let title = ''

  const enter = '👋 Welcome back!'
  const leave = '😢 Come back soon!'

  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') {
      document.title = enter

      timer = setTimeout(() => {
        document.title = title
        timer = undefined
      }, 500)
    } else {
      if (timer) {
        timer = clearTimeout(timer)
      } else {
        title = document.title
      }

      document.title = leave
    }
  })
})()
