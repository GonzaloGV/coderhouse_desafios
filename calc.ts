
export class Suma {
    private a: number;
    private b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    resultado () {
        return this.a + this.b
    }
}

export class Resta {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    resultado () {
        return this.a - this.b
    }
}

export class Multiplicacion {
    private a: number;
    private b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    resultado () {
        return this.a * this.b
    }
}

export class Division {
    private a: number;
    private b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    resultado () {
        return this.a / this.b
    }
}
