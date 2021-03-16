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
// var myName="NaveedHussain"

// Task 03
// var message;
// message="Hello World";
// alert(message);

// Task # 04

// var name="NaveedHussain";
// var age="24";
// var course="Certfied Mobile Application Development";
// alert(name);
// alert(age+" "+"years old");
// alert(course);


// Task # 05
// alert("PIZZA\nPIZZ\nPIZ\nPI\n\P")

// Task # 06
// var email;
// email="hnaveed204@gmail.com";
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

// var vname="Naveed"
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

// var pass="N@veed123";

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

// var stuNames=new Array("Naveed","Hussain");

// Task 4

// var rollnumber=[252,232,234];

// Task 5

// var bolean=[true,false];

// Task 6
// var mixedArray=[2,3,Naveed,2,Ali];

// Task 7
// var availableQualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.writeln("<h1>Qualifications: <br>"); 
// document.write("<ol><li>"+availableQualifications[0]+"</li><li>"+availableQualifications[1]+"</li><li>"+availableQualifications[1]+"</li><li>"+availableQualifications[3]+"</li><li>"+availableQualifications[4]+"</li><li>"+availableQualifications[5]+"</li><li>"+availableQualifications[6]+"</li><li>"+availableQualifications[7]+"</li></ol></h1>");

// Task # 08

// var studentsName=["Ali","Asad","Shehzad"];
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



