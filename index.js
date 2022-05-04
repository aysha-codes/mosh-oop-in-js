function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = functio() {
        return defaultLocation;
    };

    this.draw = function() {
        computeOptimumLocation(0.1);

        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', { // USed to define getters and setters
        get: function() { // read only property
            return defaultLocation;
        },
        set: function(value) { // allow setting of the property from the outside
            if (!value.x || !value.y) // throw an error if invalid
                throw new Error('Invalid locaiton');

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1; // Throws the error
circle.draw();
