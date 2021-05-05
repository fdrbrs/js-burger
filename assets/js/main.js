//array di coupons

coupons = [
    "42bool",
    "pannacotta",
    "risotto",
    "abbacchio",
    "12345ABCDEF"
]


//funzione per calcolare il prezzo
document.querySelector('button').addEventListener('click', function () {
    var startingPrice = 50;
    var checks = document.querySelectorAll("input[type='checkbox']");
    var sommaIngredienti = 0;
    for (var i = 0; i < checks.length; i++){
        var element = checks[i];
        if(element.checked){
            sommaIngredienti += Number(element.getAttribute('data-price'))
        }
    }

    var totalPrice = startingPrice + sommaIngredienti;

    var finalPrice;
    var couponInput = document.getElementById('coupon').value;
    console.log(couponInput);



    document.getElementById('final_price').innerHTML = totalPrice + ' €'

})

