//bubble sort

const bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; i++) {
      if (inputArr[j] > inputArr[i + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
  }
  return inputArr;
};
