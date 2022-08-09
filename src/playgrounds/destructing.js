// const obj={
//     name:"ali",
//     age:23,
//     location:{
//         country:'afghanistan',
//         // city:'kabul'
//     }
// }

// const{name,age}=obj;
// const {country,city:c='asdf'}=obj.location;
// // console.log(`my name is ${obj.name} and i life in ${obj.location.country} `);
// console.log(`my name is ${name} and iam ${age} years old!`);
// console.log(` we live in ${country} and in ${c}`);
const items=['coffee (hot)','$2.00','$2.50','$2.75'];
const [coffeeName,smallSize,mediumSize,bigSize]=items;

console.log(`the ${coffeeName} price is ${smallSize}`)