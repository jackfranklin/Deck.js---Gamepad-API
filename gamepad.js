/**
 * written by Jack Franklin
 * base code with events & the like taken from Rob Hawkes: https://gist.github.com/1966511
 **/

var controller;

// Run When a gamepad is connected
function onGamepadConnected(e) {
  controller = e.gamepad;
  console.log("Gamepad connected", controller.id);
}

// Run on button change
function onGamepadButtonDown(e) {
  var button = e.button;
  console.log("Gamepad button pressed", button);
}

function onGamepadButtonUp(e) {
  var button = e.button;
  console.log("Gamepad button released", button);
  //buttons (on a logitech game pad):
  //0: X
  //1: A
  //2: B
  //3: Y
  //6: LT
  //7: RT
  //11: right analog pressed
  switch(button) {
    case 7:
      $.deck('next');
      break;
    case 6:
      $.deck('prev');
      break;
    case 3:
      $("body").css("-moz-transform", "scale(2)");
      break;
    case 0:
      $("body").css("-moz-transform", "scale(1)");
      break;
    case 11:
      $(".pointer").toggle();
      break;

  };

}

/**
 * zooms in / out on the page
 * does this by just increasing all the text sizes
 **/
function zoomSlide(axis, val) {
  //use -moz-transform on the body
  var b = $("body");
  //3 is up/down
  if(axis === 4) {
    if(val > 0.5) {
      decreaseText();
    } else if(val < -0.5){
      increaseText();
    }
  }
}


/**
 * takes every element in .slide and increases its text size by 2
 **/
function increaseText() {
  $(".slide").each(function(i, item) {
    var cfs = parseInt($(item).css("font-size"));
    $(item).css("font-size", (cfs+1) + "px");
  });
}

/**
 * does the opposite of increaseText()
 **/
function decreaseText() {
  $(".slide").each(function(i, item) {
    var cfs = parseInt($(item).css("font-size"));
    $(item).css("font-size", (cfs-1) + "px");
  });
}

/**
 * I place a little cursor on the screen, you can use the D pad to control it
 **/
function controlPointer(axis, val, pointer) {
  //2 is up and down
  //1 is left & right
  var pointer = $(".pointer");
  if(axis === 1) {
    if(val === 1) {
      pointer.animate({"left" : "+=10"}, 1);
    } else if(val === -1) {
      pointer.animate({"left" : "-=10"}, 1);
    }
  } else if(axis === 2) {
    if(val === 1) {
      pointer.animate({"top" : "+=10"}, 1);
    } else if(val === -1) {
      pointer.animate({"top" : "-=10"}, 1);
    }

  }
}


// Run on axis move
function onGamepadAxisMove(e) {
  var axis = e.axis,
  value = e.value;
  console.log("Gamepad axis move", axis, value);
  controlPointer(axis, value);
  zoomSlide(axis, value);
}

// Run When a gamepad is disconnected
function onGamepadDisconnected(e) {
  console.log("Gamepad disconnected", e.controller.id);
}

// Poll gamepad state on the fly (call this inside a timeout or requestAnimationFrame)
function checkState() {
  for (var i = 0; i < controller.buttons.length; i++) {
    console.log("Button state", i, controller.buttons[i]);
  }

  for (var j = 0; j < controller.axes.length; j++) {
    console.log("Axis state", j, controller.axes[j]);
  }
}

window.addEventListener("MozGamepadConnected", onGamepadConnected);
window.addEventListener("MozGamepadDisconnected", onGamepadDisconnected);

window.addEventListener("MozGamepadButtonDown", onGamepadButtonDown);
window.addEventListener("MozGamepadButtonUp", onGamepadButtonUp);
window.addEventListener("MozGamepadAxisMove", onGamepadAxisMove);

