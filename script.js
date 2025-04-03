// function to convert integers to roman numerals
function intToRoman(number) {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let roman = '';
  for (let i = 0; i < vals.length; i++) {
    while (number >= vals[i]) {
      roman += numerals[i];
      number -= vals[i];
    }
  }
  return roman;
}

// function to handle button click
document.getElementById("convert-btn").addEventListener("click", function() {
    let number_input = document.getElementById("number").value.trim();
    let roman_output = document.getElementById("output");

    if (number_input === '') {
        roman_output.textContent = "Please enter a valid number";
        roman_output.style.color = "red";
        return;
    }
    else if (number_input < 1) {
        roman_output.textContent = "Please enter a number greater than or equal to 1";
        roman_output.style.color = "red";
        return;
    }
    else if (number_input > 3999) {
        roman_output.textContent = "Please enter a number less than or equal to 3999";
        roman_output.style.color = "red";
        return;
    }

    roman_output.textContent = intToRoman(number_input);
    roman_output.style.color = "green";
});
