chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "rename") {
    document.title = request.title;
  }
});

chrome.runtime.sendMessage({action: "checkTitle", url: window.location.href}, function(response) {
  if (response && response.title) {
    document.title = response.title;
  }
});