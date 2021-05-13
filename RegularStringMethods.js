var normalString = "Normal String";
console.log(normalString);

var stringlength = "Kalaivani";
console.log("Length"+stringlength.length);
var escapeCharactesString = "We are the so-called \"Vikings\" from the north."
console.log("escapeCharactesString "+ escapeCharactesString);
var singlequotes = "It\'s alright."
console.log(singlequotes);
var backslashInString = "The character \\ is called backslash.";
console.log(backslashInString);
var str1 = "Kalai";
var str2 = "vani";
console.log(str1+str2);
var stringIsstring = "Kalai";
var stringIsObject = new String("Kalai");
console.log(typeof stringIsstring);
console.log(typeof stringIsObject);
// == 
console.log(stringIsstring == stringIsObject);
console.log(stringIsstring === stringIsObject);
var str = "Please locate where  occurs! Please";
var pos = str.indexOf("locate",7);
console.log("indexof------> "+pos);
//lastIndexOf: The lastIndexOf() method returns the position of the last occurrence of a specified text

var pos1 = str.lastIndexOf("locate");
console.log("lastindexof "+pos1);
 var pos2 = str.indexOf("locate",15);
 console.log(pos2);
var pos3 = str.search("Please");
console.log(pos3);
//Slice extracts a part of a string and returns the extracted part in a new string.
var str = "Apple, Banana, Kiwi";
var res = str.slice(0, 4);
var res = str.slice(-12,-6);
//var res = str.slice(7);
//var res = str.slice(12);
console.log("Slice"+res);
// Substring
var SubstrRes = str.substring(7, 13);
console.log(SubstrRes);

//subStr() - second parameter is length
var ssres = str.substr(7, 6);
var ssres = str.substr(7);
console.log(ssres);
//Replacing String Content
var replaceStr = "Please visit Microsoft!";
var n = replaceStr.replace("Microsoft", "W3Schools");
console.log("String Replace "+n);
//  Upper case and Lower case
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();
console.log(text2);
var txt1 = "HELLO WORLD";       // String
var txt2 = txt1.toLowerCase();
console.log(txt2);
//Concat
var ctext1 = "Hello";
var ctext2 = "World";
var ctext3 = ctext1.concat(" ", ctext2);
console.log(ctext3);
//trim
var tstr = "       Hello World!        ";
console.log(tstr.trim());
//The trim() method is not supported in Internet Explorer 8 or lower. In that case we can use replace with regex

console.log("Trim for IE8 "+tstr.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
//JavaScript String Padding
let Padstr = "5";
Padstr = Padstr.padStart(3,0);
console.log("Padding Start"+Padstr);
Padstr = Padstr.padEnd(3,0);
console.log("Padding End"+Padstr);

//Extracting
var CHstr = "HELLO WORLD";
CHstr.charAt(0); 
console.log("chartAt "+CHstr.charAt(0));
CHstr.charCodeAt(0);
console.log("charcodeAt "+CHstr.charCodeAt(0));

//Property access
var hello = "HELLO";

console.log("Property Access "+ hello[0]);








