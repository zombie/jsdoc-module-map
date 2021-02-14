"use strict";

// Imports method declarations and associated types from WidgetsLib.
const { makeWidget, getPrice } = ChromeUtils.import("resource:///modules/Widget.jsm");

let a = makeWidget(1);
let b = makeWidget(2, "RED");
let c = makeWidget(3, "PURPLE");                    // not a valid Color.

let cost = getPrice(a) + getPrice(b) + getPrice(c);

cost += getPrice({ length: 4, color: "RED" });
cost += getPrice({ length: 6, width: 7 });          // no `width` on Widget.
cost += getPrice({ length: 5, colour: "GREEN" });   // `colour` misspelled.

module.exports = {};
