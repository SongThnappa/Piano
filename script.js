let pianoContainer = document.getElementsByClassName("piano-container");
const base = "./audio";

window.onload = () => {
  // 24 keys

  for (let index = 1; index <= 24; index++) {
    //rewrite in JQuery

    let div = document.createElement("div");
    div.classList.add("key", index < 10 ? "black-key" : "white-key");
    pianoContainer[0].appendChild(div);
  }
};
