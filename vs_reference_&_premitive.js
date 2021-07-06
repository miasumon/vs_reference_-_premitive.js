//মেমরি তে জাভাস্ক্রিপ্ট কিভাবে জায়গা দিচ্ছে তার উপর ভিত্তি করে দুই ধরণের ডেটা টাইপ পাওয়া যায়!
// ১। primitive & ২.Reference

//primitive values  // Reference values
// 1.String          1.Object
// 2.Number          2.Array
// 3.Boolean         3.Function
// 4.null            4.Date
// 5.undefined
// 6.Symbol(e6)


// Note : primitive values are stored in stack on the other hand Reference values are kept in heap randomly



// Example :01
//primitive value

// var a = 5;
// var b = a;
// a=6;
// console.log(a);
// console.log(b);
 
// var title = "javascript";
// var name = title;
 
// title = "Changed Title";
 
// console.log(title);
// console.log(name);
 
 // not applicable mutation in primitive values
 
 
 
 // Reference value
// var person = {
//   name : "Sakib",
//   age : 35
// };
// var people = person;
// person = {}; // Assignment 
// //person.name = "Tamim"; // mutation 
 
// console.log(person);
// console.log(people);


 
 // Example with Array
// var a = ["Tamim","Sakib"];
// var b = a;
// // a.push("Mahmudullah"); -mutation 
// a = []; Assignment
 
// console.log(a);
// console.log(b);


 
// Example with Object
// var language = {
//   name : "javascript",
//   estd : 1995,
//   libraries : ["jQuery","vue"]
// };
// var language2 = _.cloneDeep(language);// used lodash to copy codes deeply
// //var language2 = {...language};// used spread operator to copy codes

// language.libraries.push("React");
// language.name = "C++";
// console.log(language);
// console.log(language2);



//Example:

// primitive value : String,Number and Boolean have their own object representations.

// var a = "sakib";

// console.log(a);
// var b = new String("Sakib")// wrapper type
// console.log(b.charAt(2));
// প্রিমিটিভ ভ্যালু এর নিজস্ব কোনো মেথড নেই কিন্তু wrapper type এর কাছে থাকায়, wrapper এর method  গুলা access করতে পারে।

// primitive type কে mutate/change করা যায় না কিন্তু re -assign করা যায়। 


//pass by reference /value

//Note : ফাংশনের মধ্যে always passed  by reference হয়। even primitive value passed by reference.


// let a = 1;
// let change = (val) =>{
//   val =  2; // here val is totally separated local variable 
// };
// change(a);

// console.log(a);

//Example 2 

let a = {
  num : 1
};

let change = (value) => {
  value.num = 2;
  
};
change(a);

console.log(a);