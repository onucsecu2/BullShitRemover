// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// var script = document.createElement('script');
// script.src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// var script = document.createElement('script');
// script.src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// var script = document.createElement('script');
// script.src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-auth.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

// var script = document.createElement('script');
// script.src = "https://www.gstatic.com/firebasejs/7.14.1/firebase-database.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);

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
	// var firebaseConfig = {
	//     apiKey: "AIzaSyBC6w8wzv4Vn3DyhuDwTUpOpzXTnwlS-xE",
	//     authDomain: "sturdy-filament-241014.firebaseapp.com",
	//     databaseURL: "https://sturdy-filament-241014.firebaseio.com",
	//     projectId: "sturdy-filament-241014",
	//     storageBucket: "sturdy-filament-241014.appspot.com",
	//     messagingSenderId: "1098563297258",
	//     appId: "1:1098563297258:web:6ba08bc85037778ee0dc93",
	//     measurementId: "G-VGZKSDYTFH"
	//  };
	// var defaultProject = firebase.initializeApp(firebaseConfig);
	// console.log(defaultProject);
	// var userId="onu";
	// var username="halarvai";
	// var email="onucsecu@gmail.com";
	// firebase.database().ref(userId).set({
	//     username: name,
	//     email: email,
 //  	});
	chrome.browserAction.setBadgeBackgroundColor({color:[0, 1, 1, 0]});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    	chrome.declarativeContent.onPageChanged.addRules([rule]);
		
  	});


});
chrome.browserAction.setBadgeBackgroundColor({ color: '#FF0000' });
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(request.greeting);
    chrome.browserAction.setBadgeText({ text: request.greeting.toString() });
    
  });
