const textareaEl = $("#text").val();
let text = 0

const data = () => {
  words = 0,
  sentence = 0,
  upperCase = 0,
  lowerCase = 0,
  spaces = 0,
  digits = 0,
  vowels = 0,
  consonants = 0
};

const setText = () => {
  text = textareaEl.value;

  if(text != 0){
    data.sentence = text.match(/\056/g);
    data.words = text.match(/a-z/gi);
    data.spaces = text.match(/\s/g);
    data.upperCase = text.match(/[A-Z]/g);
    data.lowerCase = text.match(/[a-z]/);
    data.digits = text.match(/\d/g);
    data.vowels = text.match(/[aeiou]/gi);
    
  }
}