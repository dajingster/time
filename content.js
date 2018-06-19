
var websites = [];

chrome.storage.sync.get(['website'], function(data) {
  websites = data.website;
  console.log(websites)
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "updated" ) {
      if (websites.includes(window.location.hostname))  {
        // alert("activatetab");
        chrome.runtime.sendMessage({"message": "on"});
      }
      else  {
        chrome.runtime.sendMessage({"message": "off"});
      }

    }
    if(request.message === "on" ) {
      console.log(request.variable);

    }

    }
);



chrome.runtime.sendMessage({"message": "off"});
if (websites.includes(window.location.hostname))  {
  chrome.runtime.sendMessage({"message": "on"});
  // alert("on");
}

