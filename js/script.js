function getTriangleArea(a, h) {
  if(a <= 0 || h <= 0) {
      return "nieprawidłowe dane";
    }
  return a * h / 2;
}
console.log(getTriangleArea(10, 4));

var triangle1Area = getTriangleArea(9, 3);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(8, 4);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(15, 0);
console.log(triangle3Area);
