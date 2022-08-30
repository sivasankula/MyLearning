let a = window.prompt('enter first element');
a = JSON.parse(a);
let b = window.prompt('enter second element');
b = JSON.parse(b);
const c  = window.prompt('enter operation to be done');
let result;
 
switch(c){
  case '*':
    result = a*b;
    console.log(result);
    break;
    case '-':
    result = a-b;
    console.log(result);
    break;
    case '+':
    result = a+b;
    console.log(result);
    break;
    case '/':
    result = a/b;
    console.log(result);
    break;
    case '%':
    result = a%b;
    console.log(result);
    break;
    default :
    console.log('invalid operation')
    break;
}
