const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeFontSize() {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
}

changeFontSize();

fontSizeControl.addEventListener("input", changeFontSize);
