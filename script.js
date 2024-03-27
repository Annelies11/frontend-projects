function myCallBack(num){
    return num * 2;
}

function mainFunc(num, shouldCall, callback){
    res = num;
    if(shouldCall){
        res = callback(num);
    }
    return res;
}

console.log(mainFunc(20, true, myCallBack));
console.log("Callback kedua");
console.log(mainFunc(20,true,function (num){
    return num * 2;
}))
console.log("Callback ketiga");
console.log(
    mainFunc(20,true,(num) => {
        return num * 2
    })
)
console.log("Callback ketiga");
console.log(
    mainFunc(20, true, num => num * 2)
)