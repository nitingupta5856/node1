// const add =(a,b)=>{
//     return a+b;
// }
// console.log(add(2,3));

const product =(a,b)=>a*b;

console.log(product(5,2));

const student={
    name:'nitin',
    age:29,
    functioncall(){
        console.log('hi i am ' + this.name);
    }
}
student.functioncall();