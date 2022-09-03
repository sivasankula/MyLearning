//  Write a program with the following array. Find the list of elements
// where ID is even number and display the resultant array in
// console.log.
let arr=[
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
},
{
"userId": 1,
"id": 2,
"title": "quis ut nam facilis et officiaqui",
"completed": false
},

{
"userId": 1,
"id": 3,
"title": "fugiat veniam minus",
"completed": false
},
{
"userId": 1,
"id": 4,
"title": "et porro tempora",
"completed": true
},
];
let a = arr.filter((item)=>item.id % 2 == 0);
console.log(a);
console.log('************');

let b = arr.map((item)=>item.id % 2 == 0 ? item : null);
console.log(b);
console.log('**************');
let brr = [];
     arr.map(item =>{
        if(item.id % 2 == 1)
        {brr.push(item)}
    console.log(brr);
});