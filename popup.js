document.addEventListener('DOMContentLoaded', function() {
  var renameButton = document.getElementById('renameButton');
  var newTitleInput = document.getElementById('newTitle');

  newTitleInput.focus();
  newTitleInput.select();

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs[0].url) {
      chrome.storage.local.get([tabs[0].url], (result) => {
        if (result[tabs[0].url]) {
          newTitleInput.value = result[tabs[0].url];
          newTitleInput.select();
        } else {
          newTitleInput.value = tabs[0].title;  // Set to current tab title if no custom title
        }
      });
    }
  });

  function renameTab() {
    var newTitle = newTitleInput.value;
    if (newTitle) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0].url) {
          chrome.storage.local.set({[tabs[0].url]: newTitle}, function() {
            chrome.tabs.sendMessage(tabs[0].id, {action: "rename", title: newTitle});
            window.close();
          });
        }
      });
    }
  }

  renameButton.addEventListener('click', renameTab);

  newTitleInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      renameTab();
    }
  });
});