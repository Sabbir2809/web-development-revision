const demo = document.getElementById('demo');
// 1. vPIriPIble let, const
let PI;
PI = 3.1416;
const varsity = 'DIU';
// console.log(PI, varsity);

// 2. Number Methods

// * toString
const str = PI.toString();
demo.innerHTML = PI;

// * toFixed
demo.innerHTML = PI.toFixed(2);

// * toPrecision
demo.innerHTML = PI.toPrecision(2);

// * parseInit
demo.innerHTML = parseInt('12345');

// * parseFloat
demo.innerHTML = parseFloat('12345');

// * escape character
let string = `Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Commodi rerum quas quasi numquam\'s sequi cupiditate dolorum sit!`;
demo.innerText = string;

// 3. String Methods
const fullName = 'Md. Sabbir Hossain';
demo.innerText = fullName.slice(3, 10);
demo.innerText = fullName.substring(10);
demo.innerText = fullName.substr(4);
demo.innerText = fullName.replace('Hossain', 'Khan');

const sentence = `This is Sabbir Here. I'm a Web Developer`;
demo.innerHTML = sentence.indexOf('s');
demo.innerHTML = sentence.lastIndexOf('r');
demo.innerHTML = sentence.startsWith('T');
demo.innerHTML = sentence.endsWith('r');
demo.innerHTML = sentence.length;

// 4. Array Methods
const car = ['volvo', 'tesla', 'tata'];
// * toString
console.log(car.toString());
// * join
console.log(car.join(' '));
// * push
console.log(car.push('hero'));
console.log(car);
// * pop()
console.log(car.pop());
// * shift()
console.log(car.shift());
console.log(car);
// * unshift()
console.log(car.unshift('Benz'));
console.log(car);

// 5. Objects
const obj = {
  brandName: 'Volvo',
  modal: 'v60',
  engine: 23,
  color: {
    color: 'silver',
  },
};
console.log(obj);
