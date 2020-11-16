// function test(){
//     // var foo = 33;
//     if(foo){
//         let foo = (2 + 55);
// //         console.log(foo)
//     }
// }
// test();
// console.log(foo);





//this is fuction
// const subtraction = () =>{
//     var c = 2-2;
//     console.log(c)
// }
// subtraction();


const multi = (a=0,b=0) =>{
    var num = a*b;
    return num;
}
var c = multi(4,2);
console.log(c);

//var age = prompt( " enter Your Age ")
// var ageInDays = age * 365;
// console.log ( "My age in days is = "  + ageInDays)


const agesum = ()=>{
    var age= prompt("Enter your age");
    var ageInDays = age * 365;
    return ageInDays
}
 var b = agesum()
 console.log ( b);




var arr =[3,5,9];
const newarr= arr.map(
    (item) =>{
        return item+5
    }
)
console.log(newarr)

var arr2 =[3,5,9];
const foo = arr2.map(
    (item) =>{
      return  Math.sqrt(item);
    }
)
console.log(foo)

var str =['asma','tuba', 'madiha'];
const nam = str.map(
    (item,index)=>{
        let d = `${index} ${item}`

        return d
    }
)
console.log(nam)
