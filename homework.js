/* jshint esversion: 6 */

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.

*/
/* WRITE YOUR CODE HERE */

let numbers_string = ["One", "Two", "Three"];


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

let personal_details = {
  name: "Kapil",
  surname: "Thapliyal",
  email_address: "kapilthapliyal0001@gmail.com",
  age: 25
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */

console.log(personal_details);

personal_details.drive_lic = false;


/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */

delete personal_details.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */

let person2_details = {
  name: "John",
  surname: "Wick",
  email_address: "johnwick0001@gmail.com",
  age: 42
};

console.log("The email address of both person is Same: " + (person2_details.email_address === personal_details.email_address));



/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR CODE HERE */

let totalShoppingCart = 72;
let total_cost = 0;
let shipping_charges = false;

if (totalShoppingCart > 50) {
  total_cost = totalShoppingCart;
  shipping_charges = false;
  console.log("Total cost is: " + total_cost);
} else {
  total_cost = totalShoppingCart + 10;
  shipping_charges = true;
  console.log("Total cost is: " + total_cost);
}



// var charge = (shipping_charges == true) ? " " : " No";

// console.log("The user total cost is: " + total_cost + " because there is " + console.log(charge) + " shipping charges");


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */


if (totalShoppingCart > 50) {
  total_cost = totalShoppingCart * 0.8;
  shipping_charges = false;
  console.log("Total cost is: " + total_cost);
} else {
  total_cost = (totalShoppingCart * 0.8 + 10);// real world 
  shipping_charges = true;
  console.log("Total cost is: " + total_cost);
}



/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
/* WRITE YOUR CODE HERE */

var car = {
  brand: "Tesla",
  model: "S",
  licensePlate: "JNCJE JND 798"
};

var clone1 = Object.assign({}, car);
clone1.licensePlate = "KNCJKDE KJNC 779";

var clone2 = Object.assign({}, car);
clone1.licensePlate = "KNCJKDE CEDC 359";

var clone3 = Object.assign({}, car);
clone1.licensePlate = "KNCJKDE FCEC 355";

var clone4 = Object.assign({}, car);
clone1.licensePlate = "KNCJKDE FCEC 725";

var clone5 = Object.assign({}, car);
clone1.licensePlate = "KNCJKDE FEC 734";

console.log(clone1, clone2, clone3, clone4, clone5);



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
/* WRITE YOUR CODE HERE */


let carsForRent = [clone1, clone2, clone3, clone4, clone5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
/* WRITE YOUR CODE HERE */

carsForRent.splice(0, 1);
carsForRent.splice(-1, 1);

console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */

console.log(typeof(clone1.licensePlate));
console.log(typeof(clone1.model));
console.log(typeof(clone1.brand));


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
/* WRITE YOUR CODE HERE */

let car6 = {
  brand: "Merc.",
  model: "S",
  licensePlate: "JNCJE JND 798"
};
let car7 = {
  brand: "BMW",
  model: "R",
  licensePlate: "JNCJE JND 798"
};
let car8 = {
  brand: "Toyot.",
  model: "XY",
  licensePlate: "JNCJE JND 798"
};

let carsForSale = [car6, car7, car8];

let totalCars = carsForSale.length + carsForRent.length;

console.log("Total cars available are: " + totalCars);




/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
/* WRITE YOUR CODE HERE */

console.log(carsForSale);

// ******************************  EXTRAS QUESTIONS  *******************************

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR CODE HERE */

let arr = [1,3,5];
let inv_arr = [];

for (i = 0; i < arr.length; i++) {
    inv[-1] = arr[i];
}

console.log(inv_arr);



// ******************************  ******************************* Code irrvalent !!


// let arr = [1, 3, 5];
//
// for (int i = 0; i < arr.length; i++) {
//     let num1 = arr[i];
//     let min_ele = num1;
//     let min_idx = 0;
//
//     for (int j = i; j < arr.length; j++) {
//
//       if (arr[j] <= num1) {
//
//          min_ele = arr[j];
//          min_inx = j;
//
//       }
//
//     }
//     arr[i] = min_ele;
//     arr[j] = num1;
// }



// // **************************************
//
//               let arr1 = [1, 3, 5];
//
// 						  for (k = 0; k < arr1.length; k++) {
// 							  int min_idx = k;
// 							  int min_ele = arr[k];
//
//
// 							  for (l = k; l < num_ele; l++) {
// 								  if (min_ele <= arr[l]) {
// 									  min_ele = arr[l];
//
// 									  min_idx = l;
// 									//   System.out.print(" " +min_ele + " is the min ele; ");
// 								  }
// 							  }
// 							  arr[min_idx] = arr[k];
// 							  arr[k] = min_ele;
//
// 						  }
//
// 						//   for (int p = 0 ; p <= num_ele; p++) {
// 						//   }
// 					  }
// 	}


  // ****************************************

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

/* WRITE YOUR CODE HERE */

let arr1 = [1, 3, 5];

let max_ele = 0;

for (i = 0; i < arr1.length; i++) {
  if (max_ele <= arr[i]) {
    max_ele = arr[i];
  }
}

console.log(max_ele);



  /* EXERCISE 3
  Write the code to get the minimum value in an array.
  */

  /* WRITE YOUR CODE HERE */

  let min_ele = 0;

  for (i = 0; i < arr1.length; i++) {
    if (min_ele <= arr[i]) {
      max_ele = arr[i];
    }
  }

  /* EXERCISE 4
  Write the code to get only even numerical values in an array.
  */

  /* WRITE YOUR CODE HERE */



  /* EXERCISE 5
  Write the code to delete even entries from an array.
  */

  /* WRITE YOUR CODE HERE */

  /* EXERCISE 6
  Write the code to remove all the vowels from a string.
  */

  /* WRITE YOUR CODE HERE */

  /* EXERCISE 7
  Write the code to increase all the numeric values in a array by 1.
  */

  /* WRITE YOUR CODE HERE */

  /* EXERCISE 8
  Replace all the strings in an array with their length.
  es.: ["strive", "is", "great"] => [6, 2, 5]


  */

  /* WRITE YOUR CODE HERE */

  /* WHEN YOU ARE FINISHED
  Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
  */
