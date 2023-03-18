"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let descriminant = b ** 2 - 4 * a * c;
  let descriminantOne = b ** 2 - 4 * a * c;
  if (descriminant === 0) {
    descriminant = -b / (2 * a);
    arr.push(descriminant);
  } else if (descriminant > 0) {
    let result;
    descriminant = (-b + Math.sqrt(descriminant)) / (2 * a);
    result = descriminant;
    arr.push(result);
    let resultOne;
    descriminantOne = (-b - Math.sqrt(descriminantOne)) / (2 * a);
    resultOne = Number(descriminantOne);
    arr.push(resultOne);
  } else {
    return [];
  }

  return arr;
}

solveEquation();

//процентную ставку,procent сумму первоначального взноса,contribution сумму кредита amount, и срок (длительность кредита в месяцах)countMonths

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return false;
  } else if (isNaN(contribution)) {
    return false;
  } else if (isNaN(amount)) {
    return false;
  }

  let monthlyPercentage = percent / 100 / 12;

  let teloCredit = amount - contribution;

  let loanPayment =
    teloCredit *
    (monthlyPercentage +
      monthlyPercentage / ((1 + monthlyPercentage) ** countMonths - 1));

  const totalAmount = loanPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}

calculateTotalMortgage();
