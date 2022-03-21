1. 
fix.html
<!DOCTYPE html>
<html>
  <body>
    <script>
      alert("I’m JavaScript!");
    </script>
    Whats the error in this ?
  </body>
</html>

2. 
script.js

alert("I’m invoked!");

3. 
script.js

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert('Wor
 ld')
alert(3 +
1
+ 2); // this is multiple line code and its working

REASON:
In Javascript, alert message prompts when the website loads.
It also allow to prompt one or more messages one after another.

4. 
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname + " " + lname;
alert( admin ); // "Guvi geek"

5.
script.js

let fname=10.5; 
fname = "Guvi";
let lname = "geek"
let name = fname+" "+lname;
alert( `hello ${name}` );

6.
script.js

let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a + b);

7.
REASON:
We cannot compare two string value.

script.js

var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

8.
script.js

let a = parseInt(prompt("Enter a number?"));
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

9.
script.js

let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

10.
script.js

let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

11.
script.js

// You cant change the value of the msg
let message;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);

12.
script.js

let message;
let lock = message;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

13.
script.js
let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

14.
script.js

let i = 3;
while (i ) {
  console.log( i-- );
}

15.
script.js

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

16.
script.js

for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }
  
17.
script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

18.
script.js

let countdown = 100;
while (countdown > 1) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

19.
script.js

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

REASON:
The variable lemeout has a value of 0.
When the if condition checks the lemein variable, the value 0 is in string format. 
But, when the next IF statement is triggered, the variable lemeout is in number format.
So, it will be considered as False. therefore it terminates the IF statement.
