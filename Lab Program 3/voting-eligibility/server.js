// script.js
function checkEligibility() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
  
    if (age >= 18) {
      document.getElementById('result').innerText = `${name}, you are eligible to vote! 🗳️`;
    } else {
      document.getElementById('result').innerText = `${name}, you are not eligible to vote yet.`;
    }
  }
  