"use strict";

/** 
 * @typedef {"RED"|"GREEN"|"BLACK"} Color
 * 
 * @typedef {object} Widget
 * @prop {number} length
 * @prop {Color} color
 */

/**
 * @param {number} length 
 * @param {Color} [color]
 * @returns {Widget}
 */
function makeWidget(length, color = "BLACK") {
  return { length, color };
}

/**
 * @param {Widget} widget 
 */
function getPrice(widget) {
  let mul = (widget.color === "BLACK") ? 3 : 2;
  return widget.length * mul;
}

module.exports = { makeWidget, getPrice };
