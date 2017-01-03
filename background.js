// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send message to active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// Called when message received
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "open_new_tab") {
      // Open new tab with url
      chrome.tabs.create({"url": request.url});
    }
  }
);
