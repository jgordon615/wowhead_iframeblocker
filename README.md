# IFrameBlocker
Disallows the use of iframes on WowHead.

This extension waits 1 second for the page to finish loading, then strips all the iframes out of the DOM.  It continues
to check for new iframes every second thereafter to make sure they didn't reload them.

The 1 second delay is necessary to keep the page from crashing before the "normal" content has a chance to load.

While removing the iframes, I also have attempted to remove the scaffolding surrounding them so there aren't empty boxes
all over the place.

