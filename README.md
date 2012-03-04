#Please note:
Right now this is pretty hacked together, this was done very late at BC
Bournemouth. Soon I'll be collecting this up, neatening up & releasing.


#Deck.js + Gamepad API

Following on from a Barcamp Bournemouth talk from @robhawkes and with a
spare logitech gamepad available, I decided to take one of my favourite
new things, [Deck.js](http://imakewebthings.github.com/deck.js/), a
system for creating HTML presentations & mix it with some new cool
stuff, such as the [Gamepad API](https://wiki.mozilla.org/GamepadAPI).

All this does is call Deck.js methods, so it's easy to customise if you
fancy it.

##Notes
- I ran this in a specific Firefox nightly build that has the Gamepad API
enabled, which you can [find here for Mac, Win & Linux](http://people.mozilla.com/~tmielczarek/mouselock+gamepad/). Again, hat-tip to @robhawkes for that one.

- This __has not__ been tested in any other browser than the FF nightly
  linked above

- The basic code I started with is also @robhawkes's but I've since
  modified a lot of it. Credit is given in the comment of the file.

##Instructions

_These instructions were written using a **Logitech Gamepad**. Buttons
may differ with other controllers (an issue hopefully we can get rid of
soon and standardise button layouts)_

####Moving to Previous & Next Slides
- previous slide: left trigger
- next slide: right trigger

####Controlling the Cursor on the page
- DPad or left analog stick (depending on if "Mode" button is on)
- hide the cursor by pressing the right analog stick down

####Zooming In
- move up on the right analog stick to zoom __in__
- move down on the right analog stick to zoom __out__


##License
Released under the [Don't be a Dick License](http://philsturgeon.co.uk/code/dbad-license)
