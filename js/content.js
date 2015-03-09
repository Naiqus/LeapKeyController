//inject script
// var s = document.createElement('script');
// s.src = chrome.extension.getURL('js/leap-0.6.4.min.js');
// s.onload = function() {
//     this.parentNode.removeChild(this);
// };
// (document.head||document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/leapgame.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);



