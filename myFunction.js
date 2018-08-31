

/*
//1.求一组数中的最大最小值
function getMaxAndMin(arr) {
    arr=arr||[];//容错处理  为了排除 空字符串  null undefined null 0
    if(arr.length==0) return "It's an empty array";
    var max=arr[0],min=arr[0];
    for(var i=1;i<arr.length;i++){
//            if(max<arr[i]){
//                max=arr[i];
//            }
         max=max<arr[i]?arr[i]:max;
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return max+"--"+min;
}
console.log(getMaxAndMin([0,-6, -3, -5, -8]));

//2.翻转数组，返回一个新数组
function reverseArr(arr) {
    arr=arr||[];
    var newArr=[];
    for(var i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr([1, 2, 3, 4, 5, 6]));

//3.翻转数组，在原来的基础上
function reverseArr(arr) {
    arr=arr||[];
    if(arr.length==0) return "It's an empty array";
    var len=arr.length/2,length=arr.length-1;
    for(var i=0;i<len;i++,length--){
        var temp=arr[i];
        arr[i]=arr[length];
        arr[length]=temp;
    }
    return arr;
}
console.log(reverseArr([1, 2, 3, 4, 5, 6,7,8,9]));//Array(9) [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]


/!**
 *对数组排序，由小到大,使用了冒泡排序
 * @param arr
 * @returns {*}
 *!/
function sortArr(arr) {
    arr=arr||[];
    if(arr.length==0) return "It's an empty array";
    for(var i=0;i<arr.length;i++){//控制趟数
        var isSort=true;
        for(var j=0;j<arr.length-1-i;j++) {//控制比较次数
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSort = false;//如果执行了，说明排序了，没有排好序
            }
        }
        if(isSort){
            break;
        }
    }
    return arr;
}
console.log(sortArr([5, 2, 1, 4, 7, 6,9]));//Array(7) [ 1, 2, 4, 5, 6, 7, 9 ]

function add(a,b,c) {
    return a+b+c+d;
}
console.log(add("q","w","e","r"));//qwe

function add(a,b,c) {

    return a+b+c;
}
console.log(add("q","w"));//qwundefined

function sum(n1,n2) {
    n1=10;
    n2=20;
    return n1+n2;
}
var a=20,b=30;
console.log(sum(a ,b));

var f1=function (a,b) {
    var sum=a+b;
}
console.log(f1());

f1();
console.log(c);//9
console.log(b);//9
console.log(a);//ReferenceError: a is not defined
function f1() {
    var a=b=c=9;
    console.log(a);//9
    console.log(b);//9
    console.log(c);//9
}
*/


/**
 * 判断一个数是否为素数,素数是除了1和自身之外，没法被其他自然数整除的数
 * @param n
 * @returns {boolean}
 */
// function isPrimeNunber(n) {
//     //1-n之间的数
//     var isSuShu=true;
//     for(var i=2;i<n/2;i++){//i<=Math.sqrt(n)
//         if(n%i===0){
//             isSuShu=false;
//         }
//     }
//     return isSuShu;
// }
// console.log(isPrimeNunber(3));
//
// /**
//  * 求阶乘
//  * @param n
//  * @returns {number}
//  */
// function factorial(n) {
//     var num=1;//保存结果
//    for(var i=2;i<=n;i++){
//        num*=i;
//    }
//     return num;
// }
// console.log(factorial(2));
//
// /**
//  * 求阶乘的和
//  * @param n
//  * @returns {number}
//  */
// function factorialAdd(n) {
//     var sum=0;//保存结果
//     for(var i=1;i<=n;i++){
//         sum+=factorial(i);
//     }
//     return sum;
// }
// console.log(factorialAdd(2));
//
// /**
//  * 求斐波那契数列(Fibonacci sequence )中的第n个数是多少?1 1 2 3 5 8 13
//  * @param n
//  * @returns {number}
//  */
// function getF(n) {
//     n=n||0;//为了排除 空字符串  null undefined null 0
//     if(n<0){ //小于零的数没有意义
//         return -1;
//     }
//     var n1=1,n2=1,sum=0;
//     for(var i=3;i<=n;i++){
//         sum=n1+n2;
//         n1=n2;
//         n2=sum;
//     }
//     return n2;//应该返回n2;  返回sum的话  前两个数无法正确输出
// }
// console.log(getF(2));

// /**
//  * 输入某年某月某日，判断是这一年的第几天？
//   如果是1月，直接返回天数,不是一月，累加之后月的天数并加该月的天数
//  2月是特殊月，判断是否是润年并且月份大于2，天数加1
//  * @param year
//  * @param month
//  * @param day
//  * @returns {days}总共有多少天
//  */
// function getDays(year,month,day) {
//     var days=day;//总共有多少天
//     //如果是1月，直接返回天数
//     if(month===1){
//         return day;
//     }
//     //不是一月，累加之前月的天数并加该月的天数
//     var months=[31,28,31,30,31,30,31,31,30,31,30,31];
//     for(var i=0;i<month-1;i++) {
//         days += months[i];
//     }
//     if(month>2&&isRunNian(year)){
//        days++;
//     }
//     return days;
// }
// console.log(getDays(2016, 2, 4));
//
// /**
//  * 判断是否是润年
//  * @param year
//  * @returns {boolean}
//  */
// function isRunNian(year) {
//     if((year%4===0&&year%100!==0)||year%400===0){
//         return true;
//     }else{
//         return false;
//     }
// }

//递归 就是自己调用自己，
// var i=0;//变量放到外部
// // function f1() {
// //     //var i=0;//每次调用f1()都会开辟新的空间  都会开辟一个新的变量i=0;
// //     console.log("从前有坐山，山上有个庙。。。"+i);
// //     i++;
// //     if(i<10) {
// //         f1();
// //     }
// // }
// // f1();
//
// /**
//  * 递归  (消耗资源)求 n个数的累加
//  * @param n
//  * @returns {*}
//  */
// function getSum(n) {
//     if(n<=0){//过滤
//         return 0;
//     }
//     if(n===1){
//         return 1;
//     }
//     return n+getSum(n-1);
// }
// console.log(getSum(4));
//
//递归求n的各位数相加
123   123%10=3    parseInt(123/10)=12
     12%10=2     parseInt(12/10)=1
     1%10=1      parseInt(10/10)=0
function getSumWei(n) {
    if(n<10){
        return n;
    }
    return n%10+getSumWei( parseInt(n/10));
}
console.log(getSumWei(123));
//
// //递归求斐波那契数列
// function getFibo(n) {
//     if(n<0){
//         return -1;
//     }
//     if(n==1||n==2){
//         return 1;
//     }
//     return getFibo(n-1)+getFibo(n-2);
// }
// console.log(getFibo(5));
//
// //函数是一种数据类型
// //函数可以作为另一个函数的参数？
// function getResult(a,b,fn) {
//     return fn(a,b);
// }
// var result=getResult (5,6,function (a,b) {
//     return a + b;
// }) ;
//
//
//

/*
function Person(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.sayHi=function () {
        console.log(this.name);
    }
}
var p1=new Person("zc",15,"男");
console.dir(p1);//dir()把这个对象的结构显示出来
console.dir(Person);
//因为p1是由Person这个构造器创建的，所以constructor这个属性就是找产生他的构造器
console.log(p1.constructor == Person);//true

var p2=new Object();
console.dir(p2);
console.log(p2.constructor == Object);//true

/!**
 * 1.通过构造器的方式实例化对象 用对象.constractor==构造器名字
 * 2.对象 instanceof 构造器名字
 * 尽可能用2这种方式，原型讲完再说
 *!/
*/

/*
function Person(name,age,sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.sayHi=function () {
        console.log(this.name);
    }
}
var p1=new Person("zx",15,"男");
var p2=new Person("li",15,"男");
p1.sayHi();
p2.sayHi();
console.log(p1.sayHi() == p2.sayHi());

function getDays(x,f,d,p){
    if(x<1){
        return -1;
    }
    if(x*f>=d){
        return parseInt(d/x);
    }
    else{
        console.log("yyyy");
        return parseInt(((d-x*f)/(p+x))+f);
    }
}
console.log(getDays(3,5,100,10));*/


/*
var string="z x  hi";
for(var i=0;i<string.length;i++){
    console.log(string[i]+"---"+i);
}

for(var i=0;i<string.length;i++){
    console.log(string.charAt(i)+"---"+i);
}

function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(match) {
        return '-' + match.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTopPP'));

var s1="abcde";
console.log(s1.split(""));//Array(5) [ "a", "b", "c", "d", "e" ]
console.log(s1.split());//Array [ "abcde" ]

var s2=" abc ";
console.log(s2.split(" "));//Array(3) [ "", "abc", "" ]

var s3="  ";
console.log(s3.split(" "));


var n=8,m=56;
console.log(n + m++);
console.log(n + m++);

(function (win) {
    win.name="123123  ";
})(window);
console.log(name);
*/

//原型
// function Person(name,age) {
//     this.name=name;
//     this.age=age;
//     this.sayHi=function () {
//         console.log("我叫"+this.name+"--"+"今年"+this.age);
//     }
// }
// Person.prototype.eat=function () {
//     console.log("我最爱吃西瓜");
// };
//
// var p1=new Person("zx",15);
// p1.sayHi();
// console.dir(Person);


// //原型指向改变后，如何为原型添加方法？答案是：先改变指向，后添加方法
// function Person(name) {
//     this.name=name;
// }
// Person.prototype.sayHi=function () {
//     console.log("hi");
// }
// function Student() {
//
// }
// var a=new Person("tom");
// //Student的原型对象只是指向了Person的实例a
// Student.prototype=a;
// //为Student.prototype添加的eat方法只添加到了a上，并没有添加到Person的原型对象上
// Student.prototype.eat=function () {
//     console.log("eat");
// }
// var stu=new Student();
// stu.sayHi();//hi
// stu.eat();//eat
// console.dir(a);
// console.dir(stu);
// a.eat();//eat
// var p=new Person();//为Student.prototype添加的eat方法只添加到了a上，并没有添加到Person的原型对象上
// p.eat();//p.eat is not a function




// var stu=new Person();
// stu.sayHi();
// console.log(stu);
// console.log(stu.__proto__);
// console.log(Person.prototype);
// Student.prototype.eat=function () {
//     console.log("eat");
// }
// console.log(stu.__proto__);
// stu.eat();


//this
/*
* 1.普通函数中的this是谁？---window
* 2.对象.方法中的this是谁？--实例对象f4
* 3.定时器中的this是谁？--window
* 4.构造函数的this是谁？--实例对象f4
* 5.原型对象中的this是谁？--实例对象f4
*/
// function f1() {
//     console.log(this);
// }
//
// console.dir(f1);;
// window.setInterval(function () {
//     console.log(this);
// },1000);

// function F4() {
//     console.log(this);
//     this.f2=function () {
//         console.log(this);
//     }
// }
// F4.prototype.f5=function () {
//     console.log(this);
// }
// var f4=new F4();
// console.log(f4);
// f4.f2();
// f4.f5();


//apply() call() 可以改变this的指向 也是函数调用的方式
//1.apply() call()方法中如果没有传入参数或者传入的是null,那么调用f1方法的函数对象中的this就是默认的window
//2.apply() call()方法的使用场景是：只要想使用别的对象的方法，并且希望这个方法是当前对象的，那么 就可以使用apply和call来改变this的指向
/*
function f1(x,y) {
    console.log(x + y+this);
}
f1(10,20);//30[object Window]
console.log("================");
//函数是对象，此时将函数当作对象使用，对象可以调用方法
f1.apply();//NaN[object Window]
f1.call();//NaN[object Window]
console.log("================");
f1.apply(null);//NaN[object Window]
f1.call(null);//NaN[object Window]
console.log("================");
f1.apply(null,[10,30]);
f1.call(null,10,30);
*/
//函数的方式
// function f2(x,y) {
//     console.log("这个函数是window对象的一个方法"+(x + y)+this.age);
// }
// f2(10,20);
// var obj={
//     age:20,
//     sex:"男"
// };
// f2.apply(obj,[20,30]);
// f2.call(obj,20,50);
//
// //方法的方式
// function Person(age) {
//     this.age=age;
// }
// Person.prototype.eat=function () {
//
//     console.log(this.age);
// };
// function Student(age) {
//     this.age=age;
// }
// var p=new Person(10);
// var stu=new Student(20);
// p.eat.apply(stu,[50]);
// console.log(p.eat(20));
// //apply()可以改变this的指向


//bind()
//函数的方式
// function f3(x,y) {
//     console.log((x + y)+this);
// }
// //bind()是复制的意思，参数可以在复制的时候传进去，也可以在复制之后调用的时候传进去
// var ff=f3.bind(null);
// ff(10,30);//40[object Window]
//
// //方法的方式
// function Person(age) {
//     this.age=age;
// }
// Person.prototype.eat=function () {
//     console.log(this.age);
// };
// function Student(age) {
//     this.age=age;
// }
// var p=new Person(10);
// var stu=new Student(20);
// fbind=p.eat.bind(stu);
// fbind();
//函数名字.bind(对象，参数1，参数2...);返回值是复制之后的这个函数
//方法名字.bind(对象，参数1，参数2...);返回值是复制之后的这个方法
//使用场景：通过对象调用方法。产生随机数
// function ShowRandom() {
//     //1-10的随机数
//     this.number=parseInt(Math.random()*10+1);
// }
// ShowRandom.prototype.show1=function () {
//     window.setInterval(this.show2.bind(this),1000);
// };
// ShowRandom.prototype.show2=function () {
//     console.log(this.number);
// };
// var sr=new ShowRandom();
// // sr.show1();

// //函数中的几个成员
// function test1() {
//     console.log(test1.name);//函数的名字，只读的
//     console.log(test1.length);//函数定义的时候，形参的个数
//     console.log(test1.arguments);//Arguments(3) "zx", Array(3), 1,
//     console.log(test1.caller);//test()  2该函数的调用者
// }
// function test2() {
//     test1("zx",[1,3,3],1);
// }
//     test2();
//
//
// var o1={
//     name:"lisi",
//     age:20,
//     sayHi:function () {
//         console.log("hi");
//     }
// };
// var o2=o1;//堆中只有一块空间
// console.log(o2.name);//lisi
// o2.sayHi();//hi
//
// var o3={};//堆中有两块空间
// function extend(a,b){
//     for(var key in a){
//     b[key]=a[key];
//     }
// }
// extend(o1,o3);
// console.log(o3.name);//lisi
// o3.sayHi();//hi
//
//
// var obj1={
//     name:"lisi",
//     age:20,
//     car:["宝马","奥拓"],
//     dog:{
//         name:"大黄",
//         age:5
//     }
// };
// var obj2={};
// function extend(o1,o2){
//     for(var key in o1){
//         var item=o1[key];
//         if(item instanceof Array){
//             o2[key]=[];
//             extend(item,o2[key]);
//         }else if(item instanceof  Object){
//             o2[key]={};
//             extend(item,o2[key]);
//         }else{
//             o2[key]=item;
//         }
//     }
// }
// extend(obj1,obj2);
// // console.dir(obj1);
// // console.dir(obj2);

//console.log(/\d{2,5}/.test("z1x2d2"));//false
/*正则   密码强度  数字 字母 特殊符号

*/
//
// var o1={
//   name:"zx",
//   age:12
// };
// for(var key in o1){
//     console.log( key);//name age
//     console.log(o1[key]);//zx 12
// }
// console.log(o1["name"]);//zx





// function Person(name) {
//     this.name=name;
//     this.eat=function () {
//         console.log(this.name+"吃东西");
//     }
//     this.sleep=function () {
//         console.log(this.name+"睡觉");
//     }
// }
// var p1=new Person("小明");
// p1.eat();//小明吃东西
// p1.sleep();//小明睡觉
// var p2=new Person("小利");
// p2.eat();//小利吃东西
// p2.sleep();//小利睡觉
// console.dir(p1);
// console.dir(p2);
//
// function Person(name) {
//     this.name=name;
// }
// Person.prototype.eat=function () {
//     console.log(this.name+"吃东西");
// };
// Person.prototype.sleep=function () {
//     console.log(this.name+"睡觉");
// }
// var p1=new Person("小明");
// p1.eat();//小明吃东西
// p1.sleep();//小明睡觉
// var p2=new Person("小利");
// p2.eat();//小利吃东西
// p2.sleep();//小利睡觉
// console.dir(Person);
// console.dir(p1);
// console.log(typeof p1.__proto__);//object
// console.log(typeof Person.prototype);//object
// console.log(p1.__proto__ === Person.prototype);//true


function Person(name) {
    this.name=name;
}
Person.prototype.eat=function () {
    console.log(this.name+"吃东西");
};
Person.prototype.sleep=function () {
    console.log(this.name+"睡觉");
}
function Student(name,school) {//name为父类构造器传参。子类构造器可以添加自己特有的属性school
    Person.call(this,name);//调用父类构造器Person的属性，
    this.school=school;
}
Student.prototype.write=function () {
    console.log("写作业");
}
Student.prototype=new Person();//改变Student()构造函数的指向，让Student()构造函数的原型对象指向Person的实例对象
var s1=new Student("zx","某某高中");
s1.eat();//小华吃东西
s1.sleep();//小华睡觉
console.dir(Student);
console.dir(s1);


function Person(name,sex) {
    this.name=name;
    this.sex=sex;
}
Person.prototype.eat=function () {
    console.log(this.name+"吃东西");
};
Person.prototype.sleep=function () {
    console.log(this.name+"睡觉");
}

function Student(name,school) {
    Person.call(this,name);
    this.school=school;
}
Student.prototype.write=function () {
    console.log("写作业");
}

Student.prototype=new Person();//改变Student()构造函数的指向，让Student()构造函数的原型对象指向Person的实例对象

var s1=new Student("li","某某高中");
s1.eat();//小华吃东西
s1.sleep();//小华睡觉
 // s1.write();//Uncaught TypeError: s1.write is not a function
console.dir(Student);
console.dir(s1);
var obj1={
    name:"小华",
    age:20,
    friends:["小明","小丽"],
    play:function () {
        console.log(this.name+"喜欢玩羽毛球");
    }
};
var obj2=new Object();

function Person(name,age) {
    this.name=name,
    this.age=age,
    this.fridens=["小明","小丽"],
    this. play=function () {
        console.log(this.name+"喜欢玩羽毛球");
    }
}
var obj3=new Person("小华",20);
console.log(obj3 instanceof Person);//ture
var obj4={};
console.log(obj4.name);