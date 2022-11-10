const VALID_COLORS = ["red", "yellow", "blue"];

class Ducktypium {
    constructor(color) {
        if (!VALID_COLORS.includes(color)) {
            throw new TypeError("Color must be red, yellow, or blue!");
        }

        this.color = color;
        this.calibrationSequence = [];
    }

    refract(pickColor) {

        if (!VALID_COLORS.includes(pickColor)) {
            throw new TypeError("Color must be red, yellow, or blue!");
        } else if (this.color == "red" && pickColor == "blue") {
            return "purple";
        } else if (this.color == "red" && pickColor == "yellow") {
            return "orange";
        } else if (this.color == "yellow" && pickColor == "blue") {
            return "green";
        } else {
            return this.color;
        }

    }
    refract(refColor) {
        if (this.color === "red" && refColor === "blue" || this.color === "blue" && refColor === "red") {
            return "purple"
        } else if (this.color === "red" && refColor === "yellow" || this.color === "yellow" && refColor === "red") {
            return "orange"
        } else if (this.color === "yellow" && refColor === "blue" || this.color === "blue" && refColor === "yellow") {
            return "green"
        } else if (this.color === refColor) {
            return this.color
        }
    }
    calibrate(arrayOfNumber) {
        let currentArray = arrayOfNumber.sort();

        currentArray.forEach(item => {
            let multiply = item * 3;
            this.calibrationSequence.push(multiply);
        });
    }
}

try {
    const badColor = new Ducktypium('pink');
} catch (e) {
    console.log('Color must be red, yellow, or blue!');
}

const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
