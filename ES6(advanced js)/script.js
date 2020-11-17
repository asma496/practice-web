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


// const multi = (a=0,b=0) =>{
//     var num = a*b;
//     return num;
// }
// var c = multi(4,2);
// console.log(c);

// //var age = prompt( " enter Your Age ")
// // var ageInDays = age * 365;
// // console.log ( "My age in days is = "  + ageInDays)


// const agesum = ()=>{
//     var age= prompt("Enter your age");
//     var ageInDays = age * 365;
//     return ageInDays
// }
//  var b = agesum()
//  console.log ( b);




// var arr =[3,5,9];
// const newarr= arr.map(
//     (item) =>{
//         return item+5
//     }
// )
// console.log(newarr)

// var arr2 =[3,5,9];
// const foo = arr2.map(
//     (item) =>{
//       return  Math.sqrt(item);
//     }
// )
// console.log(foo)

// var str =['asma','tuba', 'madiha'];
// const nam = str.map(
//     (item,index)=>{
//         let d = `${index} ${item}`

//         return d
//     }
// )





var teachers = [' Miss Faiza', 'sir mughal', 'sir yonus'];
var students = ['asma','madiha','shumaila' ];
var age = [ 19,30,40];
var a = ' Miss Faiza';
 var b = teachers.includes(a)

 if(b){
  let d = students.map((item,index) =>{
      return{ name:item, age:age[index]}
  } 
  )
        console.log(d); 
           
            
         }
     
  
// console.log(d)
    //  (item,index)=>{
    //     // return item == a
    // if(item == a){
    //       const d = students.map(
    //             (item,index) =>{
    //                ( a +'will have the class')
    //                return d
                  
    //             }
    //         )
    //     }
    
    //     console.log(d);
    

    //destructring;

    // [a,b,c]=[10,6,5]
    // console.log(b)

     let input =+prompt('WHAT IS YOUR SALARY?');
    // var salary = (sal>=5000)? 1000: 500
    // console.log(salary);

    var salary = (input == 5000)? 'you will get 1000RS bonus'
    : (input < 5000)? 'you will get 500RS bonus'
    :(input > 5000)?'you will get 2000RS bonus'
    :'invalid'
    console.log(salary);
                    

