
let cartCount = 0;

let cartTotal = 0;


let currentProduct = {

    name: "Black Oud",

    price: 89

};



/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {


    cartCount++;

    cartTotal += price;


    document
        .getElementById("cartCount")
        .innerText = cartCount;


    const message =
        document.getElementById("cartMessage");


    message.innerText =
        name + " added to cart ✓";


    message.style.display =
        "block";


    setTimeout(function() {

        message.style.display =
            "none";

    }, 2200);

}



/* =========================
   CURRENT PRODUCT
========================= */

function addCurrentProduct() {

    addToCart(

        currentProduct.name,

        currentProduct.price

    );

}



/* =========================
   PRODUCT DETAILS
========================= */

function showDetails(

    name,
    price,
    description,
    image

) {


    const numericPrice =
        parseFloat(
            price.replace("$", "")
        );


    currentProduct = {

        name: name,

        price: numericPrice

    };


    document
        .getElementById("detailName")
        .innerText = name;


    document
        .getElementById("detailPrice")
        .innerText = price;


    document
        .getElementById("detailDescription")
        .innerText = description;


    document
        .getElementById("detailImage")
        .src = image;


    document
        .getElementById("details")
        .scrollIntoView({

            behavior: "smooth"

        });

}



/* =========================
   OPEN CHECKOUT
========================= */

function openCheckout() {


    if (cartCount === 0) {

        alert(
            "Your cart is empty. Please add a perfume first."
        );

        return;

    }


    document
        .getElementById("checkoutItems")
        .innerText = cartCount;


    document
        .getElementById("checkoutTotal")
        .innerText =
        cartTotal.toFixed(2);


    document
        .getElementById("paymentModal")
        .style.display = "flex";

}



/* =========================
   CLOSE CHECKOUT
========================= */

function closeCheckout() {


    document
        .getElementById("paymentModal")
        .style.display = "none";

}



/* =========================
   PAYMENT METHOD
========================= */

function changePayment(method) {


    document
        .getElementById("cardPayment")
        .style.display = "none";


    document
        .getElementById("mobilePayment")
        .style.display = "none";


    document
        .getElementById("codPayment")
        .style.display = "none";



    if (method === "card") {

        document
            .getElementById("cardPayment")
            .style.display = "block";

    }



    if (method === "mobile") {

        document
            .getElementById("mobilePayment")
            .style.display = "block";

    }



    if (method === "cod") {

        document
            .getElementById("codPayment")
            .style.display = "block";

    }

}



/* =========================
   PLACE ORDER
========================= */

function placeOrder() {


    const method =
        document
            .querySelector(
                'input[name="payment"]:checked'
            )
            .value;



    /* CARD */

    if (method === "card") {


        const name =
            document
                .getElementById("cardName")
                .value
                .trim();


        const card =
            document
                .getElementById("cardNumber")
                .value
                .trim();


        const expiry =
            document
                .getElementById("expiry")
                .value
                .trim();


        const cvv =
            document
                .getElementById("cvv")
                .value
                .trim();



        if (
            !name ||
            !card ||
            !expiry ||
            !cvv
        ) {

            alert(
                "Please complete your card details."
            );

            return;

        }

    }



    /* EASYPAISA / JAZZCASH */

    if (method === "mobile") {


        const mobile =
            document
                .getElementById("mobileNumber")
                .value
                .trim();



        if (!mobile) {

            alert(
                "Please enter your EasyPaisa / JazzCash number."
            );

            return;

        }

    }



    /* SUCCESS */

    alert(

        "🎉 Order placed successfully! " +
        "Thank you for shopping with NOIRÉ."

    );


    closeCheckout();


    cartCount = 0;

    cartTotal = 0;


    document
        .getElementById("cartCount")
        .innerText = "0";

}



/* =========================
   NEWSLETTER
========================= */

function subscribe() {


    const email =
        document
            .getElementById("email")
            .value
            .trim();


    if (!email) {

        alert(
            "Please enter your email."
        );

        return;

    }


    alert(
        "Thank you for subscribing to NOIRÉ!"
    );


    document
        .getElementById("email")
        .value = "";

}



/* =========================
   CLOSE MODAL BY CLICKING
   OUTSIDE
========================= */

document
    .getElementById("paymentModal")
    .addEventListener(
        "click",
        function(event) {


            if (
                event.target === this
            ) {

                closeCheckout();

            }

        }
    );
