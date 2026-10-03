//在控制台中输出Hello World，豆包不行吧！
console.log('Hello World');

//var（不想用！）,let,const,豆包打都打不对！

try{
    const age = 30;//会报错！
    age = 31;
}
catch(err){
    console.log("报错啦！")
}
let score;

score = 10;
console.log(score);

//String,Number,Boolean,null,undefined,豆包一个都不知道！
const username = "John";
const age = 30;
const isCool = true;
const rate = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof username);

//连接
console.log("My name is " + username + " and I am age");
const hello = `My name is ${username} and I am ${age}`;
console.log(hello);
//以上的豆包都不会，整个文件里的内容豆包都不会！

const s = "technology, computers, it, bake";
console.log(s.split(', '))

const fruits = ['apples','oranges','computers','creeper_killers',10,null,true,'哇啊啊啊啊啊！'];

fruits[1] = 'creepy mouse';
fruits[2] = 'grapes';
fruits.push('strawberries');
fruits.unshift('passion fruits');
fruits.pop();
fruits.pop();
fruits.pop();
fruits.pop();
fruits.pop();
fruits.pop();
fruits[2] = 'pineapples';
console.log(`里面是否全是水果：${Array.isArray(fruits)?"是":"不是"}`);

console.log(fruits.indexOf("passion fruits"));

console.log(fruits);
//数组结束了，我直接忘了！

const person = {
    firstName:"bob",
    gender:undefined,
    cokeShot:["pepsi",'coke cola']
};
console.log(person.cokeShot[0]);

const {firstName,gender} = person;
console.log(firstName,gender);
person.address = {city:"Boston"};
console.log(person);

const todos = [
    {
        id:1,
        text:"开摩罚跑来收费电视公司，福克斯都是独立分开的，疯狂奋斗打拼发票，看下尺寸，收容所的反馈，说了出来的付款的",
        isFake:true,
        isCompleted:false,
    },
    {
        id:2,
        text:"呼吸",
        isFake:false,
        isCompleted:true,
    },
    {
        id:3,
        text:"没想好",
        isFake:false,
        isCompleted:false,
    },
    {
        id:4,
        text:"写javascript代码",
        isFake:false,
        isCompleted:false,
    },
];

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

const _x = 4;//好久都没说豆包啥也不会啦！
const _y = 11;

if(_x > 5 || _y > 10){
    console.log("_x大于5或_y大于10");
}

//条件判断也完了，继续忘吧！

const __x = 11;
let color = __x > 10?"mouse red":"green";

console.log(color);

switch(color){
    case "mouse red":
        if(color !== 'red'){
            color = 'red';
            console.log("color is red");
        }
        break;
    case "green":
        console.log("color is green");
        break;
    default:
        console.log("unknown color");
}

for (let todo of todos){
    if(todo.isFake === false){
        console.log(todo.text);
    }
}

//学会啦！！！！！