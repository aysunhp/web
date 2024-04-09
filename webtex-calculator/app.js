function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function reset() {
  document.getElementById("display").value = "";
}
