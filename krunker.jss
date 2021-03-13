// ==UserScript==
// @name         ESP & adblock by clu3bot
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  "ESP mod for krunker.io"
// @author       clu3bot
// @downloadURL  https://github.com/clu3bot
// @include      /^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?(server|party|game)=.+)$/
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        none
// ==/UserScript==
//KRHUB
document.title = "clu3bots ESP Krunker";
document.getElementById("instructions").style.color = "Red";
document.getElementById("instructions").innerHTML = 'Things made easy with clu3bots ESP';
document.getElementById('instructions').innerHTML = 'Loading clu3bots ESP mod';
document.getElementById('modVote').innerHTML = 'clu3bots ESP mod';
document.getElementById("modVote").style.color = "Green";
document.getElementById("texts3DHolder").innerHTML = 'Follow My Github for more @clu3bot';
//Box with link to github page
document.getElementById("subLogoButtons").innerHTML = '<div class="button small buttonP" id="menuBtnHost" onmouseenter="playTick()" onclick="openHostWindow()">Host Game</div><div class="button small buttonR" id="menuBtnBrowser" onmouseenter="playTick()" onclick="showWindow(2)">Server Browser</div><div id="inviteButton" class="button small" onmouseenter="playTick()" onclick="copyInviteLink()">Invite</div><div class="button small" id="menuBtnJoin" onmouseenter="playTick()" onclick="showWindow(24)">Join</div><div class="button small buttonP" id="" onmouseenter="playTick()" onclick="window.open(\'https://github.com/clu3bot\', \'_blank\', \'location=yes,height=570,width=520,scrollbars=yes,status=yes\');">clu3bot Github</div></div>';
document.getElementById("aContainer").style.color = "white";
// 
document.getElementById("aContainer").style.fontSize = "larger";
// Esp
(function() { 'use strict';
let initialize = function(data) {
let regex = /if\(!\w+\['(\w+)']\)continue/;
let result = regex.exec(data);
if (result) {
const inView = result[1];
const push = Array.prototype.push;
Array.prototype.push = function(...args) {
push.apply(this, args);
if (args[0] instanceof Object && args[0].isPlayer) {
Object.defineProperty(args[0], inView, {value: true, configurable: false});
}}}}
const decode = window.TextDecoder.prototype.decode;
window.TextDecoder.prototype.decode = function(...args) {
let data = decode.apply(this, args);
if (data.length > 1050000) {
initialize(data); }
return data; }})();
// Adblock
document.getElementById("krunkerio_728x90_1").remove();
// Rectical
    (function() {
    'use strict';
    window.addEventListener('load', function() {
        try {
            var d = document.createElement('div');
            d.style.cssText = 'width:8px;height:8px;background-color:#FF0000;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;z-index:200;border-radius:4px';
            document.body.appendChild(d);
        } catch (e) { }
    });
})();
// 7W3*ZDg*=6CiqOCDfd+?DBNS+FD,f++D,P4+Dl%;AK_
