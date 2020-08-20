initMakeAnOrder();
initOpenGallery();
initCallMe();

function initMakeAnOrder() {
  var HIDDEN = "hidden";

  var open = document.querySelector(".header__button");
  var modal = document.querySelector(".modal_to-make-order");
  var close = document.querySelector(".modal__button-close");
  var send = document.querySelector(".modal__button-send");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
  });

  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });

  send.addEventListener("submit", function () {
    modal.classList.add(HIDDEN);
  });
}

function initOpenGallery() {
  var HIDDEN = document.querySelector(".hidden");
  var open = document.querySelector(".photo__button");
  var close = document.querySelector(".gallery__button-close");
  var modal = document.querySelector(".gallery");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
  });

  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });
}

function initCallMe() {
  var HIDDEN = document.querySelector(".hidden");

  var open = document.querySelector(".introduction__button");
  var close = document.querySelector(".modal__button-close");
  var send = document.querySelector(".modal__button-send");
  var modal = document.querySelector(".modal_call-me");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
  });
  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });
  send.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });
}
