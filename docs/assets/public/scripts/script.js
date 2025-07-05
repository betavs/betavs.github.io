;(function () {
  function toggleTheme() {
    const useChoice = localStorage.getItem('vuepress-color-scheme')
    const systemStatus =
      'matchMedia' in window
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false

    if (useChoice === 'light') {
      document.documentElement.dataset.theme = 'light'
    } else if (useChoice === 'dark' || systemStatus) {
      document.documentElement.dataset.theme = 'dark'
    }
  }

  function toggleTitle() {
    let timer
    let title = ''

    const enter = '👋 Welcome back!'
    const leave = '😢 Come back soon!'

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') {
        if (!title) return

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
  }

  toggleTheme()

  toggleTitle()
})()
