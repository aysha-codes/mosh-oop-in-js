let number = 10;
function increase(number){
    number++; // completely independent of the above declared variable
              // AFter the function is done, it goes out of scope
}
increase(number);
console.log(number);