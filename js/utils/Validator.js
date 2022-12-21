class Validator {

    constructor(value) {
        this.value = value;
    }

    asNumber() {

        if (!isNaN(this.value)) {
            return this;
        }

        throw new Error(`${this.value} is not a number`);
    }

    asInt() {

        if (Number.isInteger(this.value)) {
            return this;
        }

        throw new Error(`${this.value} is not integer`);
    }

    asBool() {

        if (typeof this.value === 'boolean' || this.value instanceof Boolean) {
            return this;
        }

        throw new Error(`${this.value} is not boolean`);
    }

    asString() {

        if (typeof this.value === 'string' || this.value instanceof String) {
            return this;
        }

        throw new Error(`${this.value} is not string`);
    }

    greatThan(min) {

        if (this.value > min) {
            return this;
        }

        throw new Error(`${this.value} is not greater than ${min}`);
    }

    greatThanOrEqualsTo(min) {

        if (this.value >= min) {
            return this;
        }

        throw new Error(`${this.value} is not greater than or equals to ${min}`);
    }
}

export default function validate(value) {
    return new Validator(value);
}
