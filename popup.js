document.addEventListener('DOMContentLoaded', function() {
    var renameButton = document.getElementById('renameButton');
    var newTitleInput = document.getElementById('newTitle');
  
    // Focus the input field and select its content
    newTitleInput.focus();
    newTitleInput.select();
  
    // Load current tab's saved title, if any
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0].url) {
        chrome.storage.local.get([tabs[0].url], (result) => {
          if (result[tabs[0].url]) {
            newTitleInput.value = result[tabs[0].url];
            newTitleInput.select(); // Select the loaded text
          }
        });
      }
    });
  
    // Function to rename the tab
    function renameTab() {
      var newTitle = newTitleInput.value;
      if (newTitle) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          if (tabs[0].url) {
            // Save the new title
            chrome.storage.local.set({[tabs[0].url]: newTitle}, function() {
              // Apply the new title
              chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.title = "' + newTitle + '";'}
              );
              window.close(); // Close the popup after renaming
            });
          }
        });
      }
    }
  
    // Rename when the button is clicked
    renameButton.addEventListener('click', renameTab);
  
    // Rename when Enter key is pressed
    newTitleInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        renameTab();
      }
    });
  });