// jshint esversion:6

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

* --------------------------------------------------------------------------------------------------------------------------------/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.


   string  : refers to a bunch to alpha numeric or any characters or any form of digits/ symbols contained in (" ") OR (' ')
   number  : refers to the numeric values basically to quantify things
   boolean : refers to the TRUE or FALSE results / situations.
   undefined : refers to the state of being not able to judge / tell the type of data type


   */

// --------------------------------------------------------------------------------------------------------------------------------÷

/* EXERCISE 2
Try to describe what a variable is, in your own words.


A variable is any quantity which can change its value and we can't quntisize its value in future and only at the current time stamp. It is mostly
prone to change in value!


*/


// --------------------------------------------------------------------------------------------------------------------------------
/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

                    var sum = 12 + 20;



// --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 4
Create a variable named x containing the number 12.
*/

                    let x = 12;


//  --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

                    let name = "John Doe";



// --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

                      let x = 12;
                      var sub = 12 - x;


// --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2.
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/



                    let name1 = "john";
                    let name2 = "John"
                    var verify = (name1 === name2);
                    console.log(verify);
                    // *********************

                    var verify_lowerCase = (name1.toLowerCase() === name2.toLowerCase());
                    console.log(verify_lowerCase);



// --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 8
Create a variable named x1 (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

                    let x1 = 7;
                    if (x1===7) {
                        console.log("Seven");
                    }
                    else {
                        console.log("The number is not Seven!");
                    }


// --------------------------------------------------------------------------------------------------------------------------------


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/



                        Currrent_status = "Exams";
                        var status_now;

                        var status_now = (Current_status === "Exams") ? "Student" : "Working Professional";





// --------------------------------------------------------------------------------------------------------------------------------


/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
