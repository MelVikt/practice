///1.Створи функцію reverseString(str)

function reverseString(str) {
    return str.split('').reverse().join('')
}

function iterationReverseSrting(str) {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }    
  return newString;
}

console.log(reverseString('hello24'))

//2.Порахуй кількість голосних у рядку

const RegExCountVowels = str =>
   (str.match(/[aeiouаєеиіїоуюя]/gi) || []).length;  // without .length - []
//якщо збігів немає → повертає null. 
// ми додаємо || [], щоб уникнути помилки при .length:
// g flag ensures a global search, finding all matches instead of stopping after the first.
// i flag makes the search case-insensitive, matching both lowercase and uppercase vowels.

function stringCountVowels(str) {
  const vowels = 'aeiouаеєиіїоуюя'; 
  let count = 0;

  for (let char of str.toLowerCase()) {
    if ( vowels.includes(char)){
      count++;
    }
  }
  return count;
}

console.log(stringCountVowels("Привіт, як справи?"));

//2.1.Порахуй кількість приголосних у рядку

const RegExCountConsonants = str => 
  (str.match (/[a-zа-яіїєґ]/gi)?.filter(letter => !/[aeiouаєеиіїоуюя]/i.test(letter))).length // without .length - []


function stringCountConsonants(str) {
  const vowels = 'aeiouаеєиіїоуюя'; 
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (/[a-zа-яёіїєґ]/i.test(letter)&& !vowels.includes(letter)){
      //Метод регулярного виразу, який перевіряє: 
      // чи відповідає символ letter регулярному виразу.
      count++;
    }
  }
  return count;
}
function reduceCountConsonants (str) {
  const consonants = "бвгґджзйклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz";
  return [...str.toLowerCase()].reduce((acc, letter) =>   //spread [...]
  consonants.includes(letter) ? acc+ 1 : acc, 0);
}

function reduceCountConsonantsByVowels (str) {
  const vowels = 'aeiouаеєиіїоуюя';
  return [...str.toLowerCase()].reduce((acc, letter) => {
    if (/[a-zа-яёіїєґ]/i.test(letter) && !vowels.includes(letter)){
      return acc + 1;
    }
    return acc;  
    }, 0);
  }   


console.log(reduceCountConsonantsByVowels("Привіт, як справи?"));

//3. Перевір, чи є рядок паліндромом

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function isAnotherPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true
}
function isAdvancePalindrome(str) {
  
}

console.log(isAnotherPalindrome("bob"));