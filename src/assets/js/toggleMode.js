//  toggle button
document.documentElement.setAttribute("data-theme", "light");

var themeSwitcher = document.getElementById("toggle-mode");

themeSwitcher.onclick = function() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var switchToTheme = currentTheme === "dark" ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", switchToTheme);
  updateSourceMedia(currentTheme);
}

// change image in dependence of mode
var updateSourceMedia = function (colorPreference) {
  var pictures = document.querySelectorAll('picture');
  pictures.forEach(function (picture) {
    var sources = picture.querySelectorAll("\n        source[media*=\"prefers-color-scheme\"], \n        source[data-media*=\"prefers-color-scheme\"]\n      ");
    sources.forEach(function (source) {
      // Preserve the source `media` as a data-attribute
      // to be able to switch between preferences
      if (source === null || source === void 0 ? void 0 : source.media.includes('prefers-color-scheme')) {
        source.dataset.media = source.media;
      }
      // If the source element `media` target is the `preference`,
      // override it to 'all' to show
      // or set it to 'none' to hide
      if (source === null || source === void 0 ? void 0 : source.dataset.media.includes(colorPreference)) {
        source.media = 'all';
      }
      else if (source) {
        source.media = 'none';
      }
    })
  })
};
