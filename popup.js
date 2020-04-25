// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let addComment = document.getElementById('addArticle');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);

// });

addArticle.onclick = function(element) {
	chrome.tabs.executeScript({
          file: 'addArticle.js'
        });

}
