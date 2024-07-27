function fibonacci(num) {
  if (num <= 0) {
    return 0;  // Although the problem states the input will be positive, this handles the case num = 0.
  } else if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 3; i <= num; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

module.exports = fibonacci;
