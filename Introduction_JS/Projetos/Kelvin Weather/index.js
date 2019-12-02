const kelvin = 293;
// The forecast today
let celsius = kelvin - 273;
// The value of celsius
let fahrenheit = celsius * (9 / 5) + 32;
// The value of fahrenheit
fahrenheit = Math.floor(fahrenheit);
// fahrenheit normally is a Decimal number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
