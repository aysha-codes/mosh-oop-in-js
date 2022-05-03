function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Can add something extra as needed to objects
circle.location = { x: 1 };
const propertyName = 'location';
circle[propertyName] = { x: 1 };
// IF you have special characters or spaces, use the above bracket notation
delete['location'] 
// OR
delete circle.location
// Delete data from an object you don't want the client to see, like passwords