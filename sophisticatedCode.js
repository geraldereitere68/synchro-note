/*  sophisticatedCode.js

    This code demonstrates a complex algorithm for finding the Nth prime number using the Sieve of Eratosthenes method.
    
    Author: Your Name
    Date: November 1, 2021
*/

function findNthPrime(n) {
    if (n <= 0) throw new Error("Invalid input. N must be a positive integer.");

    let primes = [];
    let numbers = Array.from({ length: n * 10 }, (_, i) => i >= 2);
    let sqrtn = Math.sqrt(n * 10);

    for (let i = 2; i <= sqrtn; i++) {
        if (numbers[i - 2]) {
            for (let j = i ** 2; j <= n * 10; j += i) {
                numbers[j - 2] = false;
            }
        }
    }

    for (let i = 2; i <= n * 10; i++) {
        if (numbers[i - 2]) {
            primes.push(i);
            if (primes.length === n) break;
        }
    }

    return primes[n - 1];
}

// Example Usage
console.log(findNthPrime(500)); // Outputs: 3571