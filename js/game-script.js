var number = Math.round(Math.random()*100);
var userNumber = prompt("Enter a number from 0 to 100", 50);

while(number != userNumber) {
	if(userNumber == null) {
		break;
	}else if(number < userNumber) {
 		alert("Our number is lower, try again");
  		var userNumber = prompt("Enter a number from 0 to 100", 50);
	}else if(number > userNumber) {
 		alert("Our number is higher, try again");
  		var userNumber = prompt("Enter a number again", 50);
	}
};

if(userNumber == number) {
	alert("You are right, the number is " + number);
}else{
	alert("interrupted by user")
}
