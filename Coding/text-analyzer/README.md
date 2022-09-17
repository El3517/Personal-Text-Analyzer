Describe: wordCounter()

Test:"it should count the number of words in a sentence"
Code:
const text:"hello friend"
wordCounter(text);
Expected Output:2


Test:"it should count the number of sentences in a paragraph"
Code:
const sentence: "My name is caleb. I am a boy"
sentenceCounter(sentence);
Expected Output:2


Test: "It should count the number of spaces in a sentence."
const spaces: "My name is Caleb"
Code: spaceCounter(spaces);
Expected Output: 3

Test : "It should count the number of uppercased letters in a word,sentence or paragraph"
const upperCase: "My NAME Is Caleb"
Code: upperCaseCounter(uppercase);
Expected Output : 7

Test : "it should count the number of lower cased letters in a word,sentence or paragraph"
const lowerCase : "my name is caleb"
Code: lowerCaseCounter(lowerCase);
Expected Output: 12

Test : "it should count the number of digits in a sentence"
const digits : "I am 18"
Code: digitsCounter(digits);
Expected Output: 2

Tests For Vowel Counter
Describe: vowelCounter();

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7


Tests For Consonant Counter
Describe: consonantCounter();

Test: "It recognizes consonants in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 12

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("due");
Expected Output: 1

Test: "It recognizes a single vowel."
Code: vowelCounter("b");
Expected Output: 1

Test: "It recognizes multiple conconants in a single word."
Code: vowelCounter("cater");
Expected Output: 3

Test: "It recognizes a single consonant regardless of case."
Code: vowelCounter("B");
Expected Output: 1

Test: "It recognizes all consonants in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 11

Test: "It ignores non-alphabetical characters since they can't be consonants."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes consonants in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 12



# _{Text Analyzer Website}_

#### _{Text Analzer is a website for you to count or analyzer text in a }_

#### By _**{Eneje caleb}**_

## Technologies Used

* _HTML_
* _Bootstrap_
* _CSS_
* _JQuery_
* _Javascript_

## Description

_{Text analyzer is a web app that not only allows you to count the words in a passage but also helps you to find the three most common words,boldens selected words in the passage and censors selected offensive words, Text analzer helps to make text analysis fast and effiecient and reliable}_

## Setup/Installation Requirements

* _A fully operational computer_
* _Ensure the computer has access to the internet_
* _A fast working browser_




## Known Bugs

* _it wont censor incorrectly spelled offensive words_
* _it will bolden selected words with a symbol_


## License

_{ Peradventure you run into an issue with the site or you have contibution on how to make the site better, feel free to contact us the conatct information is down below.}_

## Webpage link
https://github.com/El3517/Text-Analyzer-Acedu.git

## Contact Information

_{contact us at enejecaleb@gmail.com.}_