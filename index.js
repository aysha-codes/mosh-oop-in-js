// Abstraction
// Hide the details
// Show the essentials

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 }; // only a local variable in this function

    let computeOptimumLocation = function() { // Now a private method
        // ,,,
    }
    this.draw = function() {
        computeOptimumLocation(0.1); // Calling it directly; concept of closure
        // Scope is temporary; closure stays
        // Closure determines what variables are accessible to an inner function
        // Can access all the variables in its parent function due to closure
        // To use members of the NEW object, you need to use this  

        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();
