let pianoContainer = document.getElementsByClassName("piano-container");
var instrument = "Grand_Piano/";
const base = "./audio/";
console.log(instrument);

window.onload = () => {
  // 24 keys

  for (let index = 1; index <= 24; index++) {
    //rewrite in JQuery

    let div = document.createElement("div");
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    pianoContainer[0].appendChild(div);
    const number = index <= 9 ? "" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}${instrument}GrandPiano_Insert ${number}.wav`).play();

      console.log(base + "base" + instrument);
    });
  }
};

//keys_Insert 1
