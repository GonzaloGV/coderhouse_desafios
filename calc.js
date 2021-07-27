"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = exports.Multiplicacion = exports.Resta = exports.Suma = void 0;
class Suma {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    resultado() {
        return this.a + this.b;
    }
}
exports.Suma = Suma;
class Resta {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    resultado() {
        return this.a - this.b;
    }
}
exports.Resta = Resta;
class Multiplicacion {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    resultado() {
        return this.a * this.b;
    }
}
exports.Multiplicacion = Multiplicacion;
class Division {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    resultado() {
        return this.a / this.b;
    }
}
exports.Division = Division;
