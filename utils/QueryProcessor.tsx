export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("what is your name")) {
    return (
      "GabrielA"
    );
  }
  if (query.toLowerCase().includes("plus")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      let num1 = parseInt(numbers[0]);
      let num2 = parseInt(numbers[1]);
      let result = num1 + num2;
      return (
        result + ""
      );
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      let largest = Math.max(...numbers.map(Number));
      return largest + "";
    }
  } 

  if (query.toLowerCase().includes("multiplied")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      let num1 = parseInt(numbers[0]);
      let num2 = parseInt(numbers[1]);
      let result = num1 * num2;
      return (
        result + ""
      );
    }
  }

  return "";
}
