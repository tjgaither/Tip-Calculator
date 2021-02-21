var num1=Number(prompt("What is your bill?"));

var num2=num1*.07;

var num3=num2+num1;

var num4=num3*.05;

var sum=num3+num4;

sum=Math.ceil(sum)

document.body.querySelector(".container").innerHTML="Your final bill total is " +sum+ " dollars"