# monkey_scripts
client side scripts to help maintain our websites and online tools

to be used with GreaseMonkey for Firefox (https://addons.mozilla.org/de/firefox/addon/greasemonkey/)
or TamperMonkey for Chrome/Safari/Opera (https://tampermonkey.net/)

## Linkformat.user.js
Adds a Button to the bytespeicher.org blog editor (in the text editor pane) to fix the format of links.
This is used in the Bytespeicher Notizen to switch from Etherpad notation

```
* descriptive text 
http://example.org/subsite
```

to the blog notation

```
* descriptive text (example.org)
```

It does not touch links that are already in html notation (`<href=`) and links to twitter (which are handled by another plugin)
