import ColorMap from "../utils/ColorMap.js";
import Converter from "../utils/Converter.js";
import Orbit from "./Orbit.js";
import validate from "../utils/Validator.js";

export default class Spirograph {

    constructor() {

        this.radius = 100;
        this.distance = 30;
        this.speed = 1;
        this.showOrbits = true;
        this.showCentroids = false;
        this.theme = "interpolateViridis";

        this.orbits = [];
    }

    create(numberOfOrbits) {

        validate(numberOfOrbits).asInt().greatThanOrEqualsTo(2);

        this.orbits = [];

        let colorMap = ColorMap.generate(numberOfOrbits, this.theme)

        const step = 360 / numberOfOrbits;

        for (let i = 0; i < numberOfOrbits; i++) {

            let degrees = i * step;

            let angle = Converter.toRadians(degrees);

            const tiltX = 0 + (this.distance * Math.cos(angle))
            const tiltY = 0 + (this.distance * Math.sin(angle))

            this.orbits.push(new Orbit({
                radius: this.radius,
                tiltX,
                tiltY,
                degrees,
                clockwise: false,
                color: colorMap[i]
            }));
        }
    }

    setTheme(value){

        this.theme = value;

        let colorMap = ColorMap.generate(this.orbits.length, this.theme)

        for (const i in this.orbits) {
            this.orbits[i].options.color = colorMap[i];
        }
    }

    setDistance(value){

        this.distance = value;

        const step = 360 / this.orbits.length;

        for (const i in this.orbits) {

            let degrees = i * step;

            let angle = Converter.toRadians(degrees);

            this.orbits[i].tiltX = 0 + (this.distance * Math.cos(angle))
            this.orbits[i].tiltY = 0 + (this.distance * Math.sin(angle))
        }
    }

    setRadius(value){

        this.radius = value;

        for (const orbit of this.orbits) {
            orbit.options.radius = this.radius
        }
    }

    update(canvas) {

        canvas.clear();

        const x = canvas.getWidth() / 2;
        const y = canvas.getHeight() / 2;

        for (const orbit of this.orbits) {

            orbit.options.speed = this.speed;
            orbit.options.showCentroids = this.showCentroids;
            orbit.options.showOrbits = this.showOrbits;

            orbit.draw(canvas, x, y);
        }
    }
}
