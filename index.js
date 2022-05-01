const inputField = document.querySelector("#input-field");
const result = document.querySelector("#result");

const checkFunction = () => {
  result.textContent = "";
  const response = isValid(inputField.value);
  const responseHtml = document.createTextNode(response ? "valid" : "invalid");
  result.appendChild(responseHtml);
  inputField.value = ""
}


const isValid = function(s) {

  const array = s.split("");

  if (array[array.length - 1] === "(" || array[array.length - 1] === "{" || array[array.length - 1] === "[") return false;
  if (array[0] === ")" || array[0] === "}" || array[0] === "]") return false;
  if (array.length % 2 !== 0) return false

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "(":
        if (array[i + 1] === "}" || array[i + 1] === "]") return false;
        break;
      case "[":
        if (array[i + 1] === "}" || array[i + 1] === ")") return false;
        break;
      case "{":
        if (array[i + 1] === "]" || array[i + 1] === ")") return false;
        break;
      case ")":
        if (array[i - 1] === "{" || array[i - 1] === "[") return false;
        break;
      case "]":
        if (array[i - 1] === "{" || array[i - 1] === "(") return false;
        break;
      case "}":
        if (array[i - 1] === "[" || array[i - 1] === "(") return false;
        break;
      default:
        break;
    }
  }

  return true;
};
  
  