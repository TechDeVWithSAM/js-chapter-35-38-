                 /////CHAPTER NO 35 - 38  /////

// Question # 01

// function dated(now){
//         document.write(now)
// }   
// dated(new Date())

// Question # 02

// function greet(firstName , lastName){
//     alert(`Hello ${firstName + " " + lastName }`)
// }    

// greet("Jaffar" , "Aman")


// Question # 03

// var num1 = parseInt(prompt("Enter Number 1"));
// var num2 = parseInt(prompt("Enter Number 2"));

// function add(){
//         return num1 + num2
// }
// var adding = add()
// document.write(adding)

// Question # 04

// function calc(num1 , opt , num2 ){
//         if(opt === "+"){
//             return num1 + num2 
//         }
//         else if(opt === "-"){
//             return num1  - num2 
//         }else if(opt === "*"){
//             return num1  * num2 
//         }else if(opt === "/"){
//             return num1  / num2 
//         }
//         else{
//             return "Enter Correct operator"
//         }
// }    
// var num1 = parseInt(prompt("enter number 1"))
// var opt = prompt("enter opt");
// var num2 = parseInt(prompt("enter number 1"))

// var add = calc(num1 , opt , num2)
// document.write(`Number 1: ${num1} <br> Operator ${opt} <br> Numeber 2: ${num2} <br> Calculation : ${add} `)


// Question # 05

// function squareValues(num){

//         var square = num * num
//     return square
// }
// var value = parseInt(prompt("enter square value"));
// var functionValue = squareValues(value);
// document.write(`Your Value: ${value} <br> Square Value : ${functionValue}`  )


// Question # 06

//  function factorial(num){
//      var sum = 1;
//     for(var i = num ; i>= 1 ; i-- ){
//             sum = sum * i
//         } 
//         return sum
// }

// var funValue = factorial(10);
// document.write("Factorial Value: " + " " + funValue)

// Question # 07


// function counting(startValue , endValue){
//     for(var i = startValue ; i <= endValue ; i++){

//          document.write(i  + " <br>") 

//     }

// }    
// var startNum = parseInt(prompt("Enter Start Value"))
// var endNum = parseInt(prompt("Enter End Value"))
// counting(startNum , endNum)


// Question # 08

// function hypo(val1 , val2){

//         return Math.sqrt(Math.pow(val1 , 2) + Math.pow(val2 , 2));
// }
// var base = parseInt(prompt("Enter Base Value: " ))
// var per = parseInt(prompt("Enter perpendicular Value: "))
// var hyopValue = hypo(base , per)
// document.write(hyopValue)

// Question # 09

// function rectangle(width , heigth){
//         var A = width * heigth;
//         return A
// }
// var w = parseInt(prompt("Enter WIDTH"))
// var h = parseInt(prompt("Enter HEIGHT"))
// document.write(rectangle(w , h))

// Question # 10

// function pali(str){
//     var re = /[\W]/g;
//     var lowerstr = str.toLowerCase().replace(re,"");
//     var reversestr = lowerstr.split("").reverse().join("");
//     return reversestr === lowerstr

// }   

// console.log(pali("madam"))

// Question # 11

// function foo(para){

//         var word = para.split(" ")
//         var arr1 = [];
//         for(var i = 0 ; i < word.length ; i++){
//             arr1.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
//         }
//         return arr1.join(" ")

// }    
// var userPara = prompt("Enter any line:")

// document.write(foo(userPara));


// var word = "the quick brown fox";
// var split = word.split(" ")
// var arr = [];
// for(var i = 0 ; i<split.length ; i ++){
//         arr.push(split[i][0].toUpperCase() + split[i].slice(1))
// }
// console.log(arr)




// Question # 12

// function length(letter){

//     var word = letter.split(" ");
//     var arr = word[0];
//     for(var  i = 0 ; i<word.length ; i++){
//         if(arr.length < word[i].length){
//                 arr = word[i]
//         }
//     }
//     return arr
// }
// document.write(length("Web Development  Tutorial "))


// Question # 13

// function letterCount(str , letter){
//     var count = 0;
//     for(var i = 0 ; i < str.length ; i++){
//         if(str.charAt(i) == letter){
//             count++
//         }
//     }


//     return count
// }
// var Userstring = prompt("Enter any String Word")
// var userChar = prompt("Enter any Word Character")
// var result = letterCount(Userstring ,userChar)
// document.write(`User Argument : ${Userstring}
//                 <br> User Letter : ${userChar} <br>
//                 word count: ${result}`)

// Question # 14

// function calcCircumference(radius){
//         var circumference = 2*(Math.PI * radius);
//         return circumference
// }
// function calcArea(radius){
//     var   area = Math.PI * (radius * radius)
//     return area
// }

// var circumferenceResult = calcCircumference(20).toFixed(3);
// var areaResult = calcArea(10).toFixed(3);

// document.write(`"The circumference is NN". ${circumferenceResult} <br>`)
// document.write(`"The area is NN". ${areaResult}`)

// console.log(calcArea(20))
// // console.log(calcCircumference(20))