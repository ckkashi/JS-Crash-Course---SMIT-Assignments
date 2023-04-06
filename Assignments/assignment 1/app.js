// 1. Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.
// let firstValue = +prompt("Enter number : ");
// let secondValue = +prompt("Enter number : ");
// if(firstValue>=secondValue){
//     console.log(firstValue);
// }else{
//     console.log(secondValue);
// }

// 2. Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.
// let num = +prompt("Enter number : ");
// if(num<0){
//     alert("The sign is : - ")
// }else{
//     alert("The sign is : + ")
// }

// 3. Write a JavaScript program that accepts five numbers in five prompts and displays the larger one in the console
// let firstVal = +prompt("Enter first number : ");
// let secondVal = +prompt("Enter second number : ");
// let thirdVal = +prompt("Enter third number : ");
// let fourthVal = +prompt("Enter fourth number : ");
// let fifthVal = +prompt("Enter fifth number : ");
// let temp = 0 ;
// if(firstVal>secondVal){
//     temp = firstVal;
// }else{
//     temp = secondVal;
// }
// if(temp<thirdVal){
//     temp = thirdVal;
// }
// if(temp<fourthVal){
//     temp = fourthVal;
// }
// if(temp<fifthVal){
//     temp = fifthVal;
// }
// console.log("Larger number is : "+temp);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// for(let i=0;i<=15;i++){
//     if(i%2===0){
//         document.write(i+" is even.<br>");
//     }else{
//         document.write(i+" is odd.<br>");
//     }
// }

// 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade.
// let firstSubMarks = +prompt("Enter First Subject Marks : ");
// let secondSubMarks = +prompt("Enter Second Subject Marks : ");
// let thirdSubMarks = +prompt("Enter Third Subject Marks : ");
// let fourthSubMarks = +prompt("Enter Fourth Subject Marks : ");
// let totalMarks = 400;
// let obtainMarks = firstSubMarks+secondSubMarks+thirdSubMarks+fourthSubMarks;
// let avg = obtainMarks / totalMarks * 100 ;
// document.write("Total marks : "+obtainMarks+" out of "+totalMarks+"<br>");
// document.write("Percentage : "+avg+"% out of 100%<br>");
// if(avg<100 && avg>=90){
//     document.write("Grade is A.");
// }else if(avg<90 && avg>=80){
//     document.write("Grade is B.");
// }else if(avg<80 && avg>=70){
//     document.write("Grade is C.");
// }else if(avg<70 && avg>=60){
//     document.write("Grade is D.");
// }else if(avg<60){
//     document.write("Grade is F.");
// }

// 6.Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         document.write("FizzBuzz <br>");
//     }else if(i%5==0){
//         document.write("Buzz <br>");
//     }else if(i%3==0){
//         document.write("Fizz <br>");
//     }else{
//         document.write(i+" <br>");
//     }
// }

// 7. Write a JavaScript program to construct the following pattern, using a nested for loop
// *
// * *
// * * *
// * * * *
// * * * * *
// for(let i=1;i<=5;i++){
//     for(let j=0;j<i;j++){
//         document.write("* ");
//     }
//     document.write("<br>");
// }