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

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      for (let i = 0; i < numbers.length; i++) {
        let number = parseInt(numbers[i]);
        if (Math.cbrt(number) % 1 === 0 && Math.sqrt(number) % 1 === 0) {
          return "The number that is both a square and a cube is " + number + ".";
        }
      }
    }
  }

  if (query.toLowerCase().includes("are primes")) {
    let numbers = query.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      let primes = numbers.filter(num => isPrime(parseInt(num)));
      return primes.join(", ") || "None";
    }
  }

  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
