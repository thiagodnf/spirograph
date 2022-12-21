import Converter from "../utils/Converter.js";

const defaults = {
    radius: 50,
    tiltX: 0,
    tiltY: 0,
    degrees: 0,
    color: "blue",
    clockwise: true,
    showCentroids: true,
    showOrbits: true,
}

export default class Orbit {

    constructor(options = {}) {

        this.options = { ...defaults, ...options };

        this.tiltX = this.options.tiltX;
        this.tiltY = this.options.tiltY;
    }

    draw(canvas, xx, yy) {

        let angle = Converter.toRadians(this.options.degrees);

        if (!this.options.clockwise) {
            angle *= -1.0;
        }

        xx = xx + this.tiltX;
        yy = yy + this.tiltY;

        const x = xx + (this.options.radius * Math.cos(angle))
        const y = yy + (this.options.radius * Math.sin(angle))

        if (this.options.showOrbits) {
            canvas.drawArc(xx, yy, { radius: this.options.radius, color: "#696969"});
        }

        if (this.options.showCentroids) {
            canvas.drawCircle(xx, yy, { radius: 2, color: "white" });
        }

        canvas.drawCircle(x, y, { radius: 4, color: this.options.color });

        this.options.degrees += this.options.speed;
    }

}
