function findWords(word) {
  const saved = [word];

  let first = word[0];
  if ([...word].every((w) => w === first)) return saved;

  const len = word.length;

  while (true) {
    let newWord = "";

    for (let i = 0; i < len / 2; i++) {
      newWord += saved.at(-1)[i] + saved.at(-1)[len - i - 1];
    }

    let temp = newWord.slice(0, -1);
    if (temp === saved[0] || newWord === saved[0]) break;

    len % 2 === 1 ? saved.push(temp) : saved.push(newWord);
  }

  return saved;
}
// 원래 단어 찾기

// abcd -> adbc -> acdb -> abcd
// abcde -> aebdc -> acedb -> abcde
// abcdef -> afbecd -> adfcbe -> aedbfc -> acefdb -> abcdef
const filePath = process.platform === "linux" ? "/dev/stdin" : "./9519.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const X = parseInt(input[0]);
const afterWord = input[1];
let words = findWords(afterWord);

const rotation = words.length;
let order = X % rotation;

if (words.length > 1) {
  console.log(words[rotation - order]);
} else {
  console.log(words[0]);
}
