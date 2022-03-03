// 2 masala ----------------------

// let a = 5;
// let b = 1;
// let c = 3;

// if (a > b && a < c) {
//   console.log(a);
// } else if (b > a && b < c) {
//   console.log(b);
// } else {
//   console.log(c);
// }


// 3 masala ------------------------

// let a = 70;
// let b = 70;

// if (a > 0 && a > b) {
//   console.log(a);
// } else if (b > 0 && b > a) {
//   console.log(b);
// } else {
//   console.log(0);
// }


// 5 masala ------------------------

// let x = -5;
// let natija;

// if (x >= 0) {
//   natija = 2 * Math.sin(x);
//   console.log(natija);
// } else if (x <= 0) {
//   natija = x - 6;
//   console.log(natija);
// } else {
//   console.log("??????");
// }



// 6 masala -------------------------

// let x = 6;
// let natija;

// if (x < -2 || x > 2) {
//   natija = 2 * x;
//   console.log(natija);
// } else {
//   natija = -3 * x;
// }


// 8 masala -------------------

// let a = 7;
// let b = 4;
// let c = 2;

// if (a < b && a < c) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }


// 9 masala --------------------

// let temp = 58;

// if (temp < 0) {
//   console.log("Freezing");
// } else if (temp > 0 && temp <= 10) {
//   console.log("Very Clod");
// } else if (temp > 10 && temp <= 20) {
//   console.log("Cold");
// } else if (temp > 20 && temp <= 30) {
//   console.log("Normal");
// } else if (temp > 30 && temp <= 40) {
//   console.log("Not");
// } else if (temp > 40) {
//   console.log("Vary Not");
// }


// 10 masala -----------------------------

// let a = 0;

// if (a % 2 == 0 && a > 0) {
//   console.log("Musbat Juft son");
// } else if (a % 2 != 0 && a > 0) {
//   console.log("Musbat toq son");
// } else if (a % 2 == 0 && a < 0) {
//   console.log("Manfy just son");
// } else if (a % 2 != 0 && a < 0) {
//   console.log("Manfy toq son");
// } else {
//   console.log("son 0 ga teng");
// }


// 11 masala -----------------------

// let a = 310;

// if (a % 2 == 0 && a > 0 && a >= 10 && a <= 100) {
//   console.log("Ikki honali Juft son");
// } else if (a % 2 != 0 && a > 0 && a >= 10 && a <= 100) {
//   console.log("Ikki honali toq son");
// } else if (a % 2 == 0 && a > 0 && a >= 100) {
//   console.log("Uch honali Juft son");
// } else if (a % 2 != 0 && a > 0 && a >= 100) {
//   console.log("Uch honali toq son");
// }


// 12 masala -----------------------------

// let n = 2;

// if (n == 1) {
//   console.log(n);
// } else if (n == 2) {
//   console.log(n * 2);
// } else if (n == 4) {
//   console.log(n * n);
// }




// for --------------------------------------------------------------------------------------------------


// 1 msala ---------------------

// let n = 10;
// for (let k = 1; k <= n; k++) {
//   console.log(k);
// }



// 2 masala ---------------------

// let a = 5;
// let b = 15;
// let natija = 0;
// for (let i = a; i <= b; i++) {
//   console.log(i);
//   natija += 1;
// }

// console.log("Ciqarilgan sonlarning soni -->", natija);



// 3 masala -----------------------

// let a = 5;
// let b = 15;
// let natija = 0;
// for (let i = b; i >= a; i--) {
//   console.log(i);
//   natija += 1;
// }

// console.log("Ciqarilgan sonlarning soni -->", natija);



// 4 masala -----------------------

// let narx = 3.25;
// let kg = 1;
// let natija = 0;

// for (let i = kg; i <= 5; i++) {
//   natija = narx * i;
// }
// console.log(natija);



// 5 masala -----------------------

// let narx = 3.20;
// let kg = 0.1;
// let natija = 0;

// for (let i = kg; i <= 1.5; i += 0.1) {
//   natija = narx * i;
//   console.log(i);
// }
// console.log("Narxi ->>", natija.toFixed(2));



// 6 masala -----------------------

// let narx = 3.20;
// let kg = 1;
// let natija = 1;

// for (let i = kg; i <= 1.6; i += .1) {
//   natija = narx * i;
// }
// console.log("Narxi ->>", natija.toFixed(2));



// 7 masala ----------------------

// let a = 5;
// let b = 17;
// let natija = 1;

// for (let i = a; i <= b; i++) {
//   natija += i
//   // console.log(i);
// }

// console.log(natija);



// 8 masala ----------------------

// let a = 5;
// let b = 8;
// let natija = 1;

// for (let i = a; i <= b; i++) {
//   natija *= i
//   console.log(i);
// }

// console.log(natija);



// 9 masala ----------------------

// let a = 5;
// let b = 8;
// let natija = 0;

// for (let i = a; i <= b; i++) {
//   natija += Math.pow(i, 2)
//   console.log(i);
// }

// console.log(natija);



// 10 masala --------------------

// let n = 6;
// let natija = 0;

// for (let i = 0; i <= n; i++) {
//   natija += (i + 1) / 2
// }

// console.log(natija);



// 11 masala -----------------------

// let n = 2;
// let natija = 0;

// for (let i = 0; i <= Math.pow((2 * n), 2); i++) {
//   natija += Math.pow(n, 2) + Math.pow((n + 1), 2);
// }

// console.log(natija);



// 12 masala -----------------------

// let n = 1.4;
// let natija = 1;

// for (let i = 1; i <= n; i += .1) {
//   natija *= i
// }

// console.log(natija);



// 13 ?????????????????????????????

// let natija = 0;

// for (let i = 1.1; i <= 1.4; i += .1) {
//   if (i % 2 != 0) {
//     natija -= i
//     console.log(i);
//     console.log(natija);
//   } else {
//     natija += i
//     console.log(i);
//     console.log(natija);
//   }
// }

// console.log(natija);



// 14 masala --------------------------

// let n = 5;
// let natija = 0;

// for (let i = 1; i <= (2 * n - 1); i += 2) {
//   natija += i;
//   console.log("N ->", Math.pow(natija, 2));
// }
// console.log(Math.pow(natija, 2));



// 15 masala -----------------------

// let n = 5;
// let a = 2;
// let natija = 1;

// for (let i = a; i <= n; i++) {
//   natija += Math.pow(i, n) * i;
//   console.log(i);
// }

// console.log(natija);



// 16 masala --------------------

// let a = 5;
// let n = 3;
// let natija = 0;

// for (let i = 1; i <= n; i++) {
//   natija = Math.pow(a, i)
//   console.log(natija);
// }



// 17 masala --------------------

// let a = 5;
// let n = 3;
// let natija = 0;

// for (let i = 1; i <= n; i++) {
//   natija += Math.pow(a, i)
//   console.log(natija);
// }



// 19 masala ----------------

// let n = 5;
// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= i;
//   console.log(natija);
// }



// 20 masala ----------------------

// let n = 5;
// let natija = 1;

// for (let i = 1; i <= n; i++) {
//   natija *= i * i;
//   console.log(i);
//   console.log(natija);
// }

// console.log(natija);







// Fizz Buzz -----------------------

let n = 3;

for (let i = 0; i <= n; i++) {
  if (i % 3 == 0) {
    console.log("Fizz 3 bolinadiganlar");
  }
  else if (i % 5 == 0) {
    console.log("Buzz 5 bolinadiganlar");
  }
  else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz 3 va 5 bolinadiganlar");
  }
  else {
    console.log("Bolinmaydi");
  }
}




