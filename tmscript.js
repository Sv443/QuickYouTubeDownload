// ==UserScript==
// @name            QuickYouTubeDownload
// @description     Quick YouTube video download via hotkey
// @name:de         QuickYouTubeDownload
// @description:de  Schneller YouTube Download per Hotkey
// @version         1.0.2
// @author          Sv443
// @namespace       https://github.com/Sv443/QuickYouTubeDownload
// @match           *://www.youtube.com*
// @icon            http://sv443.net/favicons/quickyoutubedownload.ico
// @run-at          document-start
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @connect         self
// @connect         *
// @connect         sv443.net
// @downloadURL     https://raw.githubusercontent.com/Sv443/QuickYouTubeDownload/master/tmscript.js
// @updateURL       https://raw.githubusercontent.com/Sv443/QuickYouTubeDownload/master/tmscript.js
// ==/UserScript==

(function() {
    'use strict';
/*Settings                                                                Settings                                                                Settings*/

// you can change these settings if you want to:
    var log_to_console = true; // log some debug info to the javascript console if set to true (default: false)
    var download_hotkey = 119; // hotkey for quick video download (default key: F8 (119), 0 to disable), to look up key codes go to this website: https://zeamedia.de/helper/javascript-key-codes-char-codes.php


/*Init                                                                Init                                                                Init*/

var qydl_version = "1.0.2";
var URLhost = window.location.host;
var URLpath = window.location.pathname;
var curURL = URLhost + "" + URLpath;
var queryString = window.location.search;
queryString = queryString.substring(1);
console.log("QuickYouTubeDownload v" + qydl_version + " by Sv443 / Sven Fehler");
if(log_to_console == true){console.log("--BEGIN QuickYouTubeDownload Debug");}


/*Video Downloader                                                                Video Downloader                                                                Video Downloader*/

document.addEventListener("keyup", function(f){
    if(f.keyCode == download_hotkey && URLpath == "/watch") {
        if(log_to_console == true){console.log("    registered keystroke: " + download_hotkey);}
        openc2mp3();
    }
    else if(f.keyCode == download_hotkey && URLpath == "/subscribe_embed") {
        if(log_to_console == true){console.log("    registered keystroke: " + download_hotkey);}
        openc2mp3();
    }
});

function openc2mp3() {
    var dl_format = prompt("Download video - choose format\nAvailable Options: mp3,m4a,aac,flac,ogg,wma,mp4,avi,wmv,3gp");
    if(dl_format == "mp3" || dl_format == "m4a" || dl_format == "aac" || dl_format == "flac" || dl_format == "ogg" || dl_format == "wma" || dl_format == "mp4" || dl_format == "avi" || dl_format == "wmv" || dl_format == "3gp"){
        if(log_to_console == true){console.log("    download - entered correct file format: " + dl_format + ", downloading...");}
        window.open("http://convert2mp3.net/addon_call.php?format=" + dl_format + "&url=" + curURL + queryString);
    }
    else {
        if(dl_format == null || dl_format == "" || dl_format == "null"){
            if(log_to_console == true){console.log("    download - cancelled operation");}
            return null;
        }
        else{
            if(log_to_console == true){console.log("    download - entered wrong file format: " + dl_format);}
            var confirmretry = confirm("Entered value does not match available file formats (mp3,m4a,aac,flac,ogg,wma,mp4,avi,wmv,3gp)\nTry again?");
            if(confirmretry == true){
                openc2mp3();
            }
            else {
                if(log_to_console == true){console.log("    download - cancelled operation after retrying");}
            }
        }
    }
}


/*End                                                                End                                                                End*/

if(log_to_console == true){console.log("--END TamperTubePlus");}
})();
