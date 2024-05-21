var x= 6;
var y=3
result = x*y;
console.log(result);


// q2
var tem =30;
var F= tem*1.8+32;
console.log(F);
var c= F/1.8-32;
console.log(c);


//q3
var hour=4;
var res= hour*3600;
console.log(hour+"hour = " +res +"secound" ) ;

//q4
var A=`thingOne`;
var B= `thingtow`;
console.log(A+B);

//q5
var bill=10.25+3.99+7.15;
var tip=bill*.15;
var total= bill+tip;
console.log(total);

//q6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib=`The Intro to JavaScript course is ${adjective1} James and Julia are so ${adjective2} I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madLib);


//lab2
var musicians=1;
if (musicians <= 0){
    console.log("not a group");
} else if (musicians==1){
    console.log("solo");
} else if (musicians==2){
    console.log("duet");
}else if (musicians==3){
    console.log("trio");
}else if (musicians==4){
    console.log("quartet");
}else{
    console.log("this is a large group");
}


//lab2
var balance = -325;
var checkBalance = true;
var isActive = true;
if (checkBalance == true) {
    if (isActive == true) {
      if (balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
      } else if (balance == 0) {
        console.log("Your account is empty.");
      } else {
        console.log("Your balance is negative. Please deposit funds.");
      }
    } else {
      console.log("Your account is no longer active.");
    }
  } else {
    console.log("Thank you. Have a nice day!");
  }



//lab2

var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}