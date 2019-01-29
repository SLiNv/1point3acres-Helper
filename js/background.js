chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({hight_color: 'lightgrey'}, function() {
    console.log("1p3a helper installed.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.1point3acres.com'},
      })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
});

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  console.log("onUpdated listener")
  console.log("status: " + (info.status === 'complete').toString());
  console.log("1p3a true: " + (tab.url.indexOf("1point3acres.com") !== -1).toString());
  console.log("include 237: " + (tab.url.indexOf("237") !== -1).toString());
  if (info.status === 'complete' && tab.url === 'https://www.1point3acres.com/bbs/'){

  }
  else if (info.status === 'complete' && 
           tab.url.indexOf("1point3acres.com") !== -1 &&
           tab.url.indexOf("237") !== -1) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
       // tabs[0].id,
       tab.id,
       {file: "fid237InjectedCode.js"});
     });
  }
  else if (info.status === 'complete' && 
           tab.url.indexOf("1point3acres.com") !== -1) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        // tabs[0].id,
        tab.id,
        {file: "nonFid237InjectedCode.js"});
    });
  }
});