

// function calculateTotal(price, quantity) {

// }
// Rules
// price × quantity করে subtotal বের করবে।
// Subtotal >= 5000 হলে 20% discount
// Subtotal >= 3000 হলে 15% discount
// Subtotal >= 1000 হলে 10% discount
// এর নিচে কোনো discount নেই।
// শেষে final price return করবে।
function calculateTotal(price, quantity) {

    let subtotal = price * quantity;

    let discount;

    if (subtotal >= 5000) {

        discount = subtotal * 0.2;

    } else if (subtotal >= 3000) {

        discount = subtotal * 0.15;

    } else if (subtotal >= 1000) {

        discount = subtotal * 0.1;

    } else {

        discount = 0;
    }

    let finalprice = subtotal - discount;

    return finalprice;
}


