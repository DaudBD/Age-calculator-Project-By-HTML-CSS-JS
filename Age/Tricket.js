🧠 Problem — Movie Ticket Calculator

// একটা function বানাবে getTicketPrice(age, isWeekend)।

// Rules:

// বয়স ৫ বছরের কম → Free
// বয়স ৫ থেকে ১২ → 100 টাকা
// বয়স ১৩ থেকে ৫৯ → 200 টাকা
// বয়স ৬০ বা তার বেশি → 120 টাকা
// isWeekend যদি true হয়, তাহলে ticket price-এর সাথে 50 টাকা extra যোগ হবে।
// শেষে total ticket price return করবে।


function getTicketPrice(age, isWeekend) {

let ticketprice ;

    if ( age < 5 ) {
        ticketprice = 0;
    } else if ( age >=5 && age <= 12) {
        ticketprice = 100;
    } else if ( age >= 13 && age <= 59) {
     ticketprice = 200;
    } else {
        ticketprice = 120;
    }
        if (isWeekend === true){
            ticketprice = ticketprice + 50;
        }
       return ticketprice;
    }
