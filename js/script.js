function getTriangleArea(a, h)
{
  if(a <= 0 || h <= 0)
    {
      return "nieprawidłowe dane";
    }
  var triangleArea = a * h / 2; 
  return triangleArea;
}
console.log(getTriangleArea(10, 4));

var triangle1Area = getTriangleArea(9, 3);
var triangle1Area = getTriangleArea(8, 4);
var triangle1Area = getTriangleArea(15, 15);
