/* Light/dark theme toggle.
   The no-flash pre-paint script (inline in each page's <head>) applies any
   saved choice — and the matching browser-chrome colour — before first paint.
   This file wires up the toggle button and keeps the chrome colour in sync. */
(function () {
  "use strict";

  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function activeTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return mq.matches ? "dark" : "light"; // following the OS preference
  }

  // Keep the mobile address-bar / status-bar tint matching the visible theme.
  function syncChrome() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", activeTheme() === "dark" ? "#161310" : "#faf6ef");
  }

  var btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var next = activeTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncChrome();
    });
  }

  // Track OS changes while the visitor hasn't made an explicit choice.
  mq.addEventListener("change", function () {
    if (!document.documentElement.getAttribute("data-theme")) syncChrome();
  });

  syncChrome();
})();
