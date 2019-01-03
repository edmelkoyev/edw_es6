function max(...numbers) {
  console.log(numbers);
}

max(1, 2, 3, 4, 5);
max();

function f2(a, b, ...numbers) {
  console.log(numbers);
}

f2(1, 2, 3, 4, 5, 6);
