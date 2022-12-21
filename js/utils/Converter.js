import validate from "./Validator.js";

/**
 * Utility class to perform basic conversions among units
 */
export default class Converter {

    /**
     * Convert a number from "degrees" to "radians"
     *
     * @param   {number} degrees number to be converted in degrees
     * @returns {number}         the number in radians
     */
    static toRadians(degrees) {

        validate(degrees).asNumber();

        return degrees * Math.PI / 180.0;
    }
}
