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
  const fake = [...array];
  const order = [];

  /**
   * 
   * first loop through the array
   * check for opening brackets only
   * store the order in new array
   * erase the openening brackets from fake array
   * 
   * loop through updated fake array
   * compare to order array to make sure they close in the right order
   * 
   */

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
        // if next element is a closing bracket and does not match, return false
        if (array[i + 1] === "}" || array[i + 1] === "]") return false;
        // remove the opening bracket from fake array
        fake.splice(fake.indexOf("("), 1);
        // put corresponding closing bracket in order array so as to note the correct order
        order.unshift(")");
        break;
      case "[":
        // if next element is a closing bracket and does not match, return false
        if (array[i + 1] === "}" || array[i + 1] === ")") return false;
        // remove the opening bracket from fake array
        fake.splice(fake.indexOf("["), 1);
        // put corresponding closing bracket in order array so as to note the correct order
        order.unshift("]");
        break;
      case "{":
        // if next element is a closing bracket and does not match, return false
        if (array[i + 1] === "]" || array[i + 1] === ")") return false;
        // remove the opening bracket from fake array
        fake.splice(fake.indexOf("{"), 1);
        // put corresponding closing bracket in order array so as to note the correct order
        order.unshift("}");
        break;
      default:
        // check if the bracket just closed itself
        if ((array[i] === ")" && array[i - 1] === "(") 
            || (array[i] === "}" && array[i - 1] === "{") 
            || (array[i] === "]" && array[i - 1] === "[")) {
          // if it did, remove the closing bracket from the order array
          order.shift();
          // also remove the closing bracket from the fake array
          fake.splice(fake.indexOf(array[i]), 1);
        }
        break;
    }
  }

  for (let i = 0; i < fake.length; i++) {
    // if the closing bracket is not in the correct order, return false
    if (fake[i] !== order[i]) return false;
  }

  return true;
};
  
  