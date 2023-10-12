const conversionButton = document.getElementById("buttonConvert");
const resetButton = document.getElementById("buttonReset");
const reverseButton = document.getElementById("buttonReverse");
const mode1 = document.getElementById("input");
const mode2 = document.getElementById("output");

let explanation = document.getElementById("explanationID");

let Input1 = document.getElementById("inputID");
let Input2 = document.getElementById("outputID");

conversionButton.addEventListener("click", function () {
  const celcius = parseFloat(Input1.value);

  const fahrenheit = (9 / 5) * celcius + 32;

  Input2.value = fahrenheit;

  explanation.value = "(9 / 5) " + celcius + " + 32" + "=" + fahrenheit;

  console.log(fahrenheit);
});

reverseButton.addEventListener("click", function () {
  mode1.innerHTML = "Fahrenheit (°F) :";
  mode2.innerHTML = "Celcius (°C) :";

  let Input1 = document.getElementById("outputID");
  let Input2 = document.getElementById("inputID");

  conversionButton.addEventListener("click", function () {
    const fahrenheit = parseFloat(Input2.value);

    const celcius = (5 / 9) * (fahrenheit - 32);

    Input1.value = celcius;

    explanation.value = "(5 / 9) ( " + fahrenheit + " - 32) = " + celcius;

    console.log(celcius);
  });
});

resetButton.addEventListener("click", function () {
  Input1.value = null;
  Input2.value = null;
  console.log(Input1.value);
  console.log(Input2.value);
  mode2.innerHTML = "Fahrenheit (°F) :";
  mode1.innerHTML = "Celcius (°C) :";
  explanation.value = null;

  Input1 = document.getElementById("inputID");
  Input2 = document.getElementById("outputID");
});
