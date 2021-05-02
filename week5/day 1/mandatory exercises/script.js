const findIntersection = (array) => {
  let array1 = array[0].split(",");
  let array2 = array[1].split(",");
  let shared = array2.filter((num) => array1.includes(num));
  return shared;
};
findIntersection(["1,2,5,6,7", "2,5,7,8,15"]);
