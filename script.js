let kutu1 = document.getElementById("home");
let kutu2 = document.getElementById("guest");

let sayi = 0;
let sayiTwo = 0;
//Home Box functions

function toplamOne() {
    sayi += 1;
    kutu1.textContent = sayi;
}

function toplamTwo() {
    sayi += 2;
    kutu1.textContent = sayi;
}

function toplamThree() {
    sayi += 3;
    kutu1.textContent = sayi;

}

//Guest Box functions

function rakipBir() {
    sayiTwo += 1;
    kutu2.textContent = sayiTwo;
}

function rakipIki() {
    sayiTwo = sayiTwo + 2;
    kutu2.textContent = sayiTwo;
}

function rakipUc() {
    sayiTwo += 3;
    kutu2.textContent = sayiTwo;

}