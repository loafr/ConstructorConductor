//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes 
//in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  var StringBuilder = function(str) {
  	this.str = str;
  };
  
StringBuilder.prototype.reverse = function (str) {
	return this.str.split("").reverse().join("");
}

var string1 = new StringBuilder("this is a string");

string1.reverse();