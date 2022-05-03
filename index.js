function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

// We can use a for in loop to emumerate over properties
for (let key in circle) {
    if (typeof circle[key] !== 'function') // prevents return of functions, only values
        console.log(key, circle[key]) // logs properties line by line
}

const keys = Object.keys(Circle); // dot notation to log each key in an array but can't filter
console.log(keys);

if ('radius' in circle) // checks for existence
    console.log('Circle has a radius.');