import * as util from './util.js'

window.onload = () => {
  console.log("load start");
  loadHeaderAndfooter().then(() => {
    console.log("load succ");
  });
 
};

function loadHeaderAndfooter() {
  return Promise.all([util.load("header.html"), util.load("footer.html")]).then(
    ([header, footer]) => {
      const headerEl = document.querySelector("header");
      const footerEl = document.querySelector("footer");
      headerEl.innerHTML = header;
      footerEl.innerHTML = footer;
    }
  );
}
