//------------------------------- Changing case ------------------------------------------------

// Q No. 1: Write a program that takes user input. Convert and show the input in capital letters.

// var nam = prompt("Enter any string");
// nam = nam.toUpperCase();
// alert(nam);

// Q No. 2: Write a program that takes user input. Convert and show the input in title case.

// var user_input = prompt("Enter any string")
// var firstletter = user_input.slice(0,1).toUpperCase()
// var otherletters = user_input.slice(1).toLowerCase()
// alert(firstletter + otherletters)

//-----------------------------Strings: measuring length and extracting parts-----------------------

// Q No. 1: Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser.

// var user_input = prompt("Enter any string");
// var length = user_input.length;
// alert("length of user input is " + length)

// Q No. 2: Write a program to display the last character of a user input.

// var user_input = prompt("Enter any string");
// var lastletter = user_input.slice(-1)
// alert(lastletter)

//------------------------------ Strings: finding segments ------------------------------------------

// Q No. 1: Write a program to find the index of letter “n” in the word “Pakistani” and display 
// the result in your browser.

// var country = "Pakistani";
// var i = country.indexOf("n");
// alert(i);

// Q No. 2: Write a program to take user input and store username in a variable. If the username 
// contains any special symbol among (@ . , !), prompt the user to enter a valid username.

// var username = prompt("Enter username");
// for (var i=0; i<=username.length-1; i++) {
//     var txt = username.slice(i, i+1);
//     if (txt == "@") {
//     alert("Enter a valid username");
// }
//  else if (txt == ".") {
//     alert("Enter a valid username");
// }
//  else if (txt == ",") {
//     alert("Enter a valid username");
// }
//  else if (txt == "!") {
//     alert("Enter a valid username");
// }
// }

// Q No. 3: You have a string “The quick brown fox jumps over the lazy dog”. Write a program 
// to count number of occurrences of word “the” in given string.

// var A = "The quick brown fox jumps over the lazy dog";
// var c = 0;
// for (var i=0; i<=A.length-1; i++) {
//       var b = A.slice(i, i+3);
//       if (b == "the") {
//         c++;
//       }
// }
// alert("Number of accurrences of word 'the' is " + c);

//------------------------------ Strings: finding a character at a location --------------------------

// Q No. 1: Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and 
// display the result in your browser.

// var A = "Hyderabad";
// A = A.replace("Hyder" , "Islam");
// alert(A);

// Q No. 2: Write a program to replace all occurrences of “and” in the string with “&” and 
// display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace(/and/g , "&");
// alert(message);

//------------------------------------- Rounding numbers -----------------------------------

// Q No. 1: Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter any positive integer");
//document.write(number);
// var A = Math.round(number);
// document.write(A);
// var B = Math.floor(number);
// document.write(B);
// var C = Math.ceil(number);
// document.write(C);

// Q No. 2: Write a program that takes a negative floating point number from user & display the following 
// in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = prompt("Enter any positive integer");
//document.write(number);
// var A = Math.round(number);
// document.write(A);
// var B = Math.floor(number);
// document.write(B);
// var C = Math.ceil(number);
// document.write(C);

// ----------------------------Generating random numbers---------------------------------------------

// Q No. 1: Write a program that simulates a dice using random() method of JS Math class. Display 
// the value of dice in your browser.

// var dice = Math.ceil(Math.random() * 6);
// alert(dice);

// Q No. 2: Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser. 2 = Heads and 1 = Tails

// var toss = Math.ceil(Math.random()*2);
// alert(toss);

// Q No. 3: Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret number, 
// congratulate the user.

// var s_num = Math.ceil(Math.random() * 10);
// var A = prompt("Enter any number between 1 and 10");
// if (A == s_num) {
//     alert("Congratulations!")
// }

// -------------------------Converting strings to integers and decimals ---------------------------------
// Q No. 1: Write a program that asks the user about his weight. Parse the user input and display 
// his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// function weight() {
//     var weight = prompt("Enter your weight");
// var a = weight.length - 1;
// for (var i=0; i<=a; i++) {
//     var b = weight.split(" ");
//      parseInt(b.slice(0, 1))
//      var c = b.slice(1).toString();
// }
// alert(b + c);
// }

// ---------------------------Converting strings to numbers, numbers to strings--------------------------

// Q No. 1: Write a program that converts a string “472” to a number 472. Display the values & types 
// in your browser. Hint: (use typeof())

// var A = "472";
// var B = Number (A);
// alert("Type of variable is:  " + typeof (B));


// Q No. 2: Write a program that converts the variable num to string. var num = 35.36 ; Remove the 
// dot to display “3536” display in your browser.

// var num = 35.36;
// var a = num.toString().replace(".", "");
// alert(a);

// -------------------------- Controlling the length of decimals ---------------------------------------
// Q No. 1: Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100;
//  -> 66.66666666666666

//  var percentage = 30 / 45 * 100;
//  alert(percentage.toFixed(2));


//---------------------------------------Chapter#: 31-34------------------------------------------------
// Q No. 1: Write a program that displays current date and time in your browser.

// var todaydate = new Date();
// document.write(todaydate);

// Q No. 2: Write a program that alerts the current month in words. For example December.

// var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var todaydate = new Date();
// var C_month = todaydate.getMonth();
// document.write("Current month: " + monthNames[C_month]);

// Q No. 3: Write a program that alerts the first 3 letters of the current day, for example if today 
// is Sunday then alert will show Sun.

// var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// var todaydate = new Date();
// var today = todaydate.getDay();
// document.write("Today is: " + dayNames[today]);

// Q No. 4: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// var todaydate = new Date();
// var today = todaydate.getDay();
// var day = dayNames[today];
// if (day === "Sat" || day === "Sun") {
//     document.write("It's Fun day");
// } else {
//     document.write("Working day");
// }

// Q No. 5: Write a program that shows the message “First fifteen  days of the month” if the date 
// is less than 16th of the month else shows “Last days of the month”.

// var todaydate = new Date();
// var date = todaydate.getDate();
// if (date <= 15) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// }

// Q No. 6: Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns 
// it to a variable that hasn't been declared beforehand. Use any variable you like to represent 
// the Date object.

// var todaydate = new Date();
// var specdate = new Date("Jan 01, 1970");
// document.write(specdate + "<br>")
// var time2 = specdate.getTime();
// var time1 = todaydate.getTime();
// var diff = time1 - time2
// document.write("Current date: " + todaydate)
// document.write("<br>Elapsed millisecond since January 1, 1970: " + diff)
// var a = (diff / 1000 * 60 * 60);
// document.write("<br>Elapsed minutes since January 1, 1970: " + a)

// Q No. 7: Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var todaydate = new Date();
// var time = todaydate.getHours();
// alert(todaydate);
// if (time >= 1200 || time <= 2400) {
//     alert("It's PM");
// } else {
//     alert("It's AM");
// }

// Q No. 8: Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

// Q No. 9: Create a date object of the starting date of this Ramadan and alert the number of days 
// past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015.

// var todaydate = new Date();
// var specdate = new Date("June 18, 2015");
// var day1 = todaydate.getTime();
// var day2 = specdate.getTime();
// var diff = day1 - day2;
// var dayspassed = Math.floor(diff / (1000 * 60 * 60 * 24));
// document.write(dayspassed + " days have passed since 1st Ramadan, 2015")


// Q No. 10: Write a program that displays in your browser the seconds that elapsed between the 
// reference date and the beginning of 2015.

// var specdate = new Date("Dec 05, 2015");
// specdate.setHours(22);
// specdate.setMinutes(50);
// specdate.setSeconds(16);
// var specdate1 = new Date("Jan 01, 2015");
// var t1 = specdate.getTime();
// var t2 = specdate1.getTime();
// var t_diff = t1 - t2;
// t_diff = t_diff / (1000 * 60);
// var sec_passed = Math.floor(t_diff);
// document.write("On reference date " + specdate + ", " + sec_passed + " seconds had passed since beginning of 2015 ")

// Q No. 11: Create a Date object for the current date and time.  Extract the hours, reset the date 
// object an hour ahead and finally display the date object in your browser.

// var todaydate = new Date();
// document.write("Current date: " + todaydate + "<br>");
// var hours = todaydate.getHours();
// hours = hours + 1;
// var set_time = todaydate.setHours(hours)
// document.write("1 hour ago, it was " + todaydate);

// Q No. 12: Write a program that creates a date object and show the date in an alert box that is 
// reset to 100 years back?

// var todaydate = new Date();
// document.write("Current date: " + todaydate + "<br>");
// var year = todaydate.getFullYear();
// year = year - 100;
// var set_year = todaydate.setFullYear(year)
// document.write("100 years back, it was " + todaydate);

// Q No. 13: Write a program to ask the user about his age. Calculate and show his birth year in 
// your browse.

// var todaydate = new Date();
// var age = prompt("Enter your age");
// var birthyear = (todaydate.getFullYear()) - age;
// document.write("Your age is " + age + "<br> Your birth year is " + birthyear);

// Q No. 14: Write a program to generate your K-Electric bill in your browser. All the amounts should 
// be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable 
// (after Due Date) = Net Amount + Late Payment Surcharge.

// var todaydate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var customerName = prompt("Enter your name");
// var currentMonth = todaydate.getMonth();
// var No_of_units = 410;
// var chargesperunit = 16;
// var latePaymentsurcharge = 350;
// var netAmount = (No_of_units * chargesperunit);
// var grossAmount = (netAmount + latePaymentsurcharge);
// document.write("<b> K-Electric Bill</b><br><br>" + "Customer Name: " + customerName + "<br>Current Month: " + months[currentMonth]);
// document.write("<br>Number of units: " + No_of_units + "<br>Charges per unit: " + chargesperunit + "<br>Net Amount Payable (within Due Date): ");
// document.write( netAmount + "<br>Late Payment Surcharge: " + latePaymentsurcharge + "<br>Gross Amount Payable (after Due Date): " + grossAmount);

//---------------------------------------- Chapter#: 35-38 ---------------------------------------------

// Q No. 1: Write a function that displays current date & time in your browser.

// function telldate() {
//   var now = new Date();
//    document.write(now);
// }

// Q No. 2: Write a function that takes first & last name and then it  greets the user using his full 
// name.

// function greetings() {
//     var a = prompt("Enter first name");
//     var b = prompt("Enter last name");
//     document.write("Hi! " + a + " " + b + "<br>Welcome to our page");
// }

// Q No. 3: Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//    function SUM() {
//    var a = + prompt("Enter first number");
//    var b = + prompt("Enter second number");
//    var sum = a + b;
//    alert("Sum of two numbers is: " + sum)
//    }

// Q No. 4: Calculator:
// Write a function that takes three arguments num1, num2  & operator & compute the desired operation. 
// Return and show the desired result in your browser.

// function calculator() {
//     var num1 = + prompt("Enter first number");
//     var num2 = + prompt("Enter second number");
//     var operator = prompt("Enter operator");
//     var operation; 
//     if (operator == "+") 
//     {
//       operation = num1 + num2;  
//     } 
//     else if (operator == "-") 
//     {
//       operation = num1 - num2; 
//     } 
//     else if (operator == "*") 
//     {
//       operation = num1 * num2;
//     } 
//     else if (operator == "/") 
//     {
//       operation = num1 / num2; 
//     } 
//     else if (operator == "%") 
//     {
//       operation = num1 % num2;  
//     }
//     alert(operation);
// }

// Q No. 5: Write a function that squares its argument.

// function square(a) {
//     var a;
//     var b = a ** 2;
//     alert(b);
// }

// Q No. 6:  Write a function that computes factorial of a number.

// function fraction() {
//     var a = + prompt("enter any number");
// var fact = 1;
// if (a == 0){
//     alert(fact);
// } else if (a < 0) {
//     alert("Error! Factorial for negative number does not exist.")
// } else if (a > 0) {
//     for (var i=1; i<=a; i++) {
//         fact = fact * i;
//     }
// }
// alert(fact);
// }

// Q No. 7: Write a function that take start and end number as inputs & display counting in your browser.

// function counting() {
// var a = + prompt("enter start number of counting");
// var b = + prompt("enter end number of counting");
// for (var i=a; i<=b; i++) {
//     document.write(i + "<br>")
// }
// }

// Q No. 8: Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculatehypotenuse(base, perpendicular) {
   
// var Hypotenuse;
// var Hypotenusesquare;

// function calculatesquare() {
//     var basesquare = Number (base * base);
//   var perpendicularsquare = Number (perpendicular * perpendicular);
//      Hypotenusesquare = basesquare + perpendicularsquare;
//     return Hypotenusesquare;
//  }

// calculatesquare();

//  Hypotenuse = Math.sqrt(Hypotenusesquare);
//   alert("Hypotenuse is: " + Hypotenuse);

// }

// Q No. 9: Write a function that calculates the area of a rectangle. A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// i.
// function Areaofrectangle(w, h){
//  var a = w * h;
//  alert("Area of a rectangle is: " + a);
// }

// ii.

//   w = + prompt("Enter width");
   
//   h  = + prompt("Enter height");
// function Areaofrectangle(w, h){
    
//     var a = w * h;
//     alert("Area of a rectangle is: " + a);
//    }
  
// Q No. 10:  Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// var string = prompt("Enter any string");
// function palindrome(string) {
// var len = string.length;
// var msg = "It is a Palindrome";
// for (var i=0; i<len/2; i++) {
//     if (string[i] != string[len - 1 - i]) { 
//         msg = "It is not a Palindrome";
// }
// }
// alert( string + " : " + msg);
// }

// Q No. 11: Write a JavaScript function that accepts a string as a parameter and converts the first 
// letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox

// function Capitilized(string) {
//         var str = string.split(" ");
        
//         for (var i = 0; i < str.length; i++) {
//             var b = str[i].slice(0, 1);
//             b = b.toUpperCase();
//             var c = str[i].slice(1);
//              c = c.toLowerCase();
//              document.write(b + c + " ");
//         }
        
//     }
    
// Q No. 12: Write a JavaScript function that accepts a string as a parameter and find the longest 
// word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development

// function longestWord(string) {
//     var str = string.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             word = str[i];
//         }
//     }
//     alert(word);
// }

    
// Q No. 13: Write a JavaScript function that accepts two arguments, a string and a letter and the 
// function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// var a = "facebook.com";
// var b = "o";
// function abc(a, b) {
//     var count = 0;
//  for (i=0; i<=a.length-1; i++) {
//     var c = a.slice(i, i+1);
//     if (c == b) {
//         count = count + 1;
//     }  
//  }
//  alert(count);
// }

// Q No. 14:  The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(r) {
//     var c = 2 * 3.14 * r;
//     alert("Circumference of circle = " + c)
// }

// function calcArea(r){
//     var a = 3.14 * r * r;
//     alert("Area of circle = " + a)
// }
