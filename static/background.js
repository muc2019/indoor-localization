chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create('index.html', {
    'bounds': {
      'width': 1600,
      'height': 800
    },
    'minWidth': 1280,
    'minHeight': 700
  })
})
