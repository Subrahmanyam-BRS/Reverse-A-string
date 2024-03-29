
  // Implementation
  const str = "hello world";
  const reversed = reverseString(str);
  console.log(`The reversed string for the given string '${str}' is ${reversed}`);

  function reverseString() {
    var inputElement = document.getElementById("inputText");
    var outputElement = document.getElementById("output");

    // Get the input value and reverse it
    var inputValue = inputElement.value;
    var reversedValue = inputValue.split('').reverse().join('');

    // Display the reversed string
    outputElement.textContent = "Reversed String: " + reversedValue;
}

  