let gradesList = [85, 60, 60, 60, 60];

const gradeAvg = (arr) => {
  let total = 0;
  let gradeAvg = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  gradeAvg = total / arr.length;
  if (gradeAvg > 65) {
    alert("you passed");
  } else {
    alert("you failed");
  }
};

gradeAvg(gradesList);
