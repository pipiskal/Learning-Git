
function action1(callback){
    setTimeout(()=>{
        console.log("action 1 is running");
        callback();
    }, 5000);
}

// so for action 2 to finish we need to wait action 1 first

function action2(){
    setTimeout(()=>{
        console.log("action 2 is now running");
    },5000);
}

action1(action2);

promise1 = new Promise((resolve, reject)=>{
    resolve = true;
    if (resolve){
        console.log("hi");
    }
})

promise2= new Promise((resolve, reject)=>{
    resolve = true;
    if (resolve){
        console.log("hi this is promise 2");
    }
})