// this is just so I can use .map later. this function is dumb.
function trimThat(elem)
{
    return elem.trim();
}

// Prompts for all of the input. Prompts are obnoxious.
let stringBread = prompt('What kind of bread (white, wheat, flat)?', 'italian');
let stringMeat = prompt('What kind of meat? (Separate meats with a comma if you would like more than one.', 'roast beef, turkey breast');
let stringToppings = prompt('What toppings would you like? (Separate multiple toppings with a comma.)', 'pepper jack, lettuce, tomatoes');
let stringCondiments = prompt('What condiments would you like? (Separate multiple condiments with a comma.)', 'mustard, oil, vinegar');


// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// do the splits; also, trim any leading and following white space with map. It's kind of silly.
let meatArray = (stringMeat.split(','));
meatArray = meatArray.map(trimThat);
let toppingArray = (stringToppings.split(','));
toppingArray = toppingArray.map(trimThat);
let condimentArray = stringCondiments.split(',');
condimentArray = condimentArray.map(trimThat);

// DO MATH
let meatCost = meatArray.length * prices["meat"];
let toppingCost = toppingArray.length * prices["topping"];
let condimentCost = condimentArray.length * prices["condiment"];

// DO MORE MATH
let subtotal = prices["sandwich"] + meatCost + toppingCost + condimentCost;

// DO FANCIER MATH
let waStateTaxRate = 0.101;
let orderTax = (subtotal * waStateTaxRate);

// THE FINAL MATH
let totalPrice = subtotal + orderTax;
let suggestedTipLow = subtotal * 0.10;
let suggestedTipMed = subtotal * 0.15;
let suggestedTipHigh = subtotal * 0.20;


// Step Three //////////////////////////////////////////////////////////
//
// TODO: Now that we've calculated all the values, insert them into this
// template literal using proper expression tags. Note that we must provide
// all of the info the user gave us to confirm the order, and then we must also
// provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${stringBread}</p>
    <p>Meat: ${meatArray.join(', ')}</p>
    <p>Toppings: ${toppingArray.join(', ')}</p>
    <p>Condiments: ${condimentArray.join(', ')}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${(prices["sandwich"]).toFixed(2)}</p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
    <h1>Suggested Tips</h1>
    <div class="tip-flex">
        <p class="text-center">10%<br>$${suggestedTipLow.toFixed(2)}</p>
        <p class="text-center">15%<br>$${suggestedTipMed.toFixed(2)}</p>
        <p class="text-center">20%<br>$${suggestedTipHigh.toFixed(2)}</p>
    </div>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
