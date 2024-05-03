// ==UserScript==
// @name        30 Second Auto-Refresh Reddit-stream.com
// @namespace    http://tampermonkey.net/
// @version      2024-05-03
// @description  Auto-Refreshes your Reddit-Stream.com page every 30 seconds. Modify the script and change to any time you want.
// @author       https://github.com/Nick2bad4u
// @match        https://reddit-stream.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit-stream.com
// @grant        none
// @downloadURL https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.js
// @updateURL https://raw.githubusercontent.com/Nick2bad4u/RedditCommentStreamRefresh/main/Auto-Refresh-Reddit-Stream.js
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){ location.reload(); }, 30*1000);
})();