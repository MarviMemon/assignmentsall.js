// //==================Q1===================//
// document.write("<h3> Result:");
// document.write("<br>");
//   let a = 10;
//   document.write("The value of a is : " + a);
//   document.write("<br> <br>");
//   document.write(".............................................");
//   document.write("<br> <br>");
//   let a1 = ++a;
//   document.write( "The value of ++a is: "+a1);
//   document.write("<br>");
//   document.write( "Now the value of a is: "+a1);

//   document.write("<br> <br>");

//   let a2 = 11;
//   let a3 = a2++;
//   document.write("the value of a++ is: " + a3);
//   document.write("<br>");
//   document.write("Now the value of a is: " +a2);
//   document.write("<br> <br>");

//   let a4 = 11;
//   let a5 = 11;
//   let a6 = --a5;
//   document.write("The value of --a is : "  +a4 );
//   document.write("<br>");
//     document.write("Now the value of a is: "  +a5 );
//     document.write("<br> <br>");
//     let a7 = 11;

//     let a8 = a7--;
//     document.write( "the value of a-- is: "+a8);
//     document.write("<br>");
//     document.write("Now the value of a is :" + a8);




//===================Q2=================//

document.write("<br>");

// var a1 =2, b=1;
// var result = (--a1) - (--b);
// document.write("a is " +result);
// document.write( "<br>");

// var aA =2, b=1;
// var result3 = (--aA) -(--b) + (++b);
// document.write("b is" + result3)
// document.write( "<br>");

// var a =2, b = 1;
// var result = (--a) - (--b) + (++b) + (b--);
// document.write( "result is " +result);
// document.write( "<br>")




//===============Q3===============//
// let userName = prompt("inter your name !");

// document.write(" Welcom to my websites   " + userName);




//=============Q4======================//
// let userInput = +prompt("Enter a number");
// if(userInput){
//     for (let i = 1; i <= 10; i++) {
//         let calculation = userInput + " x " + i + " = " + (userInput * i);
//         const para = document.createElement("p");
//         const node = document.createTextNode(calculation);
//         para.appendChild(node);
//         const element = document.getElementById("div1");
//         element.appendChild(para);
//       }
// }else{
//     let tableNum = 5;
//     for (let i = 1; i <= 10; i++) {
//         let calculation = tableNum + " x " + i + " = " + (tableNum * i);
//         const para = document.createElement("p");
//         const node = document.createTextNode(calculation);
//         para.appendChild(node);
//         const element = document.getElementById("div1");
//         element.appendChild(para);
//       }
// }

//==========================Q5==================//
 var eng = prompt("Enter your subject1 ");
 var math = prompt("Enter your subject2 ");
 var urdu = prompt("Enter your subject3 ");

 var eng1 = +prompt("enter your marks for subject one");
 var math1 = +prompt("enter your marks for subject two");
 var urdu1 = +prompt("enter your marks for subject three");
 
 var englishPC = (eng1 / 100) * 100;
 var mathPC = (math1 / 100 ) * 100;
 var urduPC = (urdu1 / 100 ) * 100;

 document.getElementById("subject1").innerHTML = eng;
//  document.getElementById("totalMarks1").innerHTML = eng1;
 document.getElementById("obtainedMarks1").innerHTML = eng1;
 document.getElementById("percentage1").innerHTML = englishPC;

 document.getElementById("subject2").innerHTML = math;
//  document.getElementById("totalMarks1").innerHTML = eng1;
 document.getElementById("obtainedMarks2").innerHTML = math1;
 document.getElementById("percentage2").innerHTML = mathPC;

 document.getElementById("subject3").innerHTML = urdu;
 //  document.getElementById("totalMarks1").innerHTML = eng1;
  document.getElementById("obtainedMarks3").innerHTML = urdu1;
  document.getElementById("percentage3").innerHTML = urduPC;
  let total = eng1 + math1 + urdu1;
document.getElementById("total").innerHTML = total;
let totalPercentage = (total / 300) * 100;
document.getElementById("totalPercentage").innerHTML = totalPercentage;
 
 




















 