

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




//Q no. 10


var a = 2
var b = 1
var num =  --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
console.log (num)











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


var first = +prompt("first val" ,4);
var sec = +prompt("sec val" ,3);
var op = prompt("operater", "+" , );


if(op == "+"){
    alert(first+sec)
} else if(op == "/"){
    alert(first/sec)
} else if(op == "-"){
    alert(first-sec)
} else if ( op == "*"){
    alert(first*sec)

} else if (op == "%"){
    alert(sec + "% of " + first + " is " + percent);

}else{
    alert(invalid)
}