// Chapter # 01

// Task # 01  Write a script to greet your website visitor using JS alertbox.


// alert("Hello! Welcome to our website");

// Task # 02  Write a script to display following message on your webpage:

// alert("Enter! Please enter a valid password.");

// Task # 03 Write a script to display following message on your webpage:

// alert("Welcome to JS Land... \n Happy Coding!");

//  Task # 04 Write a script to display following messages in sequence:

// alert("Welcome to JS Land...");
// alert(" Happy Coding!");

//  Task # 05 Generate the following message through browser’s developer console

// console.log("Hello... I can run JS through my web browser's console");

// Task # 06 done in html file 

// Task # 07 script tag practise (done in html file)





// Chapter # 02

// Task 01
// var username;

// Task 02
// var myName="VijayKumar"

// Task 03
// var message;
// message="Hello World";
// alert(message);

// Task # 04

// var name="VijayKumar";
// var age="24";
// var course="Certfied Mobile Application Development";
// alert(name);
// alert(age+" "+"years old");
// alert(course);


// Task # 05
// alert("PIZZA\nPIZZ\nPIZ\nPI\n\P")

// Task # 06
// var email;
// email="vijaykumar@gmail.com";
// alert("My email address is"+" "+email);

// Task # 07
// alert("I am trying to learn from the Book A smarter way to learn JavaScript")

// Task # 08  Document.write
// document.write("Yah! I can write HTML content through JavaScript");

// Task # 09
// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);




// Chapter # 03

/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */

// var age;
// age=23;
// alert("I am "+ " " + age + "years old");

/*2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”*/

// var counter;
// counter=+prompt("Enter No of visits",);
// alert("You have visited"+ " " + counter + "times");

/*Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/

// var birthYear = 1996;

// document.writeln("My birth year is",birthYear);
// document.writeln("<br> Datatype of declared variable is number");

/*4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order*/

// var vname="vijay"
// var ptitle="T Shirts";
// var quantity=5;

// document.write( "<br>" + vname +" " +"ordered"+ " " +quantity+"  " +ptitle+" on XYZ Clothing store")


// Ch 04
//1. Declare 3 variables in one statement.
// var a,b,c;

//2. Declare 5 legal & 5 illegal variable names.

//Legal Variable:
// var chatApp;
// var $tracker;
// var int1;
// var a;
// var ali_1;

//illegal Variables

//var ?chatapp, 1ali, *a, 1; ali-1;

/*. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/

// document.writeln("<b>Dsplay this in your browser</b><br><br>");
// document.writeln("a) A heading stating “Rules for naming JS variables”<br>" );
// document.writeln("b) Variable names can only contain number,$, and _");
// document.writeln("For example $my_1stVariable <br>");
// document.writeln("c) Variables must begin with $ or _");
// document.writeln("For example $name, _name or name <br>");
// document.writeln("d) Variable names are case sensitive.<br>");
// document.writeln("e) Variable names should not be JS keywords <br>");


// Ch 05
//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.


// var a;
// a=+prompt("Enter 1st number:");

// var b;
// b=+prompt("Enter 2nd number:");
// //1. Addition:


// var c = a+b;
// document.write("Sum of"+" "+ a+  " " + "and" + " "+ b +" " +"is"+ " " +c);

// //2. Multiplication:

// var c = a*b;
// document.write("<br> Multiplication of"+" "+ a+  " " + "and" + " "+ b +" " +"is"+ " " +c);

// //3. Division:


// var c = a/b;
// document.write("<br> Division of"+" "+ a+  " " + "and" + " "+ b +" " +"is"+ " " +c);

// //4. Modulus:


// var c = a%b;
// document.write("<br> Modulus of"+" "+ a+  " " + "and" + " "+ b +" " +"is"+ " " +c);

// //5. Subtraction:

// var c = a-b;
// document.write("<br> Subtraction of"+" "+ a+  " " + "and" + " "+ b +" " +"is"+ " " +c);

// /*Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.*/

// var x;
// document.write("<br>Value after variable declaration is:",x);
// x=5;
// document.write("<br>Initial value: ",x);
// x=++x;
// document.write("<br>Value after increment is: ",x);
// x=x+7;
// document.write("<br>Value after variable addition is:",x);
// x=--x;
// document.write("<br>Value after variable decrement is:",x);
// x=x%3;
// document.write("<br>The remainder is",x);


// /* 4. Cost of one movie ticket is 600 PKR. Write a script to  store ticket price in a variable & calculate the
//  cost of buying 5 tickets to a movie. Example*/

// var a = 600
// var total = a*5
// document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR </br>")

// /* 5. Write a script to display multiplication table of any
//  number in your browser.*/
// document.write("Table of  4" );
// document.write(
//     "4 x 1 =" +4*1+ "<br/>" +
//     "4 x 2 =" +4*2+ "<br/>" +
//     "4 x 3 =" +4*3+ "<br/>" +
//     "4 x 4 =" +4*4+ "<br/>" +
//     "4 x 5 =" +4*5+ "<br/>" +
//     "4 x 6 =" +4*6+ "<br/>" +
//     "4 x 7 =" +4*7+ "<br/>" +
//     "4 x 8 =" +4*8+ "<br/>" +
//     "4 x 9 =" +4*9+ "<br/>" +
//     "4 x 10 =" +4*10+ "<br/>"
// )


// /* 6. The Temperature Converter: It’s hot out! Let’s make a
//  converter based on the steps here.
//  a. Store a Celsius temperature into a variable.
//  b. Convert it to Fahrenheit & output “NN o C is NN o F”.
//  c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.*/

// var c = 25
// var f =(c* 9/5)+32
// document.write(c+"<sup>0</sup>C is "+f+"<sup>0</sup>F ")
// var f = 70
// var c =(f-32) * 5/9
// document.write("<br/>"+f+"<sup>0</sup>C is "+c+"<sup>0</sup>C ")

// /*7. Write a program to implement checkout process of a
//  shopping cart system for an e-commerce website. Store
//  the following in variables
//  a. Price of item 1
//  b. Price of item 2
//  c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges*/

// var item1 = 650
// var item2 = 100
// var qtyitem1 = 3
// var qtyitem2 = 7
// var charges = 100
// var total = item1*qtyitem1+item2*qtyitem2+charges

// document.write(
//     "<h1> Shopping Card </h1>"+
//     "price of item 1 is "+item1+
//     "<br/>Quantity of item 1 is "+qtyitem1+
//     "<br/> Price of item 2 is "+item2+
//     "<br/>Quantity of item 2 is "+qtyitem2+
//     "<br/>Shipping Charges" +charges+
//     "<br/> <br/> <br/>Total cost of your order is "+total

// )


// /* 8. Store total marks & marks obtained by a student in 2
//  variables. Compute the percentage & show the result in
//  your browser*/

// var totalMarks = 980
// var marksObtained = 804
// var percentage = 804/980 *100

// document.write(
//     "<h1> Marks Sheet </h1>" +
//     "Total marks :" +totalMarks+
//     "<br/>Marks obtained :" +marksObtained+
//     " <br/> Percentage :" +percentage

// )

// /* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//  script to convert the total currency to Pakistani Rupees.
//  Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//  and 1 Saudi Riyal = 28 Pakistani Rupee)*/

// var dollar = 104.80 * 10
// var sar = 28 * 25
// var pkr = dollar+sar 

// document.write("<h1> Currency in PKR </h1> Total Currency in PKR:" +pkr)

// /* 10. Write a program to initialize a variable with some
//  number and do arithmetic in following sequence:
// a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression*/

// var num = 1
// num = ((num+5)*10)/2


//  /*11. The Age Calculator: Forgot how old someone is?
//  Calculate it!
//  a. Store the current year in a variable.
//  b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.*/

// var currentYear = 2020
// var birthYear = 1992
// var age = currentYear-birthYear
// document.write("<h1>Age Calculator</h1>currentYear: "+currentYear+"</br>birthYear: "+birthYear+"</br>currentage"+age)


// /*12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
//  b. Calculate the circumference based on the radius, and
//  output “The circumference is NN”.*/



// var radius = 20
// var circumference = 2 * 3.142 * radius
// var area = 3.142 * radius * radius

// document.write (
//     "<h1>The Geometrizer </h1>"
//     +"Radius of a circle :" +radius+
//     "<br/> The circumference is : "+circumference+
//     "<br/> The area is : "+area

// )

// /* 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
//  b. Store your current age into a variable.
// c. Store a maximum age into a variable.
//  d. Store an estimated amount per day (as a number).
//  e. Calculate how many would you eat total for the rest of
//  your life.*/

// var snack = "chocolate chip"
// var age = 15
// var maxAge = 65
// var amntPerDay = 3
// var total = (maxAge -age)*amntPerDay

// document.write(
//     "<h1> The Life Time Calculator</h1>" +
//     "Favourite Snack : "+snack+
//     "<br/> Current age: " +age+
//     "<br/> Estimated Maximum Age: "+maxAge+
//     "<br/> Amount old snacks Per day: "+amntPerDay+
//     "<br/> You will need: "+total+" "+snack+
//     "to last you untill the ripe old age of" +maxAge

// )


// Chapter 6

/* 1. Write a program to take a number in a variable, do the  required arithmetic to display the following 
result in your browser:*/

// var a = 10;
// document.write(
//     "Result: <br/> The value of a is:" +a+
//     "<br/> ----------------"+

//     "<br/><br/> The value of ++ a is:"+(++a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a++ is:"+(a++)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of  --a is:"+(--a)+
//          "<br/>  Now The value of a is:"+a+

//     "<br/><br/> The value of a-- is:"+(a--)+
//          "<br/>  Now The value of a is:"+a +"</br> </br> </br>"
//         ) 


// /*2. What will be the output in variables a, b & result after  execution of the following script:  
// var a = 2, b = 1;  var result = --a - --b + ++b + b--;*/

// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;

// document.write(" a is ="+a)
// document.write("<br/> b is = "+b)
// document.write("<br/> result is ="+result +"</br> </br>")

// // 3. Write a program that takes input a name from user & greet the user.

// var name = prompt("Enter your Name")
// alert("Hello" +name+" have a good day")

// /* 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
//  should be displayed by default.*/

// var table = prompt("Enter a number for Table","5")
// var x = Number(table);
// var num = 1
// document.write(
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"+
//     x+" x "+num+" = "+ (a*num++)+"<br/>"

// )

// /* 6. Take
//  a) Take three subjects name from user and store them in 3 different variables.
//  b) Total marks for each subject is 100, store it in another variable.
//  c) Take obtained marks for first subject from user and stored it in different variable.*/

// var sub1 = prompt("Enter First Subject Name")
// var sub2 = prompt("Enter Second SUbject Name")
// var sub3 = prompt("Enter Third SUbject Name")
// var sub1Marks = prompt("Enter First Subject Marks")
// var a = Number(sub1Marks)
// var sub2Marks = prompt("Enter Second Subject Marks")
// var b = Number(sub2Marks)
// var sub3Marks = prompt("Enter Third Subject Marks")
// var c= Number(sub3Marks)
// var totalMarks = 100

// document.write(
//               "<table>"+
//               "<tr><th>Subject</th><th> Total Marks</th><th> Obtained Marks</th><th> Percentage</th></tr>"+
//               "<tr><td>"+sub1+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+
//               " %</td></tr>"+"<tr><td>"+sub2+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//               "<tr><td>"+sub3+"</td><td>"+totalMarks+"</td><td>"+a+"</td><td>"+(a/totalMarks*totalMarks)+" %</td></tr>"+
//              "<tr><td></td><td>"+(totalMarks*3)+"</td><td>"+(a+b+c)+"</td><td>"+((a+b+c)/(totalMarks*3)*100)+" %</td></tr>"+
//              "</table>"
//              )



// chapter 9-11
// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("Enter Your City Name")

// if (city === "Karachi"| city === "Karachi"){
//     alert("Welcome to city of lights")
// }

// /* 2. Write a program to take “gender” as input from user. If the
//  user is male, give the message: Good Morning Sir. If the
//  user is female, give the message: Good Morning Ma’am.*/

// var gender = prompt("Enter Your Gender")
// if  (gender === "Male"| gender ==="male"){
//     alert("Good Morning Sir")
// }

// if  (gender === "Female"| gender ==="female"){
//     alert("Good Morning Ma'am")
// }

// // 3. Write a program to take input color of road traffic signal  from the user & show the message according to this table:

//  var light = prompt("Enter Traffic SIgnal Light Color")
//  if (light=== "Red"| light ==="red"){
//      alert("Must Stop")
//  }

//  if (light=== "Yellow"| light ==="yellow"){
//     alert("Ready to move")
// }

// if (light=== "Green"| light ==="green"){
//     alert("Move now")
// }

// // 4. Write a program to take input remaining fuel in car (in  litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car

// var fuel = prompt("Enter Your Remaining Fuel Levl")
// if (fuel === "0.25"){
//     alert("Please refill the fuel in your car")
// }

// // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// // a. var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // b. var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// // c. var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// // d. var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// // e. if (true){
// // alert("True");
// // }
// // if (false){
// // alert("False");
// // }
// // f. if("car" < "cat"){
// //     alert("car is smaller than cat");
// //     }





// /* 6. Write a program to take input the marks obtained in three
//  subjects & total marks. Compute & show the resulting
//  percentage on your page. Take percentage & compute
//  grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:*/

// var totalMarks = 300;
// var sub1 = prompt("Enter Your First Subject Marks")
// var sub2 = prompt("Enter Your Second Subject Marks")
// var sub3 = prompt("Enter Your Third Subject Marks")
// var sub1Marks = Number(sub1)
// var sub2Marks = Number(sub2)
// var sub3Marks = Number(sub3)
// var markObtained = sub1Marks+sub2Marks+sub3Marks
// var percentage = markObtained/totalMarks*100

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }

// if (percentage >= 60){
//     grade = "B";
//     remarks = "You Need to improve";
// }
// if (percentage <= 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write(
//     "<h1>Marks sheet</h1>"+
//     "<br/>Total Marks :"+totalMarks+
//     "<br/>Marks Obtained :"+markObtained+
//     "<br/>Percentage :"+percentage+"%"+
//     "<br/>Grade :"+grade+
//     "<br/>Remarks :"+remarks

// )

// /* 7. Guess game:
//  Store a secret number (ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correctanswer”.
//  b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.*/


// var number = 10
// var userInput = +prompt("Enter the number")
// if (number==userInput){
//     alert("BINGO! Correct Answer")
// }

// else if (userInput+1==number){
//     alert("Close enough to the correct answer")
// }

// else{
//     alert("You lost!")
// }



// /* 8. Write a program to check whether the given number is  divisible by 3. Show the message to the user
//  if the number is divisible by 3.*/

// var num = prompt("Enter a Number to check is divisible by 3")

// if (num % 3 === 0){
//     alert("Your Given Number is Divisible by 3")

// }else {
//     alert("Your Given Number is not Divisble by 3")
// }

// // 9. Write a program that checks whether the given input is an even number or an odd number.

// var num = prompt("Enter a number: ")
// if(num % 2 === 0){
//     alert(num +" is a even number")
// }else{
//     alert(num +" is a odd number")
// }

// /* 10. Write a program that takes temperature as input and shows a message based on following criteria
//    a. T > 40 then “It is too hot outside.”
//    b. T > 30 then “The Weather today is Normal.”
//    c. T > 20 then “Today’s Weather is cool.”
//    d. T > 10 then “OMG! Today’s weather is so Cool.”*/

// var temp = prompt("Enter the temperature")
// var t = Number(temp)

// if (t > 40){
//     alert("It is too hot outside")
// }

// if (t > 30){
//     alert("The weather today is Normal")
// }

// if (t > 20){
//     alert("Today's weather is cool")
// }

// if (t > 10){
//     alert("OMG! Today's weather is a cool")
// }

// /* 11.
//  Write a program to create a calculator for +,-,*, / & %
//  using if statements. Take the following input:
//  a. First number
//  b. Second number
//  c. Operation (+, -, *, /, %)
//  Compute & show the calculated result to user.*/

// var a = prompt("Enter First number")
// var b = prompt("Enter Second number")
// var operator = prompt("Enter an operator operation(+,-,*,/,%)")
// var num1 = Number(a)
// var num2 = Number(b)

// if (operator === "+"){
//     alert ("Your Ans is "+(num1+num2))
// }

// if (operator === "-"){
//     alert ("Your Ans is "+(num1-num2))
// }

// if (operator === "*"){
//     alert ("Your Ans is "+(num1*num2))
// }

// if (operator === "/"){
//     alert ("Your Ans is "+(num1/num2))
// }

// if (operator === "%"){
//     alert ("Your Ans is "+(num1%num2))
// }



// chapter 13-14                
// //1. Write a program that takes a character (number or string)
// // in a variable & checks whether the given input is a
// // number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).

// var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

// var ascii = userInput.charCodeAt(0)
// if (ascii >= 65 && ascii <= 90){
//     alert("you input a Capital letter")
// } else if (ascii >= 97 && ascii <=122){
//     alert("you input a Small letter")
// }else if (ascii >= 48 && ascii <=57){
//     alert("you input a number")
// }
//  else{
//     alert ("Wrong Input!");
//  }

// //  // 2. Write a JavaScript program that accept two integers and
// // // display the larger. Also show if the two integers are equal.

// var num1=+prompt("Enter First Number");
// var num2=+prompt("Enter Second Number");

// if(num1>num2){
//     alert(num1);
// }

// else if(num2>num1){
//     alert(num2);
// }
// else if(num1=num2){
//    alert(num1+" "+"and"+" "+""+num2+" "+"are equal!");
// }
// else{
//     alert("Sorry!");
// }


// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// var num=+prompt("Enter any number");

// if(num>0){
//     alert("The number is Positive");
// }

// else if(num<0){
//     alert("The number is Negative");
// }

// else if(num==0){
//     alert("The number is Zero");
// }

// // 4. Write a program that takes a character (i.e. string of
// //     length 1) and returns true if it is a vowel, false otherwise

// var character=prompt("Enter any character");

// if(character==="a"||character==="i"||character==="o"||character==="u"||character==="e"){
//     document.write("true")
// }
// else{
//     alert("false");
// }

// // 5. Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// // i. Check if user has entered password. If not, then
// // give message “ Please enter your password”
// // ii. Check if both passwords are same. If they are
// // same, show message “Correct! The password you
// // entered matches the original password”. Show
// // “Incorrect password” otherwise

// var pass="vijay123";

// var userPass=prompt("Enter your Password");

// if(userPass==false){
//     alert("Please enter your password");
// }
// else if(pass===userPass){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect Password");
// }

// // 6. This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)}
// else{
// greeting = "Good evening";
// alert(greeting);
// }


// // 7. Write a program that takes time as input from user in 24
// // hours clock format like: 1900 = 7pm. Implement the
// // following case using if, else & else if statements

// var time=+prompt("Enter the time.");

// if(time>=0000 && time<1200){
//     alert("Good morning!");
// }
// else if(time>=1200 && time<1700){
//     alert("Good afternoon!");
// }

// else if(time>=1700 && time<2100){
//     alert("Good evening!");
// }
// else if(time>=2100 && time<=2359){
//     alert("Good night!");
// }

// chapter 14-`16

// Task 1

// var stuNames=[];

// Task 2
// var stuNames=new Array();

// Task 3

// var stuNames=new Array("Vijay","Kumar");

// Task 4

// var rollnumber=[252,232,234];

// Task 5

// var bolean=[true,false];

// Task 6
// var mixedArray=[2,3,vijay,2,arslan];

// Task 7
// var availableQualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.writeln("<h1>Qualifications: <br>"); 
// document.write("<ol><li>"+availableQualifications[0]+"</li><li>"+availableQualifications[1]+"</li><li>"+availableQualifications[1]+"</li><li>"+availableQualifications[3]+"</li><li>"+availableQualifications[4]+"</li><li>"+availableQualifications[5]+"</li><li>"+availableQualifications[6]+"</li><li>"+availableQualifications[7]+"</li></ol></h1>");

// Task # 08

// var studentsName=["kamran","Asad","Shehzad"];
// var studentsMarks=[320,230,480];
// var totalMarks=500;
// document.writeln("Score of"+" "+studentsName[0]+" "+"is"+studentsMarks[0]+". Percentage is:"+studentsMarks[0]/totalMarks*100+"%");
// document.write("<br>Score of"+" "+studentsName[1]+" "+"is"+studentsMarks[1]+". Percentage is:"+studentsMarks[1]/totalMarks*100+"%");
// document.write("<br>Score of"+" "+studentsName[2]+" "+"is"+studentsMarks[2]+". Percentage is:"+studentsMarks[2]/totalMarks*100+"%");

// Task # 09
// a)
// var colorNames=["red","green","blue"];
// var unknownColor=prompt("what color You want to add to the beginning");
// colorNames.unshift(unknownColor);
// document.writeln(colorNames);
// // b)
// var unknownColor=prompt("what color You want to add to the end");
// colorNames.push(unknownColor);
// document.writeln("<br>"+colorNames);
// // c)
// colorNames.unshift("seagreen","yellow","white");
// document.writeln("<br>"+colorNames);
// // d)
// colorNames.shift();
// document.write("<br>"+colorNames);
// // e)
// colorNames.pop();
// document.write("<br>"+colorNames);
// // f)
// var indexnumber=prompt("At which index you want to add color","Tell Index number");
// var colorNames1=prompt("Define Color")
// colorNames.splice(indexnumber,0,colorNames1);
// document.writeln("<br>"+colorNames);

// // g)
// var indexnumber=prompt("At which index you want to delete color","Tell Index number");
// var colorNumbers=+prompt("Define number of colors to be deleted")
// colorNames.splice(indexnumber,colorNumbers," ");
// document.writeln("<br>"+colorNames);

// Task # 10
// var stdScores=[320,230,480,120];
// document.write("<br>"+"Scores of Students:"+stdScores);
// document.write("<br>"+"Ordered Scores of Students:"+stdScores.sort());

// Task # 11
// var cityNames=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("<br>"+"Cities List:"+"<br>"+cityNames);

// var selectedCities=cityNames.slice(2,4);
// document.write("<br>"+"Selected Cities List:"+"<br>"+selectedCities);

// Task # 12
// var animalNames=["This","is","my","cat"];
// document.write("<br>"+"<h1>Array:</h1>"+"<br>"+animalNames);
// var arr=animalNames.join(" ");
// document.write("<br>"+"<h1>String:</h1>"+"<br>"+arr);

// Task # 13

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.shift()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.shift()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.shift()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.shift()
// document.write("out : <br/>"+fourthDevice+"<br/>")

// // 14. Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In-
// // First Out)


// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var firstDevice = device.pop()
// document.write("out : <br/>"+firstDevice+"<br/>")
// var secondDevice = device.pop()
// document.write("out : <br/>"+secondDevice+"<br/>")
// var thirdDevice = device.pop()
// document.write("out : <br/>"+thirdDevice+"<br/>")
// var fourthDevice = device.pop()
// document.write("out : <br/>"+fourthDevice+"<br/>")

// // 15.
// // Write a program to store phone manufacturers (Apple,
// // Samsung, Motorola, Nokia, Sony & Haier) in an array.
// // Display the following dropdown/select menu in your
// // browser using document.write() method:

// var phone = ["apple","samsung","motorla","nokia","sony & haier"]
// document.write(
//     "<select>"+
//     "<option>"+phone[0]+"</option>"+
//     "<option>"+phone[1]+"</option>"+
//     "<option>"+phone[2]+"</option>"+
//     "<option>"+phone[3]+"</option>"+
//     "<option>"+phone[4]+"</option>"+
//     "</select>"
// )


// assignment17-20 task1
// var twoD = [[], []];


// // assignment17-20 task2
// var egmatrix = [ 
//     [0,1,2,3], 
//     [1,0,1,2], 
//     [2,1,0,1], 
//  ]; 
//  for(var i = 0; i < egmatrix.length; i++) { 
//      document.write(egmatrix[i].join(" ") + "<br>"); 
//  } 


// // assignment17-20 task3
// var numricdata = [1,2,3,4,5,6,7,8,9,10]; 
// for(var i = 0; i < numricdata.length; i++) { 
//     document.write(numricdata[i] + "<br>"); 
// } 


// // assignment17-20 task4
// var number=prompt("Enter number of table which you want"); 
// var number1=prompt("Enter length of the table");
// document.write("Multiplication of table "+number);
// document.write("<br>"+"Length "+number1);
// document.write("<br><br>");
// for(var i = 1; i <= number1; i++) { 
//     for (var j=1; j<=number1 ; j++){
//          } 
// document.write(number + " x " + i + " = " + (number * (i))+"<br>");
// }


// // assignment17-20 task5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]; 
// for(var i = 0; i < fruits.length; i++) { 
//     document.write(fruits[i] + "<br>"); 
// }
// document.write("<br>");  
// for(var j=0; j<fruits.length ; j++){
//     document.write("elements at index "+j+" is "+fruits[j] + "<br>");
// }


// // assignment17-20 task6
// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write( "Counting: ");
// document.write( counting); 
// document.write( "Reverse Counting:");
// var counting1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var revecounting=counting1.reverse();
// document.write( revecounting);
// var counting2=[0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
// document.write( "Even:");
// function getEvenNumbers() {

// for (var i = 0; i < counting2.length; i++) {
//     if (counting2[i] % 2 === 0) {
//         document.writeln(counting2[i]+",");
        
//     }
// }
// }
// getEvenNumbers();
// document.write("<br><br>");
// function getOddNumbers() {
// document.write("Odd:"+"<br><br>")
// for (var i = 0; i < counting2.length; i++) {
//     if (counting2[i] % 2 === 1) {
//         document.writeln(counting2[i]+",");
        
//     }
// }
// }

// getOddNumbers();
// document.write("<br><br>");
// function getseriesNumbers() {
// document.write("Series:"+"<br><br>")
// for (var i = 0; i < counting2.length; i++) {
//     if (counting2[i] % 2 === 0) {
//         document.writeln(counting2[i]+"k,");
        
//     }
// }
// }

// getseriesNumbers();


// // assignment17-20 task7
// var searching=prompt("Welcome to SSD Bakers. What do you want to order");
// var search=["cake", "apple pie", "cookie", "chips", "patties"];
// for(var j=0; j<search.length ; j++){
// if(searching===search[j]){
//   document.write (search[j]+" is "+"<b>available</b>"+" at index "+j+" in our bakery");
// }
// else
// document.write("We are sorry."+searching+" is "+"<b>not available</b>"+" in our bakery");
// }


// // assignment17-20 task8
// var A = [24, 53, 78, 91, 12];
// var B=Math.max(A);
// document.write( "Array Items:"+A);
// document.write( "The Largest number is "+B);


// // assignment17-20 task9
// var A = [24, 53, 78, 91, 12];
// var B=Math.min(A);
// document.write( "Array Items:"+A);
// document.write( "The Smallest number is "+B);


// // assignment17-20 task10
// for(var i=1; i<=100; i++){
//     if(i%5===0){
//         document.write(i+", ");
//     }
// }

// // end of assignment17-20 

// assignment21-25 task1
// var firstname=prompt("What is your first name");
// var lastname=prompt("What is your last name");
// var fullname=firstname+" "+lastname;
// alert("Hello! "+fullname);



// assignment21-25 task2
// var input=prompt("What is your favourite mobile model");
// document.write("My Favourite phone is: "+input+"<br>");
// var finaloutput=input.length;
// document.write("Length of string: "+finaloutput);



// assignment21-25 task3
// var a=("Pakistani");
// document.write("String: "+a+"<br>");
// var b=a.indexOf("n")
// document.write("index of 'n': "+b);


// assignment21-25 task4
// var a=("Hello World");
// document.write("String: "+a+"<br>");
// var b=a.lastIndexOf('l');
// document.write("Last index of 'l': "+b);


// // assignment21-25 task5
// var a=("Pakistani");
// document.write("String: "+a+"<br>");
// var b=a.charAt(3);
// document.write("Character at index 3: "+b);


// // assignment21-25 task6
// var firstname=prompt("What is your first name");
// var lastname=prompt("What is your last name");
// var fullname=firstname.concat(" "+lastname);
// alert("Hello! "+fullname);


// // assignment21-25 task7
// var a=("Hyderabad");
// document.write("City: "+a+"<br>");
// var result = a.replace("Hyder", "Islam");
// document.write("After replacement: "+result);


// // assignment21-25 task8
// var a=("Ali and Sami are best friends. They play cricket and football together.");
// document.write("Message: "+a+"<br>");
// var result = a.replace(/and/g, "&");
// document.write("After Replacement: "+result);


// // assignment21-25 task9
// var a=("472");
// document.write("Value: "+a+"<br>");
// var b=("String");
// document.write("Type: "+b+"<br>");
// var c=("472");
// document.write("Value: "+c+"<br>");
// var result = b.replace("String", "number");
// document.write("Type: "+result);



// // assignment21-25 task10
// var a=prompt("Write something");
// document.write("User input: "+a+"<br>");
// var b=a.toUpperCase();
// document.write("Upper case: "+b);


// // assignment21-25 task11
// var a=prompt("Write something");
// document.write("User input: "+a+"<br>");
// var b=a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
// document.write("Title case: "+b);



// // assignment21-25 task12
// var num="35.36";
// document.write("Number: "+num+"<br>");
// var b=num.replace(".","");
// var c=b.toString();
// document.write("Result: "+c);


// // assignment21-25 task13
// var username = prompt("Enter your name: ");
// var charValue;
// for(var i = 0; i < username.length; i++){
//     charValue = username[i].charCodeAt(0);
//     if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
//         alert("Please enter a valid username")
//     }
// }


// // assignment21-25 task14   
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var a = prompt("What do you want to order: ");
// a = a.toLowerCase();
// var check = false;
// for(var i = 0; i < arr.length; i++){
//     if(a === arr[i]){
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false){
//     document.write("We are sorry. " + a+ " is not available in our bakery");
// }


// // assignment21-25 task15
// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Welcome");
// }
  

// // assignment21-25 task16
// var a = "University of Karachi";
// var arr = a.split("");
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>");
// }


// // assignment21-25 task17
// var a=prompt("Enter something");
// document.write("User input: "+a+"<br>");
// var b=a.charAt(a.length-1);
// document.write("Last Char of input: "+b);


// // assignment21-25 task18
// var a = "the quick brown fox jumps over the lazy dog";
// var count = (a.match(/the/g) || []).length;
// document.write("Text: " + a + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'");

// // end of assignment21-25
// assignment26-30 task1
// var a=prompt("Enter any positive integer");
// var b=Math.round(a);
// var c=Math.ceil(a);
// var d=Math.floor(a);
// document.write("number: "+a+"<br>");
// document.write("round of value: "+b+"<br>");
// document.write("floor value: "+d+"<br>");
// document.write("ciel value: "+c);


// // assignment26-30 task2
// var a=prompt("Enter any negative integer");
// var b=Math.round(a);
// var c=Math.ceil(a);
// var d=Math.floor(a);
// document.write("number: "+a+"<br>");
// document.write("round of value: "+b+"<br>");
// document.write("floor value: "+d+"<br>");
// document.write("ciel value: "+c);


// // assignment26-30 task3
// var a=prompt("Enter any negative number");
// var b=Math.abs(a);
// document.write("The absolute value of "+a+" is "+b);


// // assignment26-30 task4
// var a=Math.random();
// var b=Math.round(a*5)+1;
// document.write("random dice value: "+b);


// // assignment26-30 task5
// var a=Math.random();
// var b=Math.round(a*1)+1;
// document.write(b+"<br>");
// if(b===1){
// document.write("random coin value: Tails");
// }
// else{
// document.write("random coin value: Heads");
// }


// // assignment26-30 task6
// var a=Math.random();
// var b=Math.round(a*99)+1;
// document.write("random number between 1 and 100: "+b);


// // assignment26-30 task7
// var a=prompt("Enter your wieght in kgs");
// var b=parseFloat(a);
// document.write("The weight of user is "+b+" kilograms");


// // assignment26-30 task8
// var a=Math.random();
// var b=Math.round(a*9)+1;
// var c=prompt("Enter a number betwwen 1 and 10");
// if(c===b){
//     document.write("Congartulations");
// }
// else{
//     alert("Try again!");
// }

// // end of assignment26-30







// // start of assignment31-34

// // assignment31-34 task1
// var a=new Date();
// document.write(a);


// // assignment31-34 task2
// var monthNames = ["January", "February ", "March", "April", "May", "June", "July","August","September","October","November","December"];
// var a= new Date();
// var theMonth = a.getMonth();
// var result = monthNames[theMonth];
// alert("Current Month: "+result);


// // assignment31-34 task3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is: "+nameOfToday);


// // assignment31-34 task4
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if(nameOfToday===dayNames[0]||nameOfToday===dayNames[6]){
//     alert("It’s Fun day”");
// }
// else{
//     alert("Today is: "+nameOfToday);
// }


// // assignment31-34 task5
// var a=new Date();
// var b=a.getDate();
// if(b<16){
// document.write("First fifteen days of the month");
// }
// else{
// document.write("Last days of the month");  
// }


// // assignment31-34 task6
// var a=new Date();
// document.write("Current Date: "+a+"<br>");
// var c=a.getTime();
// document.write("Elapsed milliseconds since january 1, 1970: "+c+"<br>");
// var d=a.getMinutes();
// document.write("Elapsed minutes since january 1, 1970: "+d);


// // assignment31-34 task7
// var a=new Date();
// var b=a.getHours();
// if(b<12){
// alert("It's AM");
// }
// else{
// alert("It's PM");  
// }


// // assignment31-34 task8
// var a = new Date();
// var laterDate = new Date("Dec 31, 2020");
// document.write(laterDate);


// // assignment31-34 task9
// var a = new Date();
// var b = a.getTime();
// var c = new Date("Apr 24, 2020");
// var d = c.getTime();
// var e = b - d;
// var res = e/(1000*60*60*24);
// res = Math.floor(res);
// document.write(res + " days have passed since 1st Ramazan, 2020");


// // assignment31-34 task10
// var a = new Date();
// var b = a.getTime();
// var c = new Date("Jan 01, 2015");
// var d =c.getTime();
// var e = b - d;
// var res = e/(1000);
// res = Math.floor(res);
// document.write("On reference date: " + a + "<br>")
// document.write(res + " seconds had passed since beginning of 2015");


// // assignment31-34 task11
// var a = new Date();
// var b = a.getHours();
// b = b-1
// document.write("current date: " + a + "<br>");
// a.setHours(b);
// document.write("1 hour ago, it was " + a);


// // assignment31-34 task12
// var a = new Date();
// var b= a.getFullYear();
// b = b-100;
// document.write("current date: " + a + "<br>");
// a.setFullYear(b);
// document.write("100 years back, it was " + a);



// // assignment31-34 task13
// var age = +prompt("Enter your age");
// var a = new Date();
// var b = a.getFullYear();
// var res = b- age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + res);


// // assignment31-34 task14
// var a= "Ranjeet";
// var b = new Date();
// c = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var d = b.getMonth();
// var e = 410;
// var f = 16;
// var g = e * f;
// var h = 350;
// var i = g + h;
// document.write("K-Electric Bill" + "<br>" + "<br>");
// document.write("Customer Name: " + a+ "<br>");
// document.write("Month: " + c[d] + "<br>");
// document.write("No of units: " + e + "<br>");
// document.write("Charges per unit: " + f + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + g+ "<br>");
// document.write("Late Payment Surcharge: " + h+ "<br>");
// document.write("Gross Amount Payable (after Due Date): " + i + "<br>");

// // end of assignment31-34 






// // start of assignment35-38


// // assignment35-38 task1
// function distime(){
// var a=new Date();
// return a;
// }
// document.write(distime());


// // assignment35-38 task2
// function add(){
//     var a=prompt("Enter First name");
//     var b=prompt("Enter Last name");
//     var c=(a+" "+b);
//     return c;
// }
// alert("Hello "+add());



// // assignment35-38 task3
// function add(){
//     var a=parseFloat(prompt("Enter First number"));
//     var b=parseFloat(prompt("Enter second number"));
//     var c=(a+b);
//     return c;
// }
// alert("Sum of two numbers is: "+add());


// // assignment35-38 task4
// function calcu(){
//     var a=parseFloat(prompt("Enter First number"));
//     var b=parseFloat(prompt("Enter second number"));
//     var c=prompt("Enter operator which you want to perform");
//     if(c==="+"){
//         var d=(a+b);
//         return d;
//     }
//     else if(c==="*"){
//         var d=(a*b);
//         return d;
//     }
//     else if(c==="/"){
//         var d=(a/b);
//         return d;
//     }
//     else if(c==="-"){
//         var d=(a-b);
//         return d;
//     }
//     else{
//         return console.error();   
//     }
// }
// document.write("Calculated Result : "+calcu());



// // assignment35-38 task5
// function squares(){
//     var a=parseFloat(prompt("Enter any number"));
//     var b=a*a;
//     return b;
// }
// alert("Square of inputted number is: "+squares());

         

// // assignment35-38 task6
// function fact(){
//     var factans=1;
//     var a=parseInt(prompt("Enter any number"));
//     for(var i=1; i<=a; i++){
//         factans=factans*i;
//     }
//     return factans;
// }
// alert("Factorial of inputted number is: "+fact());



// // assignment35-38 task7
// function count(){
// var a=prompt("Enter the starting number");
// var b=prompt("Enter the ending number");
// var result=0;
// for(var i=a; i<=b; i++){
//    result +=i;
// }
// return(result);
// }
// alert("Counting from a to b is: "+count());


// // assignment35-38 task8
// var base=prompt("Enter base value to calculate right angle triangle");
// var perp=prompt("Enter perpendicular value to calculate right angle triangle");
// var hyp1;
// var hyp2;
// function calculateHypotenuse(){
//   hyp1=((base*base)+(perp*perp));
// function calculatesquare(){
//     hyp2=Math.sqrt(hyp1);
//   }
//   calculatesquare();
//   return hyp2;
// }
// document.write("Result: "+calculateHypotenuse());


// // assignment35-38 task9
// var b=4;
// var a=prompt("Enter hieght to calculate area of triangle where width is 4");
// var ans;
// function triangle(){
//   ans=b*a;
//   return ans;
// }
// alert("area of triangle is "+triangle());


// // assignment35-38 task10
// var s=prompt("Enter any word to check whether it is palindrome or not?")
// function isPalindrome () {
//   var sRev = '';
//   for (var i=s.length; i>0; i--) {
//       sRev += s[i-1] ;
//   }
//   return s==sRev;
// }
// alert("result : "+isPalindrome());



// // assignment35-38 task11
// var str=prompt("Enter any sentence");
// function uppercase()
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];   
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("Example string : "+str+"<br>");
// document.write("Expected outcome : "+uppercase());



// // assignment35-38 task12
// var text=prompt("Enter any sentence");
// function longestWord() {
//   let wordArray = text.split(' ')
//   let maxLength = 0
//   let result = ''

//   for (let i = 0; i < wordArray.length; i++) {
//       if (wordArray[i].length > maxLength) {
//           maxLength = wordArray[i].length
//           result = wordArray[i]
//       }
//   }

//   return result
// }
// document.write("Example string : "+text+"<br>");
// document.write("Expected outcome : "+longestWord());



// // assignment35-38 task13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// alert(char_count('JSResourceS.com', 'o'));




// // assignment35-38 task14
// var r=prompt("Enter radius");
// var pie=3.14;
// var ans1;
// var ans2;
// function calcCircumference(){
//   ans1=(2*pie*r);
//   return ans1;
// }
// function calcArea(){
//   ans2=(pie*(r*r));
//   return ans2;
// }
// document.write("The circumference is: "+calcCircumference()+"<br>");
// document.write("The area is: "+calcArea());

// // end of assignment35-38 






// // Start of assignment38-42

// // assignment38-42 task1
// var a,b,c,res;
// function power(a,b){
//     c=Math.pow(a,b);
//     return c;
// }
// a=parseFloat(window.prompt("Enter value of a"));
// b=parseFloat(window.prompt("Enter value of b"));
// res=power(a,b);
// document.write("Result of a power b is :"+res);


// // assignment38-42 task2
// var year;
// function Leap(year){ 
//         if (year % 400 == 0) 
//             return true; 
//         if (year % 100 == 0) 
//             return false;  
//         if (year % 4 == 0) 
//             return true; 
//         return false;
// }
// year=parseInt(window.prompt("Enter any year to check weather it is leap year or not"));
// document.write(Leap(year)? "Entered year is Leap Year" : "Entered year is Not a Leap Year" );


// // assignment38-42 task3
// var a,b,c,S,res,ans;
// a=parseFloat(window.prompt("Enter value of a to calculate area of triangle"));
// b=parseFloat(window.prompt("Enter value of b to calculate area of triangle"));
// c=parseFloat(window.prompt("Enter value of c to calculate area of triangle"));
// function area(a,b,c){
//     if (a < 0 || b < 0 || c < 0 || (a+b <= c) || a+c <= b || b+c <= a){
//         document.write("Not Valid Triangle");
//     }
//     else{
//         ans=result(a,b,c);
//         return ans;
//     }
// }
//     function result(a,b,c){
//         S=((a+b+c)/2);
//         res=Math.sqrt(S*(S-a)*(S-b)*(S-c));
//         return res;
//     }
// document.write("area of triangle is :"+area(a,b,c));



// // assignment38-42 task4
// var mark1=parseFloat(window.prompt("Enter marks of subject one"));
// var mark2=parseFloat(window.prompt("Enter marks of subject two"));
// var mark3=parseFloat(window.prompt("Enter marks of subject three"));
// var tmarks=300;
// var ave,perce;
// function mainFunction(mark1,mark2,mark3){
//     if(mark1>100||mark2>100||mark3>100){
//         document.write("Invalid inputs");
//     }
//     else{
//     var ans=("Average of obtained marks :"+avera(mark1,mark2,mark3)+"<br>"+"Percentage of obtained marks: "+perce(mark1,mark2,mark3)+"%");
//     return ans;
//     }
// }
// function avera(mark1,mark2,mark3){
//     ave=((mark1+mark2+mark3)/3);
//     return ave;
// }
// function perce(mark1,mark2,mark3){
//     perce=(((mark1+mark2+mark3)/tmarks)*100);
//     return perce;
// }
// document.write(mainFunction(mark1,mark2,mark3));



// // assignment38-42 task5 incomplete
// var a=("I am Ranjeet");
// function pos(){
//     var b=a.indexOf("R");
//     return b;
// }
// document.write(a+"<br>"+"Position of R is :"+pos());



// // assignment38-42 task6
// var string = window.prompt("Enter any string");
// var vowel = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//                 j--;          
//                 secondLoop--;  
//             }

//         }
//     }
// }
// string.character();
// document.write("Final ans after removing vowels: "+string);



// // assignment38-42 task7
// var a = "Pleases read this application and give me gratuity";
// var count = 0;
// let vowel= false;
// function consecutive() {
// for (const letter of a.toLowerCase()) {
//   switch (letter) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       {
//         if (vowel) {
//           count++;
//           vowel= false;
//         } else {
//           vowel= true;
//         }
//         break;
//       }
//     default:
//       vowel= false
//   }
// }
// return count
// }

// document.write(a+"<br>"+"final ans after removing  two vowels in succession :"+consecutive());



// // assignment38-42 task8
// var a=parseInt(window.prompt("Enter city distance in kilometers"));
// function meter(){
//     var b=a*1000;
//     return b;
// }
// function feet(){
//     var c=a*3280.84;
//     return c;
// }
// function inch(){
//     var d=a*39370.1;
//     return d;
// }
// function centimeter(){
//     var e=a*100000;
//     return e;
// }
// document.write("Inputted distance in kilometers is: "+a+"km"+"<br>"+"Inputted distance in meters is: "+meter()+"m"+
// "<br>"+"Inputted distance in feets is: "+feet()+"foot"+"<br>"+"Inputted distance in inches is: "+inch()+"inches"
// +"<br>"+"Inputted distance in centimeters is: "+centimeter()+"cm");


// // assignment38-42 task9 incomplete
// var a=window.prompt("Enter the Hours for an employee worked above 40 hours : ");
// var over_time_pay,overtime;
// if(a>40){
//     over_time_pay = a * 12.00;
// }

// document.write("Overtime of this employee is Rs."+over_time_pay);


// // assignment38-42 task10
// var Amount = parseInt(window.prompt("Please Enter Amount for Withdraw :"));
// document.write( "Required notes of 100 is : " + parseInt((Amount / 100))+"<br>");
// document.write( "Required notes of 50 is : " + parseInt((Amount % 100) / 50)+"<br>");
// document.write( "Required notes of 10 is : " + parseInt((((Amount % 100) % 50) / 10))+"<br>");
// document.write( "Amount still remaining is : " + parseInt((((Amount % 100) % 50) % 10))+"<br>");





