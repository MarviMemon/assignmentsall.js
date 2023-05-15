     //==========Q1============//
// let a = 6;
// let b = 6;
// let c = a + b;
// document.write("sum of 6 and 6 is "+c+" ")

 //second type Q1//


//let num1 = +prompt("enter number 1");
 //let num2 = +prompt("enter number 2");
// let sum = document.getElementById("sum").innerHTML = "Sum of " + num1 + " and " + num2 +" is "+(num1 + num2);


     //========Q2=========//

// let num1 = +prompt("enter number 1");
// let num2 = +prompt("enter number 2");

// document.getElementById("multiplication").innerHTML = "multiplication of " + num1 + " and " + num2 +" is "+(num1 * num2);

// document.getElementById("subtraction").innerHTML = "subtraction of " + num1 + " and " + num2 +" is "+(num1 - num2);

// document.getElementById("division").innerHTML = "division of " + num1 + " and " + num2 +" is "+(num1 / num2);

// document.getElementById("modulus").innerHTML = "modulus of " + num1 + " and " + num2 +" is "+(num1 % num2);


      //========Q3=========//

// let X;
// document.write("Value after variable declaration is " + X );
// document.write("<br>")

// let X1 = 5;
// document.write("Initial value " + X1);
// document.write("<br>")

// let num = 5;
// let numNew = ++ num
// document.write("Value after increment is : " + numNew);
// document.write("<br>")

// let num1 = 6;
// let num2 = 7;
// let num3 = num1 + num2 ;
// document.write(" Value after addition is : " + num3);
// document.write("<br>")
// let num4 = 13;
// var num5 = --num4;
// document.write("Value after decrement is : " + num5);
// document.write("<br>")
// let num6 = 3;
// let num7 = 3;
// let num8 = num6 % num7;
// document.write("the remainder " + num8)


   //========Q4========//
// let ticket = 600;
// let ticket2 = +prompt(" how many tickets do you want ?");
// document.write("total cost to buy " + ticket2+ " tickets to a movie is " +(ticket * ticket2));


   //======Q5======//

// let table = 2;
// for (let i = 1; i <= 10; i++) {

//   let calculation = table + " x " + i + " = " + table * i;
  
//   const para = document.createElement("p");
  
//   const node = document.createTextNode(calculation);
  
//   para.appendChild(node);
  
//   const element = document.getElementById("div1");
  
//   element.appendChild(para);
// }

   //=============Q6=========================//
    // let celcius = +prompt("enter Temperature in celcius ");
    // let fahrenhite = +prompt("enter Temperature in fahrenhite ");
    // let C = ((celcius*(9/5))+32);
    // document.write("temperature " , celcius, " in fahrenhite is " + C + "<sup>o</sup> F <br>" );
    // document.write("temperature " , fahrenhite , " in celcius  is " + ((fahrenhite-32)* (5/9)) + "<sup>o</sup> c " );
 

    //==================Q7====================//
   // document.write("<h1> Shopping cart </h1>");

   //  let item1 = 650;
   //  document.write("Price of item 1 is " +item1);
   //  document.write("<br>  ");

   //  let item2 = 3;
   //  document.write("Quantity of item 1 is " +item2);
   //  document.write("<br>  ");

   //  let item3 = 100;
   //  document.write("Price of item 2 is " +item3);
   //  document.write("<br>  ");

   //  let item4 = 7;
   //  document.write("Quantity of item 2 is " +item4);
   //  document.write("<br>  ");

   //  let item5 = 100;
   //  document.write("Shipping Charges " +item5);
   //  document.write("<br> <br> <br> ");

   //   let finalCounting =((item1*item2)+ (item3*item4)+item5);
   //  document.write("Total cost of your order is. " +finalCounting);


    //===============Q8=====================//

   //  document.write("<h1> Marks Sheet </h1>");
   //  let marks1 = 980;
   //  document.write("Total marks : " +marks1);
   //  document.write("<br>");
   //  let marks2 = 804;
   //  document.write("Marks obtained : " +marks2);
   //  document.write("<br>");
   //  document.write("Percentsge : " +(marks2/marks1)*100);

    //============Q9===========================//

   //  document.write("<h1> Currency in PKR </h1>");
   //  let usD1 = 10;
   // let saudiR2 = 25;
   // let dollAr3 = 104.80;
   // let sRiyal = 28;
   // let finalCount = ((usD1* dollAr3)+( saudiR2*sRiyal));
   // document.write("Total Currency in PKR : " + finalCount);

  //============Q10===========================//

   //   let number = 5;
   //    // document.write(number + 5 * 10 / 2); 
   //    console.log(number + 5 * 10 / 2);

  //===============Q11==================//
   // document.write("<h1>Age Calculator</h1>");
   // let currentYear = 2023;
   // document.write("Current Year :" +currentYear);
   // document.write("<br>");
   // let birthYear = 1996;
   // document.write("Birth Year :" +birthYear);
   // document.write("<br>");
   // let calculation1 = ((currentYear -  birthYear));
   // document.write("Your Age is : " + calculation1 );

   //==================Q12====================//
   // document.write("<h1> The Geometrizer </h1>");
   // let radius = 20;
   // document.write("Radius of a cirlce :" + radius)
   // document.write("<br>");
   // let circummference = 2 * 3.142 * radius;
   // document.write("The circumference is :" + circummference);
   // document.write("<br>");
   // let area = 3.142 * (radius * radius);
   // document.write("The area is : " + area);
    


    //==================Q12====================//
     document.write("<h1>The Lifetime Supply Calculator </h1>");
     let chip ="chocolate chip";
     document.write("Favourite Snack : " + chip);
     document.write("<br>");

     let age = 15;
     document.write("Current age :" +age);
     document.write("<br>");

     let maixMum = 65;
     document.write("Estimated Maximum age : " +  maixMum);
     document.write("<br>");

     let amount = 3;
     document.write("Amount of snack per day : "+amount);
     document.write("<br>");
      let numLast =  maixMum - age; 
      // document.write(numLast*amount)
      let numFinal = numLast*amount;
      document.write("You will need "+numFinal+ " " + chip + " to last you until the ripe old age of "+ maixMum);
     
     
      



      


    
   