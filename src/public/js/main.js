function changeText() {
    document.getElementById("tim").innerHTML = "changed text";
  }
  
  // Wait for the DOM to be fully loaded before executing the function
  document.addEventListener("DOMContentLoaded", function() {
    changeText();
  });