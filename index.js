function loop(size, method = 1) {
  console.log('-------');
  console.time();
  let methodFunction;
  let total = 1;
  const nums = [...Array(size).keys()].map((k) => k + 1);
  switch (method) {
    case 1:
      for (n = 0; n < nums.length; n++) {
        total = total * nums[n];
      }
      methodFunction = 'for loop';
      break;
    case 2:
      for (n of nums) {
        total = total * n;
      }
      methodFunction = 'for-of loop';
      break;
    case 3:
      nums.forEach((num) => {
        total = total * num;
      });
      methodFunction = 'forEach';
      break;
    case 4: {
      total = nums.reduce((accu, num) => accu * num, 1);
      methodFunction = 'reduce';
      break;
    }
    case 5: {
      const f = (n) => {
        if (n === 1) {
          return 1;
        }
        return n * f(n - 1);
      };
      total = f(size);
      methodFunction = 'recursive (not PTC)';
      break;
    }
    case 6: {
      const f = (n, accu = 1) => {
        if (n === 1) {
          return accu;
        }
        return f(n - 1, n * accu);
      };
      total = f(size);
      methodFunction = 'recursive (PTC)';
      break;
    }
    default:
      break;
  }
  console.log(`Using [${methodFunction}] to do factorial of ${size}`);
  console.log('ans: ', total);
  console.timeEnd();
  console.log('-------');
}

[1, 2, 3, 4, 5, 6].forEach((way) => {
  loop(100, way);
});
