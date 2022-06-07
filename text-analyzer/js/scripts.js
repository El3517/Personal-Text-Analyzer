const textareaEl = document.querySelector("#text");
let text = null;

let data = {
  words: 0,
  sentence: 0,
  upperCase: 0,
  lowerCase: 0,
  spaces: 0,
  digits: 0,
  vowels: 0,
  consonants: 0,
};

const findlength = (item) => (item === null ? 0 : item.length);

const setText = () => {
  text = textareaEl.value;

  if (text != null) {
    data.sentence = findlength(text.match(/\056/g));
    data.words = findlength(text.match(/[a-zA-Z]+/g));
    data.spaces = findlength(text.match(/\s/g));
    data.upperCase = findlength(text.match(/[A-Z]/g));
    data.lowerCase = findlength(text.match(/[a-z]/g));
    data.digits = findlength(text.match(/\d/g));
    data.vowels = findlength(text.match(/[aeiou]/gi));
    data.consonants = findlength(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
  }

  localStorage.setItem("data", JSON.stringify(data));

  window.location = "info.html";
};

const getData = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  let data = getData();
  let htmlContent = ""

  for (item in data) {
    htmlContent += `<div class ='box'>
    <h2>${data[item]}</h2>
    <p>${item}</p>
    </div>`
  }
  document.querySelector(".info-wrapper").innerHTML = htmlContent;
}