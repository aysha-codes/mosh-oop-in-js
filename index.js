// Value Types
// Number, String, Boolean, Symbol (new in ES6), undefined, null
// Reference Types
// Object, Function, Array

let x = { value: 10 };
let y = x;

x.value = 20;
//When we use a reference type (like object), the value is tied to the object, not the variable
// it's stored somewhere else in memory, so when we copy it the address gets copied rather than the value
// Primitives are copied by their value
// Objects are copied by their reference