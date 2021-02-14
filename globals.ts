"use strict";

declare const ChromeUtils: {

  // One overload per path -> module file mapping.
  import(path: "resource:///modules/Widget.jsm"): typeof import("./WidgetsLib");
  import(path: "resource:///modules/Main.jsm"): typeof import("./main");
  // etc..
}
