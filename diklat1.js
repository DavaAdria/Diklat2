// function kali(a, b) {
//     return a * b; // Mengembalikan hasil kali a dan b
// }

// // Memanggil fungsi dan menyimpan hasilnya dalam variabel
// var hasil = kali(5, 3); // hasil akan bernilai 15
// console.log(hasil); // Output: 15

// const tambah =(x,y)=> x+y;
// console.log(tambah(3,4));

// function string(a,b){
//     return a+b;
// };
// let jadi =string('Hallo', ' Dava');
// console.log(jadi);

// function greet(name){
//     console.log('Hallo, '+name+'!');
// };
// greet('Dava');

// let person={
//     fullName:function(){
//         return this. firstName+" "+this. lastName;
//     }
// }
// let person1={
//     firstName:'Dava',
//     lastName:'Adria'
// }
// let fullName=person.fullName.call(person1);
// console.log(fullName);

// let person={
//     fullName: function(kota, negara) {
//         return this.firstName + ' ' + this.lastName + ' sedang di ' + kota + ', ' + negara + '.';
//     }
// }
// let person1={
//     firstName:'Dava',
//     lastName:'Adria'
// }
// let fullName=person.fullName.apply(person1,['Manchester', 'Inggris']);
// console.log(fullName);

// let person={
//     name:'Dava',
//     stadium:'Old Trafford',
//     city:'Manchester',
//     country:'England',
//     greet:function() {
//         return 'Hello ' + this.name + ', ' + 'Welcome to ' + this.stadium + ', ' + this.city + ', ' + this.country + '!';
//     }
// };
// let greetDava =person.greet.bind(person);
// console.log(greetDava());