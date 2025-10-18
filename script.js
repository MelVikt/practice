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
  (str.match (/zа-яії[a-єґ]/gi)?.filter(letter => !/[aeiouаєеиіїоуюя]/i.test(letter))).length // without .length - []


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

//4.Видали дублікати з масиву

const array = [1, 2, 3, 4, 4, 4, 4, 5]; //працює і з ['Anna', 'Ivan', 'Anna', 'Petro'];

const uniqueArray = [...new Set(array)];

console.log(uniqueArray)

const arrayDublicate = [
  {id: 1, value: 'A'},
  {id: 2, value: 'B'},
  {id: 3, value: 'C'},
  {id: 2, value: 'D'},
  {id: 3, value: 'C'},
]  /////аналог const arr = [1, 2, 2, 3, 4, 4];

const uniqueReduce = arrayDublicate.reduce((acc, item) => {
  if (!acc.some(obj => obj.id === item.id && obj.value === item.value))  {
    acc.push(item);
  }
  return acc;
}, []);
//const unique = arr.reduce((acc, val) => { if (!acc.includes(val)) acc.push(val); return acc; }, []);
console.log(uniqueReduce);



function getUniqueItemsById(items) {
  return Array.from(
    new Map(items.map(item => [item.id, item])).values()
  );
}

// Приклад використання:
const items = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 1, value: 'C' }
];

const uniqueItems = getUniqueItemsById(items);
console.log(uniqueItems);


//5.Знайди найчастіше слово в реченні


const str = "Hello, world! How are you?"; //.match() — метод рядка, який шукає відповідність регулярному виразу і повертає знайдені збіги.
//\b\w+\b/g — регулярний вираз:
//\b — означає границю слова (початок або кінець слова).
//\w+ — означає одне або бцільше "словесних" символів (букви, цифри або підкреслення).
//g — глобальний прапорець, який каже "знайди всі відповідності, а не тільки першу".


const wordss = str.match(/\b\w+\b/g);

console.log(wordss); // ["Hello", "world", "How", "are", "you"]


// let sentence = "яблуко увуву 4343 5656 2323 2323 2323 2323 груша яблуко слива яблуко груша";
// console.log(sentence.split(' '));  ['яблуко', 'груша', 'яблуко', 'слива', 'яблуко', 'груша'] розбиває рядок по кожному пробілу.
// console.log(sentence.split()) ['яблуко груша яблуко слива яблуко груша'] Тут .split() не знає, де саме розділяти, тому повертає весь рядок як один елемент масиву:

// console.log("слива груша яблуко".split(' '))

// let words = sentence.split(" ");
// let counts = {};
// for (let word of words) {
//   if (!counts[word]) {
//     counts[word] = 1;
//   } else {
//    counts[word] += 1;
//   }
// }

// console.log(counts)

let sentence = "яблуко увуву 4343 5656 2323 2323 2323 2323 груша яблуко слива яблуко груша";
let words = sentence.split(" ");
function counterWords(sentence) {
  let words = sentence.split(" ");
  let counts = {};
  for (let word of words) { //проходить по кожному елементу в масиві words


    word = word.toLowerCase();
    word = word.replace(/[.,!?()":;«»“”„\[\]{}\-]/g, "")
    word = word.replace(/'/g, "’");
    if (/^\d+$/.test(word) || word === "") {     //\d - Будь-яка цифра (0-9)
      continue;
    }
    if (!counts[word]) {
      counts[word] = 1;
    } else {
    counts[word] += 1;    
    }
    //counts[word] = (counts[word] || 0) + 1;
    // totalWords++;
  }

  let sortedSentence = Object.entries(counts)
    .sort((a, b)=> b[1] - a[1])
    .slice(0, 3);

  let [mostFrequent, maxCount] = sortedSentence[0] || ['', 0];

  let totalWords = Object.values(counts).reduce((sum, count) => sum + count, 0);
  let percentage = (maxCount / totalWords) * 100;
  let top3Percentage = sortedSentence.map(([word, count]) => ({
    word,
    count,
    percentage: ((count / totalWords) * 100).toFixed(2) + '%'
  }));
  return { top3: top3Percentage, word: mostFrequent, count: maxCount, percentage: percentage.toFixed(2) + '%' };
}

let f = counterWords(sentence)
console.log(f)

//6. Розверни масив без reverse()

function withoutReverse(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])// newArray += array[i]; це для str  конкатенує елементи як рядки
  }
  return newArray;
}

let noReverseArray = ["apple", "banana", "cherry"]; //[1, 2, 3, 4, 5];
let cha = withoutReverse(noReverseArray)
console.log(cha)

//розгорнення без створення нового

function reverseInPlace(arr) {
  for (i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  } 
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(reverseInPlace(arr))


//6. Напиши власну реалізацію map()


function iterationMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result
}


function ForOfMap(arr, callback) {
  const result = [];
  let index = 0;
  for (const item of arr) {
    result.push(callback(item, index, arr));
    index++;
  }
  return result
}

function ForEachMap (arr, callback) {
  const result = [];
  arr.forEach((item, index) => {
    result.push(callback(index, item, arr));
  });
  return result;
}


function WhileMap(arr, callback) {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(callback(arr[index], index, arr));
    index++;
  }
  return result;
}

function ReduceMap (arr, callback) {
  return arr.reduce ((acc, item, index, array) => {
    acc.push(callback(item, index, array));
    return acc;
  }, []);
}

function* mapGenerator(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    yield callback(arr[i], i, arr);
  }
}

const numbers = [1, 2, 3, 45];
const squared = ReduceMap(numbers, x => x * x);
console.log(squared); // [1, 4, 9, 16]

/////8. Реалізуй функцію debounce(fn, delay)

function debounce(fn, delay) {
  let timer;

  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
    fn.apply(this, args);
    }, delay); 
  };
}

// Звичайна функція, яка щось робить
function handleClick() {
    console.log('Клік по кнопці!');
}

// Обгортаємо її через debounce
const debouncedClick = debounce(handleClick, 2000);

// Вішаємо на кнопку
document.getElementById('myDebounceButton').addEventListener('click', debouncedClick);


//////9. Реалізуй throttle(fn, delay)


function throttle(fn, delay) {
  let lastCall = 0;
  return function() {
    const now = Date.now();
    if (now - lastCall > delay) {
      fn();
      lastCall = now;
    }
  }    
}


// function throttle(fn, delay) {
//   let timeoutId = null;

//   return function(...args) {
//     if (!timeoutId) {
//       timeoutId = setTimeout(() => {
//         fn.apply(this, args);
//         timeoutId = null;
//       }, delay);
//     }
//   };
// }


// function throttle(fn, delay) {
//   let lastCall = 0;

//   return function(...args) {
//     const now = performance.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       fn.apply(this, args);
//     }
//   };
// }

const log = () => console.log('Scrolled');

window.addEventListener('scroll', throttle(log, 1000));

//10.Зроби функцію глибокого копіювання об’єкта

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);  
  }

  const result = {};
  for (const key in obj) {
    result[key] = deepCopy(obj[key]);
  }
  
  return result;
}

const itemsDeep = [
  { id: 1, value: 'A', place: {city: 'Ass'} },
  { id: 2, value: 'B', place: {city: 'Bss'} },
  { id: 3, value: 'C', place: {city: 'Css'} }
];

const actionDeep = deepCopy(itemsDeep)

// console.log(JSON.stringify(actionDeep, null, 2));
// actionDeep[2].place.city = "Львів";
// console.log(actionDeep)

// console.log('Original:', itemsDeep[2].place.city); // ➜ 'Css'
// console.log('Copy:', actionDeep[2].place.city); 


//11.Реалізуй замикання для лічильника (counter())

function Counter() {
  let saved = localStorage.getItem('count');
  let count = saved ? parseInt(saved) : 0;

  function updateStorage() {
    localStorage.setItem('count', count);
  }
  return {
    inc: function() {
      count++;
      updateStorage();
      return count;
    },
    dec: function() {
      count--;
      updateStorage();
      return count;
    },
    value: function() {
      return count;
    },    
    reset() {
      count = 0;
      updateStorage();
      return count;
    }
  }
}
const counter = Counter();
const display = document.getElementById('display');
display.textContent = counter.value();
document.getElementById('minus').addEventListener('click', () =>{
  display.textContent = counter.dec();
});

document.getElementById('plus').addEventListener('click', () =>{
  display.textContent = counter.inc();
});


//12.Зроби сортування масиву об’єктів по полю

const users = [
  { name: 'Katya', age: 25 },
  { name: 'Bohdan', age: 30 },
  { name: 'Anna', age: 20 },
  { name: 'Pon', age: 35 },
  { name: 'Don', age: 260 }
];
// ascending - зростання, descending - спадання
function sortByField(arr, field, order = 'asc') {
  return arr.sort((a, b) => {

    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return order === 'asc' 
        ? a[field].localeCompare(b[field]) 
        : b[field].localeCompare(a[field]);
    }
    return order === 'asc' 
      ? a[field] - b[field] 
      : b[field]- a[field];  
  });
}

const www = sortByField(users, 'name', 'asc')

console.log(www)
//////////////////////////////

const sortOrders = {
  name: 'asc',
  age: 'asc'
};

function sortRenderField(field) {
  const order = sortOrders[field];
  users.sort((a, b) => {

    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return order === 'asc' 
        ? a[field].localeCompare(b[field]) 
        : b[field].localeCompare(a[field]);
    }
    return order === 'asc' 
      ? a[field] - b[field] 
      : b[field]- a[field];  
  });

  sortOrders[field] = order === 'asc' ? 'desc' : 'asc';

  const container = document.getElementById('userList');
  container.innerHTML = '';
  for (const user of users) {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${user.name}</h2><p>${user.age}</p>`
    container.appendChild(div);
  }
}

sortRenderField('name'); // або просто render без сортування

// події на кнопки
document.getElementById('sortByName').addEventListener('click', () => {
  sortRenderField('name');
});

document.getElementById('sortByAge').addEventListener('click', () => {
  sortRenderField('age');
});

///////////////////////

// const field = ['age', 'name'];
// const obj = { age: 25, name: 'Anna' };

// console.log(obj.age);   
// field.forEach(key => {
//   console.log(key, obj[key]);
// });  
// console.log(obj.field);   


///////////////////////////////////////


//13.Знайди максимум і мінімум без Math.max


function maxMin(arr) {
  if (arr.length === 0) {
    return null; 
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let different = max - min;
  return { different, max, min };
}

function findMaxMinRecursive(arr) {
  if (arr.length === 1) {
    return { max: arr[0], min: arr[0] }
  }
  let mid = Math.floor(arr.length / 2); 
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let leftResult = findMaxMinRecursive(left);
  let rightResult = findMaxMinRecursive(right);

  let max
  if (leftResult.max > rightResult.max) {
    max = leftResult.max;
  } else {
    max = rightResult.max;
  }

  let min 
  if (leftResult.min < rightResult.min) {
    min = leftResult.min;
  } else {
    min = rightResult.min;
  }
  //  max = (leftResult.max > rightResult.max) ? leftResult.max : rightResult.max
  //  min = (leftResult.min < rightResult.min) ? leftResult.min : rightResult.min
  different = max - min;
  return { max, min, different }
}

function findMaxMinReduce(arr) {
  if (arr.length === 0) {
    return null;
  }
  let result = arr.reduce((acc, val) => {
    if (val > acc.max) acc.max = val;
    if (val < acc.min) acc.min = val;
    return acc;
  }, {max: arr[0], min: arr[0] });
  return result;
}

console.log(findMaxMinRecursive([3, 7, -2, 0, 9]));

//14.Реалізуй compose() або pipe() функції


function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const addOne = x => x + 1;
const triple = x => x * 3;

// const doStuff = compose(addOne, triple);

// console.log(doStuff(4))


function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

// const doPipeStuff = pipe(addOne, triple);

// console.log(doPipeStuff(4))
////////////////////////

function composeCycle (...fns) {
  return function(x) {
    let result = x;
    for (let i = fns.lengs - 1; i > 0; i--) {
      result = fns[i](result);
    }
    return result;
  }
}

function PipeCycle (...fns) {
  return function(x) {
    let result = x;
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  }
}

////////////////////////////////

function composeRecurcive (...fns) {
  return function(x) {
    if (fns.length === 0) {
      return x;
    }
    const lastFn = fns[fns.length - 1];
    const restFns = fns.slice(0, fns.length - 1);
    return composeRecurcive(...restFns)(lastFn(x));
  }
}
const doComposeStuffRecurcive = composeRecurcive(addOne, triple);

console.log(doComposeStuffRecurcive(4));

function PipeRecurcive (...fns) {
  return function(x) {
    if (fns.length === 0) {
      return x;
    }
    const firstFn = fns[0];
    const restFns = fns.slice(1);
    return PipeRecurcive(...restFns)(firstFn(x));
  }
}

const doPipeStuffRecurcive = PipeRecurcive(addOne, triple);

console.log(doPipeStuffRecurcive(4));

///////////////////////////////////////////////


//15.Створи функцію, яка кешує результати виклику

// function memorized(fn) {
//   const cacheStorage = {};
//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cacheStorage.hasOwnProperty(key)) {
//       return {
//         result: cacheStorage[key],
//         fromCache: true
//       }

//     };
//     const result = fn(...args);
//     cacheStorage[key] = result;
//     return {
//       result: result,
//       fromCache: false
//   }
//   };
// }
function memorized(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const start = performance.now(); 
    if (cache.has(key)) {

      const end = performance.now()
      console.log(`З кешу (${key}): ${end - start} мс`);
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    const end = performance.now();
    console.log(`Не з кешу (${key}): ${end - start} мс`);
    return result;
  };
}
function slowFib(n) {   //Числа Фібоначчі — це послідовність чисел, 
// де кожне наступне число є сумою двох попередніх:
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
}
const cachedFib = memorized(slowFib);

// cachedFib(35); // ще повільно

// cachedFib(35); // миттєво!

//16.Створи таймер з setInterval і кнопкою “Stop”
window.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleButton');

  let counterPerSec = 0;

  function incrementPerSec() {
    counterPerSec++;
    document.getElementById('timer').textContent = counterPerSec;
  }

  let intervalPerSec = setInterval(incrementPerSec, 1000);


  document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(intervalPerSec);
    intervalPerSec = null;
    toggleBtn.textContent = 'Continue';
  });
  document.getElementById('startButton').addEventListener('click', function() {
    if (intervalPerSec === null) {
      intervalPerSec = setInterval(incrementPerSec, 1000);
      toggleBtn.textContent = 'Pause';
    }
  });
  document.getElementById('clearButton').addEventListener('click', function() {
    counterPerSec = 0;
    document.getElementById('timer').textContent = counterPerSec;
    clearInterval(intervalPerSec);
    intervalPerSec = null;
  });

  document.getElementById('toggleButton').addEventListener('click', function() {
    if (intervalPerSec !==null) {
      clearInterval(intervalPerSec);
      intervalPerSec = null;
      toggleBtn.textContent = 'Continue';
    } else {
      intervalPerSec = setInterval(incrementPerSec, 1000);
      toggleBtn.textContent = 'Pause';
    }
  })
});


//17.Симулюй Promise вручну (реалізуй MyPromise)

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Дані отримано!"), 1000);
//   });
// }

// fetchData()
//   .then(result => console.log(result))
//   .catch(error => console.error(error));


class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.handlers = [];
    const resolve = this.resolve.bind(this);
    const reject = this.reject.bind(this);

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  resolve(val) {
    if (this.state !== 'pending') return;
    this.state = 'fulfilled';
    this.value = val;
    this.handlers.forEach(handler => {
      setTimeout(() => {
        handler.onFulfilled(val);
      }, 0);
    });
  }
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      setTimeout(() => onFulfilled?.(this.value), 0);
    } else if (this.state === 'rejected') {
      setTimeout(() => onRejected?.(this.value), 0);
    } else {
      this.handlers.push({ onFulfilled, onRejected });
    }
    return this;
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  reject(reason) {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.value = reason;
      
    this.handlers.forEach(handler => {
      setTimeout(() => {
        if (handler.onRejected) {
          handler.onRejected(reason);
        }
      }, 0);
    });
  } 
}
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => reject('Помилка!'), 100);
});

p.then(val => {
  console.log('Успіх:', val);
}).catch(err => {
  console.log('Провал:', err);
});
///////////////////////////////////////////////////
function MyPromised(executor) {
  let state = 'pending';
  let value;
  let reason;
  let onFulfilled;
  let onRejected;

  function resolve(val) {
    if (state === 'pending') {
      state = 'fulfilled';
      value = val;
      if (onFulfilled) setTimeout(() => onFulfilled(value), 0);
    }
  }

  function reject(err) {
    if (state === 'pending') {
      state = 'rejected';
      reason = err;
      if (onRejected) setTimeout(() => onRejected(reason), 0);
    } 
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
  return {
    then(onFulfilledCallback) {
      return MyPromised((resolve, reject) => {
        onFulfilled = (value) => {
          try {
            const result = onFulfilledCallback(value);
            resolve(result);
          } catch (err) {
            reject (err);
          }
        };
        if (state === 'fulfilled') {
          setTimeout(() => onFulfilled(value), 0);
        }
      })
    },
    catch(fn) {
      onRejected = fn;
      if (state === 'rejected') setTimeout(() => onRejected(reason), 0);
      return this;
    }
  }
}

// console.log("1");
// MyPromise((res) => res("ok")).then(val => console.log("2"));
// console.log("3");

MyPromised(resolve => resolve(5))
  .then(x => x + 1)
  .then(x => console.log("✅", x));


  MyPromised((resolve) => {
  resolve(10);
})
  .then(x => x + 5)
  .then(x => console.log('Результат:', x)); // Має вивести 15
//18.Напиши функцію для форматування дати

// 19.Витягни унікальні значення з масиву об’єктів

//20. Зроби просту реалізацію подієвого емітера