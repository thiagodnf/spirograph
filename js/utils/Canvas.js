import validate from "./Validator.js";

export default class Canvas {

    constructor(id) {
        this.canvas = document.getElementById(id);
        this.ctx = canvas.getContext("2d");
    }

    getWidth(){
        return this.canvas.width;
    }

    getHeight(){
        return this.canvas.height;
    }

    setWidth(value){

        validate(value).asNumber().greatThanOrEqualsTo(0);

        this.canvas.width = value;
    }

    setHeight(value){

        validate(value).asNumber().greatThanOrEqualsTo(0);

        this.canvas.height = value;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
    }

    drawArc(x = 50, y = 50, options = {}) {

        options = { ...{ radius: 100, color: "black", lineWidth: 1 }, ...options };

        this.ctx.beginPath();
        this.ctx.lineWidth = options.lineWidth;
        this.ctx.strokeStyle = options.color;
        this.ctx.arc(x, y, options.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    drawCircle(x = 50, y = 50, options = {}) {

        options = { ...{ radius: 100, color: "black" }, ...options };

        this.ctx.beginPath();
        this.ctx.fillStyle = options.color;
        this.ctx.arc(x, y, options.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
