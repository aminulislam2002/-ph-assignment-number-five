// Triangle area calculation
document.getElementById("btn-triangle").addEventListener("click", function () {
  const triangleInputFieldOne = getFirstInputFieldData("triangle-input-field-one");
  const triangleInputFieldTwo = getSecondInputFieldData("triangle-input-field-two");
  // Area calculation
  const areaCalculation = 0.5 * triangleInputFieldOne * triangleInputFieldTwo;

  // Area name get
  const areaName = document.getElementById("triangle").innerText;

  // Common function to display area calculation
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});

// Rectangle area calculation
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangleInputFieldOne = getFirstInputFieldData("rectangle-input-field-one");
  const rectangleInputFieldTwo = getSecondInputFieldData("rectangle-input-field-two");
  const areaCalculation = rectangleInputFieldOne * rectangleInputFieldTwo;
  const areaName = document.getElementById("rectangle").innerText;
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});

// Parallelogram area calculation
document.getElementById("btn-parallelogram").addEventListener("click", function () {
  const parallelogramInputFieldOne = getFirstInputFieldData("parallelogram-input-field-one");
  const parallelogramInputFieldTwo = getSecondInputFieldData("parallelogram-input-field-two");
  const areaCalculation = parallelogramInputFieldOne * parallelogramInputFieldTwo;
  const areaName = document.getElementById("parallelogram").innerText;
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});

// Rhombus area calculation
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombousInputFieldOne = getFirstInputFieldData("rhombus-input-field-one");
  const rhombousInputFieldTwo = getSecondInputFieldData("rhombus-input-field-two");
  const areaCalculation = 0.5 * rhombousInputFieldOne * rhombousInputFieldTwo;
  const areaName = document.getElementById("rhombus").innerText;
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});

// Pentagon area calculation
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagonInputFieldOne = getFirstInputFieldData("pentagon-input-field-one");
  const pentagonInputFieldTwo = getSecondInputFieldData("pentagon-input-field-two");
  const areaCalculation = 0.5 * pentagonInputFieldOne * pentagonInputFieldTwo;
  const areaName = document.getElementById("pentagon").innerText;
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});

// Ellipse area calculation
document.getElementById("btn-ellips").addEventListener("click", function () {
  const ellipsInputFieldOne = getFirstInputFieldData("ellipse-input-field-one");
  const ellipsInputFieldTwo = getSecondInputFieldData("ellipse-input-field-two");
  const areaCalculation = 3.1416 * ellipsInputFieldOne * ellipsInputFieldTwo;
  const areaName = document.getElementById("ellipse").innerText;
  displayAreaCalculation(areaName, areaCalculation.toFixed(2));
});
