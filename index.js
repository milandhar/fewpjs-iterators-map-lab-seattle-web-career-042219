const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(titleize);
}

function titleize(string){
    let newString = ""
    let sentenceArray = string.split(" ");
    let i = 0
    while (i < sentenceArray.length) {
      if (i===0){
      newString += capitalize(sentenceArray[i])
    } else {
      newString += ' ' + capitalize(sentenceArray[i])
    }
      i++
    }
      return newString;
    }

function capitalize(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1))
}
