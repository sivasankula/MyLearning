//  Write a program to sort the below array with id and also if the id is odd then display in console(array)
let arr = [
    {
    "userId": 1,
    "id": 3,
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
    "id": 1,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 10,
    "title": "et porro tempora",
    "completed": true
    },
    ];
    let a = arr.filter((item)=>item.id % 2 == 1 );
    console.log(a);
    console.log('*******************');

    let b = arr.map((item)=> item.id % 2== 1 ?item : null);
    console.log(b);

    console.log('*******************');
    let brr = [];
     arr.map(item =>{
        if(item.id % 2 == 1)
        {brr.push(item)}
    console.log(brr);
});