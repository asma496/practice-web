

//Q no. 1

// alert
//     ("Asma Ashraf \n & \n I have done graduation" )


    // Q no. 2


//  var birthYear;
//     birthYear = 1996;
//     alert(` type of variable birthYear is = ` + typeof birthYear  )



//Q no. 3



    // var heading = "Rules for naming JS variables"
    // document.write (heading);


//Q no. 4


// var age = prompt( " enter Your Age ")
// var ageInDays = age * 365;
// console.log ( "My age in days is = "  + ageInDays)

//Q no.5

// var num ;
//  function inc(add){
// num = ++add
// return num
//  }
// var result = inc(4)
// alert(result)


//Q no. 6


// var num1 ;
// function dec(sub){
// num1 = --sub
// return num1
// }
// var result = dec(9)
// alert(result)


//Q no. 7

// var num2 = prompt("write an number?")
// function square( multi){
//     num2 = multi * multi
//     return num2
// }
// var result = square(num2)
// alert (num2)


//Q no. 8

// var num = prompt("Enter any number")
// if (num > 0){
//     console.log( "Positive integer" )
// }
// else  if
// ( num < 0){
//     console.log("Negative integer")
// }


//Q no. 9

// var us = prompt("Enter your US amount")
// var sau = prompt("Enter your saudia amount")
// var total = us * 163 + sau * 43;
// alert(total + " "  + "in pak rupees");




//Q no. 10


// var a = 2
// var b = 1
// var num = --a - --b + ++b + b--;
// console.log (num)











//Q no. 11

// var city = prompt ("where do ou live?")
// if 
// ( city === "karachi") {
//     alert("welcome to city of lighs")
// }

// if 
//    (city === "Lahore"){
//        alert ("welcome to historical city")
//    }

//    if 
//    (city === "Quetta") {
//        alert ("welcome to cold city")
//    }

//    else {
//        alert("error")
//    }


//Q no. 12


// var first = +prompt("first val" ,4);
// var sec = +prompt("sec val" ,3);
// var op = prompt("operater", "+" , );

// if(op == "+"){
//     alert(first+sec)
// } else if(op == "/"){
//     alert(first/sec)
// } else if(op == "-"){
//     alert(first-sec)
// } else if ( op == "*"){
//     alert(first*sec)

// } else if (op == "%"){
//     alert(first/sec*100+ "%");

// }else{
//     alert(invalid)
// }



// for( var i = 0; i < 30; i++){
//     console.log(i,"Asma")
// }

// var old =["asma","madiha","komal","iqra","hina","fatima"];
// var newst = ["tuba", "hijab", "sobia", "kanwal", "iqu", "soha"];
// var fullstu = [];
// if(old.length === newst.length){
// for(var i=0; i<old.lenght; i++){
//    fullstu[i] = old[i]+ " " +newst[i];
// }
// console.log(  fullstu);
// }



// var old =["asma","madiha","komal","iqra","hina","fatima"];
// var newst = ["tuba", "hijab", "sobia", "kanwal", "iqu", "soha"];
// var fullstu = [];
// if(old.length === newst.length){
// for(var i=0; i<old.length; i++){
//    fullstu[i] = old[i]+ " " +newst[i];
// }
// console.log(fullstu)
// }






// var inp = prompt("type the name")
// var names =["asma","madiha","aimen","iqra","hina","fatima"];
// for(var i =0; i<names.length; i++){
//     if(inp == names[i]){
//         alert("found")
//     }
// }




// var num = ["3","9","4","6","2"]
// function numb(){
//     num*2
//     return num*2
// }
// console.log(num);
//  for(var i = 0;i<num;i++){
//      num= i*i

//  }
//  console.log(num);


// var nam = "asma hina iqra shumaila madiha";

// function names(nam1){
  
//  nam = nam1.toUpperCase();

    
// }
//   names(nam)
// console.log(nam);





// var str ="geeksforgeeks";
// var string = 
// function func() { 
//     var str = 'geeksforgeeks'; 
//     var string = str.toUpperCase(); 
//     console.log(string); 
// }


// var nam = prompt("input your name")
// var vowel ="a, e, i, o, u";
// function nam1(nam){
//     nam == vowel 

// }















// function vowel_count(str1)
// {
//   var vowel_list = prompt("entre the name");
//   var vcount = 1;
  
//   for(var i = 0; i < str1.length ; i++)
//   {
//     if (vowel_list.indexOf(str1[i]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));





// var num = ['asma', "madiha"];
// var num2 = ["hina", 'shumaila' , "ruqayya"];
// var num3 = num2.concat(num);
// console.log(num3);



// var stu = ["asma","madiha","ruhama"];
// var newstu = stu.join(" ");
// console.log(newstu);

// var stu = 34;
// var newstu = stu.toString();
// console.log(newstu);



// var stu = ["ruhama","zainab","asma"];
// var newstu = stu.sort();
// console.log(newstu);

// var stu = ["80","56","3"];
// stu.sort(mysort);
// function mysort(a,b){
//     return a-b
// }
// console.log(stu);

// var number = [2,5,8];
// var newarr =[];
// function double(num){
//   for(var i=0; i<num.length; i++){
//     newarr.push = (num[i]*2)
// }

// }
// double(number);
// console.log(newarr);


// var num = [2,7,6];
// var newarr =[];
// function num1(num){
//     forEach(function(element){
//     newarr.push =num(element[i]*2);
// }
// }

//   num1(num);
// console.log(newarr);




// var num = [2,7,6];
// var newarr =[];

//     forEach(function(element){
//     newarr.push = num(element*2);
//     console.log(newarr);
// }


 
// var str = 'the quick brown fox jumps over the lazy dog';
// var str2 = (str.slice(0,19));
// var add = 'the white cat';
// var add2 = (add + str.slice(19));
 
// console.log(add2);


// var text = prompt('enter the text');
// if(text.indexOf('  ') >= 0){
//   console.log("2 spaces found");
// }
// else{
//   console.log('no found')
// }

 

// var text = 'that takes string and find exclaimation ! point in the string';
// console.log(text.indexoft('!'));

// var input =prompt('enter your amount');


// function txt(input){
// return Number(input).toFixed(2)
  
// }

// console.log(txt(input));
  
// function roundoff(num,n){
//   num = num.toFixed(n)
//   console.log(num)

// }
// roundoff(445.67006457, 3)


// var num= prompt('enter your amount'  );

//  function roundoff(num,n){
//    num = num.toFixed(n)
   

// }
// roundoff(num);
// console.log(num);









// function randomNumber(min, max) {  
//     min = Math.ceil(min); 
//     max = Math.floor(max); 
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }  
  
// document.write("Random Number between 1 and 10: ")  
  
// Function call 
// document.write( randomNumber(1, 10) );


// 1
    // if(arr== get.indexof(num)){
       //console.log("your index is" , arr);
    
//    }   
// newarr(get);
// console.log("your index is" , arr);


// var index = [11, 22 , 33, 44, 55, 66, 77, 88, 99,10].indexOf(66); 
// console.log("index is : " + index );

// var arr = [11, 22 , 33, 44, 55, 66, 77, 88, 99,10];
// function  double(arr)
//      if(arr.indexof()){
//     return "You're getting plenty of sleep! Maybe even too much!";}
//     console.log(arr)
    // else(number of sleep < 8)
    // {return "Get some more shut eye!";}
    // }
    // double(55);
    //console.log(arr);




    // var days = ['Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday','Saturday','Sunday'];
    // var range = Math.floor(Math.random()*7);
    // console.log(days[range]);



    // var now = new Date();
    // var birth = new Date("june 30, 1996");
    // var diff =  now.getTime() - birth.getTime();
    // diff = diff /(1000*60*60*24);
    // console.log(diff);


    // var now = new Date();
    // var tomm = new Date("Nov 5, 2020 10:44:30");
    // var diff = tomm.getTime() - now.getTime();
    // diff = diff/(1000*60*60);
    // console.log(diff);

var now = new Date();

    function formatdate(now) {
     var format =now.getFullYear()+ "-" +(now.getMonth()+1)+ "-" +now.getDate();
     console.log(format);
    }
    formatdate(now);
      // console.log("Current date: "+ theHr + ":" + theMin+ "-" +get, now);
      
      // tellTime(date)
      // console.log(now);