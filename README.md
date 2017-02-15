# IFrameBlocker
Disallows the use of iframes on WowHead.

This extension waits 1/2 second for the page to finish loading, then strips all the iframes out of the DOM.  It continues
to check for new iframes every 1/2 second thereafter to make sure they didn't reload them.

The delay is necessary to keep the page from crashing before the "normal" content has a chance to load.

While removing the iframes, I also have attempted to remove the scaffolding surrounding them so there aren't empty boxes
all over the place.

---

Additionally, I have two messages:

__To Players__:  Seriously; go buy premium.  Wowhead's content rocks, and you pay about $15/month for Wow.  If you can
afford WoW, you can afford wowhead.

__To Wowhead__:  Get your shit together regarding advertisements.

Change your acceptable ad policy - mentioned here (http://www.wowhead.com/forums&topic=142&p=3370978) to the following:

Allowed:
* Ads shall ONLY contain static images and/or text.
* Clicking the ad may take you to whatever product/service is being advertised.

Not Allowed:
* Animated GIFs / Movies / Videos / Anything with sound (AT ALL)
* Javascript of any kind.
* Literally everything else.

If an advertiser can or will not comply, drop them until they fall in line.