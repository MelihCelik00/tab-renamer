chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    chrome.storage.local.get([tab.url], (result) => {
      if (result[tab.url]) {
        chrome.tabs.executeScript(tabId, {
          code: `document.title = "${result[tab.url]}";`
        });
      }
    });
  }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  chrome.tabs.get(tabId, (tab) => {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError.message);
    } else if (tab && tab.url) {
      chrome.storage.local.get([tab.url], (result) => {
        if (result[tab.url]) {
          // Store the custom title in a separate object for closed tabs
          chrome.storage.local.get(['closedTabs'], (closedTabsResult) => {
            let closedTabs = closedTabsResult.closedTabs || {};
            closedTabs[tab.url] = result[tab.url];
            chrome.storage.local.set({ closedTabs: closedTabs });
          });
        }
      });
    }
  });
});

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete' && tab.url) {
//       chrome.storage.local.get([tab.url], (result) => {
//         if (result[tab.url]) {
//           chrome.tabs.executeScript(tabId, {
//             code: `document.title = "${result[tab.url]}";`
//           });
//         }
//       });
//     }
//   });