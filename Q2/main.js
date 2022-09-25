//Setting up
let stringCont = document.getElementById("stringvariable");
let intCont = document.getElementById("integervariable");
let sumFuncAns = document.getElementById("sumfunctionanswer");
let if_elseAns = document.getElementById("ifelseheadanswer");

//All the variables
let stringVar = "Anidya";
stringCont.innerHTML = stringVar;
let integerVar = 27;
stringCont.innerHTML = integerVar;

//Function to find the sum 
let sumfunction = (num1, num2) => {
  return num1 + num2;       //This finds the sum
};

sumFuncAns.innerHTML = sumfunction(5, 9);

//Decision making function
let age = 19;
if (age >= 21) {            //This is an if statement
  if_elseAns.innerHTML = "Yes. You are old";
} else {
  if_elseAns.innerHTML = "No. You are young";
}

//LOOP
for (let i = 1; i < 11; i++) {   //This is a for loop
  document.write(i * 8 + "<br>");
}
