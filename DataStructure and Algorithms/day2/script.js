let array = [1, 3, 7, 9, 2];

const returnTwoIndices = (arr, target) => {
  for (p1 = 0; p1 < arr.length; p1++) {
    const numberToFind = target - arr[p1];
    for (p2 = p1 + 1; p2 < arr.length; p2++) {
      if (numberToFind === arr[p2]) {
        return [p1, p2];
      }
    }
  }
};

console.log(returnTwoIndices(array, 11));

//double for loop is good for going through an array to compare values against one another inside of the array
