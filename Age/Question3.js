
let userName = userName.toLowerCase();
function validateUsername(userName){
if (userName.length > 4){
    return  "Too Short"
} else if (userName.includes(" ")) {
    return  "No Spaces Allowed"
} else if (userName === "admin" || userName === "user") {
    return  "Reserved Word"
} else {
    return  "Available"
}


const getChaseVerdict = (target, scored, ballsLeft) => {
const runsNeeded = target - scored;
if (runsNeeded <= 0) {
    return "Won";
} else if (ballsLeft <= 0) {
     return "Lost";
}
     const requiredRate = (runsNeeded / ballsLeft) * 6

     if (requiredRate <= 6) {
        return "Comfortable"
     } else if (requiredRate <= 12) {
        return "Tough"
} else {
    return "Impossible"

}
};

console.log(getChaseVerdict(200, 150, 30));

const getCngFare = (distance, isNight, waitingMinutes) => {

}


function getGrade(mark) {
    if (mark >= 80) {
        return "A+"
    } else if (mark >= 70) {
        return "A"
    } else if (mark >= 60){
        return "B"
    } else if (mark >= 50) {
        return "C"
    } else if (mark >= 40) {
        return "D"
    } else {
        retrun "F"
    }
}


function getDiscount(price) {
let discountAmount;
    if (price >= 5000) {
     discountAmount = price * 20 / 100;
    } else if (price>= 3000) {
      discountAmount = price * 15 / 100;
    } else if (price >= 1000) {
       discountAmount = price * 10 / 100;
    } else {
        return " No Discount"
    }

    let finalPrice = price -discountAmount;
    return finalPrice;
 
    console.log(finalPrice);
}


// Mini Challenge — Electricity Bill

function calculateBill(units) {

    let bill;

    if (units <= 100) {

        bill = units * 5;

    } else if (units <= 200) {

  bill = (100 * 5) + ((units - 100) * 7);

    } else {
  bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
        

    }

    return bill;
}
console.log(calculateBill(50));   // 250
console.log(calculateBill(150));  // 850
console.log(calculateBill(250));  // 1350

function getTime() {
    const now = new Date();
      const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
}
console.log(now.getSeconds());