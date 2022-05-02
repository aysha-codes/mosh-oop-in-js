let obj = { value: 10 };
function increase(obj){
    obj.value++; // When done as an object, it points to the reference and updates outside the function as intended
}
increase(obj);
console.log(obj);