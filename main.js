const subtract = (firstnum, secondnum) => {
    const difference = firstnum - secondnum;
    return difference
}
 
const divide = (number1, number2) => {
    const dividend = number1 / number2
    return dividend
}

const multiply = (num1, num2) => {
    const multipliedNumber = num1 * num2;
    return multipliedNumber

}

const square = (originalNumber) => {
    const squared = originalNumber * originalNumber

    return squared
}

let forLegs = multiply(60, 0.25);
let twoLegs = multiply(60, 0.75);
let totalAnimals = forLegs + twoLegs

console.log(`there are ${forLegs} animals, and ${twoLegs} animals on the farm. with a total of ${totalAnimals} on the farm.`)