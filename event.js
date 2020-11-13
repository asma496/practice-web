// function num() {
//     var name = "asma here"
//     console.log(name)
// }


// function doo() {
//     document.getElementById("myh2").innerHTML = 'i am beautiful';
// }

// function change() {
//     var x = document.getElementById("para")
//     var txt = x.innerHTML;
//     x.innerHTML = "my new class"

//     x.className = "gud"
//     console.log(x.tagName)


// }




// function form() {

//     var country;

//     var result = document.getElementById("cityname").value;

//     switch (result) {

//         case countryname = "america":
//             cityName = "Chicago";

//             break;

//         case countryname = "pakistan":
//             cityName = "karachi";

//             break;

//         case countryname = "india":
//             cityName = "bombay";

//     }
//     document.getElementByset("countryname").value = countryname;


// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12,
// showallData: function() {
//     console.log(student.rollno)
// }
// };
// student.showallData()
// for (var i in student) {
//     console.log(student[i]);

// } 



// var list = [

//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true,
//     },

//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true,
//     },

//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false,
//     },
// ];


// for (var i in list1) {
//     console.log(list1.author + list2.author + list3.author);

// }

// function Employee(name, absent, salary) {
//     this.name = name;
//     this.absent = absent;
//     this.salary = salary;
//     Employee.prototype.bonus = 6000;
//     this.salarycalc = function() {
//         if (this.absent > 2) {
//             this.salary = this.salary * .2 + Employee.prototype.bonus;
//             // console.log(this.salary);
//         }
//     }
// }

// var employe1 = new Employee('asma', 0, 10000);
// var employe2 = new Employee('madiha', 10, 10000);
// var employe3 = new Employee('jawad', 0, 10000);


// employe1.salarycalc()
// employe2.salarycalc()
// employe3.salarycalc()
// employe1.bonus = 0;
// console.log(employe1)
// console.log(employe2)
// console.log(employe3)

// function facebook(){
//     window.location.href = "http://www.facebook.com";
// }

// var monkeyWindow = window.open("index.html","width=420,height=380");
//  var windowContent = "<h1>Capuchin monkey</h1>"
// monkeyWindow.document.write(windowContent);


function checkform() {
    var  name = document.getElementById("name")
    if(name.value.length === 0) {
     alert("Please enter your  name");
    name.focus();
    name.style.background = "red";

        return false;
     }
     var radios = document.getElementsByName("gender");
    //  var radios = document.getElementsByName("gender1");
     for (var i = 0; i < radios.length; i++) {
         if (radios[i].checked) {
         return true;
         }
        }
         alert("Please check one.");
         return false;
     }


    
         
        
