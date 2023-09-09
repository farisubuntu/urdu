for listening:
```html
<div class="mt-1"></div>
    <h2 class="text-center"><strong>Listening</strong></h2>
    <details class="listening">
    <p class="h3 alert alert-success border border-info" role="alert">
     <summary><svg xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32" fill="currentColor" class="bi bi-volume-up-fill mx-2"
      viewBox="0 0 16 16">
      <path
       d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
      <path
       d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
      <path
       d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
     </svg>
     <strong>
       <a
       href="https://mediaspace.msu.edu/media/Conversation+4.2/1_z3fvsije"
       data-url="https://mediaspace.msu.edu/media/Conversation+4.2/1_z3fvsije">عمران کا گھر</a></strong></summary></p>

       <div style="max-width:800px"><div style="position:relative;padding-bottom:60.75%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/811482/sp/81148200/embedIframeJs/uiconf_id/27551951/partner_id/811482?iframeembed=true&playerId=kaltura_player&entry_id=1_z3fvsije&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_to53o5u2" width="800" height="486" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Conversation 4.2" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>
       </details>

```


for Reading article:

```html
<!-- if table then add article class as last one of the table clasesses -->
<table class="table table-striped ,,,,,, article">,,,,,</table>

<!-- else wrap all elements with div.article -->
```

for Instructor Video:
```html
    <div class="mt-1"></div>
    <p><span>Please watch the following video and listen to the above
      conversation and check your reading and pronunciation.</span></p>
    <p style="text-align: left"><strong>Instructor Video: <a
       href="https://mediaspace.msu.edu/media/Conversation+2.2/1_ipc9gles"
       data-url="https://mediaspace.msu.edu/media/Conversation+2.2/1_ipc9gles">تعارف</a></strong></p>
    <h2 class="text-center">Question &amp; Answer</h2>
    <div class="textbox interactive-content"><span class="interactive-content__icon"></span>
     <p><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill"
       viewBox="0 0 16 16">
       <path
        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
      </svg>An interactive H5P element has been excluded from this version of the text. You can view it online
      here:<br />
      <a href="https://openbooks.lib.msu.edu/urdu/?p=32#h5p-41" title="Question Answer 2.2"
       data-url="https://openbooks.lib.msu.edu/urdu/?p=32#h5p-41">32#h5p-41</a>
     </p>
    </div>
```

- Convert article tables into `article.article`



<!-- To do  -->
- clean all embed videos by convert it into bootstrap classes, see: (https://getbootstrap.com/docs/4.0/utilities/embed/)
