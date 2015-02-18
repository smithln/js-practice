var a = 1;

var b = 2;

var total = sum(a, b);

console.log(total);


// functions hold the steps for whatever variables you pass through them
// functions don't include single variables - its the steps the variables would take
// ex: mix, bake, eat can be anything, but thats what you will do to those objects
function sum(num1, num2) {
  return num1 + num2;
}

var total = difference(a, b);

function difference(num1, num2) {
  return num1 - num2;
}
