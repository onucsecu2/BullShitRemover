// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// chrome.runtime.onInstalled.addListener(function() {
//   // chrome.storage.sync.set({color: '#3aa757'}, myfunc);
//   // function myfunc(){
//   // 	console.log("running");

//   	console.log("running");
//   });
  var rule ={
  	conditions: [
  		new chrome.declarativeContent.PageStateMatcher({
  			pageUrl: {hostEquals:'www.facebook.com', schemes: ['https']},
  		})
  	],
  	actions : [
  		new chrome.declarativeContent.ShowPageAction(),
  		new chrome.declarativeContent.RequestContentScript({js: ["shit.js"]})
  	]
  };

chrome.runtime.onInstalled.addListener(function(){
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 1, 1, 0]});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    	chrome.declarativeContent.onPageChanged.addRules([rule]);

  });
});
chrome.browserAction.setBadgeBackgroundColor({ color: '#FF0000' });
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    console.log(request.greeting);
    chrome.browserAction.setBadgeText({ text: request.greeting.toString() });

  });
// chrome.runtime.onMessage.addListener(function(message){
// 	chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 0]});
// 	chrome.browserAction.setBadgeText({text: message});
// });

// chrome.declarativeContent.onPageChanged.addRules([rule]);
