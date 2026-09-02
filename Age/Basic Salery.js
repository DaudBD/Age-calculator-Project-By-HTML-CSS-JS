// একটা function বানাবে:
// calculateSalary(basicSalary, experience, isWeekend)
// Rules:
// experience < 2 বছর হলে → কোনো bonus নেই।
// experience >= 2 এবং < 5 হলে → basic salary-এর 10% bonus।
// experience >= 5 হলে → basic salary-এর 20% bonus।
// isWeekend === true হলে → bonus-এর পরে 500 টাকা extra যোগ হবে।
// শেষে final salary return করবে।
function calculateSalary(basicSalary, experience, isWeekend) {

    let bonus;

    if (experience < 2) {

        bonus = 0;

    } else if (experience >= 2 && experience < 5) {

        bonus = basicSalary * 0.1;

    } else {

        bonus = basicSalary * 0.2;
    }

    let finalSalary = basicSalary + bonus;

    if (isWeekend === true) {

        finalSalary = finalSalary + 500;
    }

    return finalSalary;
}