//your JS code here. If required.
// const text=document.getElementById("text");
// const number=document.getElementById("delay");
// const btn=document.getElementById("btn");
// const output=document.getElementById("output");
// async function promise1(){
// 	return new Promise((resolve,reject)=>{
// 		set Timeout(await()=>{
// resolve("");			
// 		},1000);
// 	} )
// }

let text1 = document.getElementById("text")
let delay = document.getElementById("delay")
let btn = document.getElementById("btn")
let output = document.getElementById("output")
output.innertext=""
btn.addEventListener("click", display)
async function display() {
    let promise = new Promise((resolve) => {
         setTimeout(()=> {
        resolve(text1.value)
     },Number(delay.value))
    })
    let result = await promise
    console.log(result)
    let p = document.createElement("p")
    p.innerText=result
   output.appendChild(p)
}