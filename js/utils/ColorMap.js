import validate from "./Validator.js";

export default class ColorMap {

    static TYPE = {
        VIRIDIS: "interpolateViridis",
        TURBO: "interpolateTurbo",
        INFERNO: "interpolateInferno",
        MAGMA: "interpolateMagma",
        PLASMA: "interpolatePlasma"
    }

    static generate(total, name = ColorMap.TYPE.TURBO) {

        validate(total).asInt().greatThan(0);
        validate(name).asString();

        const colors = [];

        const step = 1.0 / total;

        for (let i = 0.0; i <= 1.0; i += step) {
            colors.push(d3[name](i));
        }

        return colors;
    }
}
