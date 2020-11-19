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





// var teachers = [' Miss Faiza', 'sir mughal', 'sir yonus'];
// var students = ['asma','madiha','shumaila' ];
// var age = [ 19,30,40];
// var a = ' Miss Faiza';
//  var b = teachers.includes(a)

//  if(b){
//   let d = students.map((item,index) =>{
//       return{ name:item, age:age[index]}
//   } 
//   )
//         console.log(d); 
           
            
//          }
     
  
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

    //  let input =+prompt('WHAT IS YOUR SALARY?');
    // // var salary = (sal>=5000)? 1000: 500
    // // console.log(salary);

    // var salary = (input == 5000)? 'you will get 1000RS bonus'
    // : (input < 5000)? 'you will get 500RS bonus'
    // :(input > 5000)?'you will get 2000RS bonus'
    // :'invalid'
    // console.log(salary);
                    
// var arr = ['asma','madiha'];
// var arr1 = ['ruqayya', 'shumaila','hina'];
// arr[0]='fozia';

// var arr2 = [...arr,...arr1];
// console.log(arr2);


// var obj = {
//     name:"asma",
// }; 
// var obj3 = {
  
//     age:'30',

// };
// var newobj = {...obj, ...obj3};
// console.log(newobj);

// function myfunc(a,b,c){
//     return a*b*c

// }
// let d =[a,b,c]=[3,4,6];
// var res =myfunc(...d)
// console.log(res);


// let sum = (a,...b) =>{
//     var res1 =b.reduce((item,index)=>{
//         return item-index
//     }

//     )
//     res1= a-res1;
//    // console.log(res1);
//     return res1
// }
// var  result =sum(45,22,2);
// console.log(result);

// function check(...op){
//     let [a,b,c]=op
//     console.log(a,b,c)
// }
// check(1,2,3)

// var obj ={
//     name:' Name:Asma,',
//     Qualification:'Qualification: Graduate,',
//     age:'age:16,',
//     status:'status:not well',
// };
// let {name,Qualification,age,status}=obj;
// console.log(`${name}\n${Qualification}\n${age}\n${status}`);
// function myfunc(){
//     var a = 'hello asama';
//     console.log(a);
// }

// try{
//     myfunc();

// }
// catch(error){
//     console.log(error);
// }



// let click1 = ()=>{
//     setTimeout(display,3000);
// }
// let display = ()=>{
//     alert('asma')
//     alert('madiha')
// }

let click1 = ()=>{
    setInterval(display,1000);
}

let display =()=>{
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date. getFullYear();
    var hours = date.getHours();
    var minutes= date.getMinutes();
    var sec = date.getSeconds();
    
    document.getElementById('clockdiv').innerHTML =`${day}-  ${month}-${year} ${hours}:${minutes}:${sec}`;   
       
    }
            
          











// function getTimeRemaining(endtime) {
//     const total = Date.parse(endtime) - Date.parse(new Date());
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
//     return {
//       total,
//       days,
//       hours,
//       minutes,
//       seconds
//     };
//   }
  
//   function initializeClock(id, endtime) {
//     const clock = document.getElementById(id);
//     const daysSpan = clock.querySelector('.days');
//     const hoursSpan = clock.querySelector('.hours');
//     const minutesSpan = clock.querySelector('.minutes');
//     const secondsSpan = clock.querySelector('.seconds');
  
//     function updateClock() {
//       const t = getTimeRemaining(endtime);
  
//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }
  
//     updateClock();
//     const timeinterval = setInterval(updateClock, 1000);
//   }
  
//   const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//   initializeClock('clockdiv', deadline);