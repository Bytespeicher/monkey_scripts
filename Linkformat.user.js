// ==UserScript==
// @name         Linkformat
// @namespace    https://bytespeicher.org/
// @version      0.5
// @description  replace links in next line with links in () with only domain as text
// @author       mkzero + chaos
// @match        https://bytespeicher.org/wp-admin/post.php?post=*&action=edit
// @match        https://bytespeicher.org/wp-admin/post-new.php
// @match        https://bytespeicher.org/wp-admin/post.php?post=1261&action=edit
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';



var i = 0, j = 0,
    lines = document.getElementById('content').innerHTML.split('\n'),
    menu = document.getElementById('ed_toolbar'),
    newinput = document.createElement("input"),
    newdoc = [],
    match = /(?:(http|ftp)(s|):\/\/)([a-z-.]+[a-z]+)/,
    link = /(href="|>)((http|ftp)(s|):\/\/)([a-z-.]+[a-z]+)/,
    hostname;

newinput.type = "button";
newinput.id = "qt_content_format_links";
newinput.className = "ed_button button button-small";
newinput.value = "Fix Links";
newinput.addEventListener('click',replace_text,true);
menu.appendChild(newinput);

function replace_text(){
    for (i = 0; i <= lines.length; i+=1) {
        if (match.test(lines[i]) && !link.test(lines[i]) && lines[i].indexOf('twitter.com') < 0) {
            hostname = match.exec(lines[i]);
            hostname = hostname[hostname.length - 1];
            newdoc[j-1] = lines[i-1].trimRight() + ' (<a href=' + lines[i] + '>' + hostname + '</a>)';
        } else {
            newdoc[j] = lines[i];
            j += 1;
        }
    }
    document.getElementById('content').innerHTML = newdoc.join('\n');   
}
