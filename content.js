chrome.runtime.sendMessage({action: "checkTitle", url: window.location.href}, function(response) {
    if (response && response.title) {
      document.title = response.title;
    }
  });