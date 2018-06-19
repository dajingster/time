chrome.tabs.onActivated.addListener(function(info) {

       chrome.tabs.sendMessage(info.tabId, {"message": "updated"});

});

chrome.tabs.onCreated.addListener(function(info) {

     mode = 0;

});



chrome.windows.onFocusChanged.addListener(function (info) {

	if (info == chrome.windows.WINDOW_ID_NONE) {
        mode = 0;
        totalmode = 0;
    } else {
    	totalmode = 1;
        chrome.tabs.query({active: true, currentWindow: true}, 
     	function(arrayOfTabs) {
       chrome.tabs.sendMessage(arrayOfTabs[0].id, {"message": "updated"});
    })
}

});


var mode = 0;
var timespent = 0;
var totaltime = 0;
var totalmode = 1;



var timer = setInterval(myTimer, 1000);
  function myTimer() {
    if (mode == 1) {
    timespent++;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {"message": "on", "variable": timespent});

  	});
    }
    if (totalmode == 1) {
    totaltime++;
    console.log(totaltime);
	}

  }

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "on") {
			mode = 1;
		}
	}
);

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "off") {
			mode = 0;
		}
	}
);

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if( request.message === "reset") {
			mode = 0;
			timespent = 0;
			totaltime = 0;
			percents = [];
			times = [];
		}
	}
);


chrome.storage.sync.set({color: '#333333'}, function(){
	});

chrome.storage.sync.set({date: '08/14/2018'}, function(){
	});
chrome.storage.sync.set({website: []}, function(){
	});


var percents = [];
var times = [];
var monthtimespent = 0;
var monthpercent = 0;



var todaytrack = new Date(); 


setInterval(function(){
	todaytrack = new Date(); 
    if (todaytrack.getDay() == 1) {
	percents.push(timespent/totaltime);
	times.push(timespent);
	timespent = 0;
	totaltime = 0;
	monthtimespent = 0;
	monthpercent = 0;
	for (var i = 0; i < percents.length; i++) {
    	monthtimespent += times[i];
	}

	for (var i = 0; i < percents.length; i++) {
    	monthpercent += percents[i]
	}
	}
}, 1000*60*60*24);



// setInterval(function(){
// 	percents.push(timespent/totaltime);
// 	times.push(timespent);
// 	timespent = 0;
// 	totaltime = 0;
// }, 60000);

if (percents.length == 5) {
	percents.pop();
	times.pop();
	monthtimespent = 0;
	monthpercent = 0;
	for (var i = 0; i < percents.length; i++) {
    	monthtimespent += times[i];
	}

	for (var i = 0; i < percents.length; i++) {
    	monthpercent += percents[i]
	}
}

















