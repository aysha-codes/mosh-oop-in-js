
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

Circle.call({}, 1) // Identical to expression line 11 call
// passing the below without new sets the target of this to the window in JS
Circle.apply({}, [1, 2, 3]); // arguements are passed as an array

const another = new Circle(1);