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