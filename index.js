// Get element nodes from document
const inputField = document.querySelector("#input-field");
const result = document.querySelector("#result");

// 
const checkFunction = () => {
  result.textContent = "";
  const response = isValid(inputField.value);
  const responseHtml = document.createTextNode(response ? "valid" : "invalid");
  result.appendChild(responseHtml);
}

// 
const isValid = (s) => {
  // split the characters of the string into an array so they can easily be looped through
  const array = s.split("");

  // If the array contains a non-bracket character, return false
  if (!(array.includes("{") 
      || array.includes("(") 
      || array.includes("[") 
      || array.includes("]") 
      || array.includes(")") 
      || array.includes("}"))) return false;

  // if the array ends in an opening bracket, return false
  if (array[array.length - 1] === "(" 
      || array[array.length - 1] === "{" 
      || array[array.length - 1] === "[") return false;

  // if the array begins with a closing bracket, return false
  if (array[0] === ")" 
      || array[0] === "}" 
      || array[0] === "]") return false;

  // if the array length is odd, return false
  if (array.length % 2 !== 0) return false

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "(":
        // if closing bracket does not match, return false
        if (array[i + 1] === "}" || array[i + 1] === "]") return false;
        break;
      case "[":
        // if closing bracket does not match, return false
        if (array[i + 1] === "}" || array[i + 1] === ")") return false;
        break;
      case "{":
        // if closing bracket does not match, return false
        if (array[i + 1] === "]" || array[i + 1] === ")") return false;
        break;
      case ")":
        // if closing bracket does not match, return false
        if (array[i - 1] === "{" || array[i - 1] === "[") return false;
        break;
      case "]":
        // if closing bracket does not match, return false
        if (array[i - 1] === "{" || array[i - 1] === "(") return false;
        break;
      case "}":
        // if closing bracket does not match, return false
        if (array[i - 1] === "[" || array[i - 1] === "(") return false;
        break;
      default:
        break;
    }
  }

  return true;
};
  
  