// Common funtion for input field one
function getFirstInputFieldData(inputFielOne) {
  const inputFieldOne = document.getElementById(inputFielOne);
  const inputFieldOneString = inputFieldOne.value;
  const inputFieldOneNumber = parseFloat(inputFieldOneString);
  return inputFieldOneNumber;
}

// Common funtion for input field two
function getSecondInputFieldData(inputFielTwo) {
  const inputFieldTwo = document.getElementById(inputFielTwo);
  const inputFieldTwoString = inputFieldTwo.value;
  const inputFieldTwoNumber = parseFloat(inputFieldTwoString);
  return inputFieldTwoNumber;
}

// Common function to display area calculation
let count = 0;
function displayAreaCalculation(areaName, areaCalculation) {
  count += 1;
  const areaCalculationContainer = document.getElementById("area-calculation-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${count}. ${areaName}</td>
      <td>${areaCalculation}</td>
      <td>
        <button class="bg-blue-600 px-3 py-1 rounded">Convert to m2</button>
      </td>
      `;
  areaCalculationContainer.appendChild(tr);
}
