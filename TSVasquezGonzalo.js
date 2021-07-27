"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const operacion = (operation, num1, num2) => __awaiter(void 0, void 0, void 0, function* () {
    const calcs = yield Promise.resolve().then(() => __importStar(require('./calc')));
    switch (operation) {
        case 'suma':
        case '+':
            return (new calcs.Suma(num1, num2)).resultado();
        case 'resta':
        case '-':
            return (new calcs.Resta(num1, num2)).resultado();
        case 'multiplicacion':
        case '*':
            return (new calcs.Multiplicacion(num1, num2)).resultado();
        case 'division':
        case '/':
            return (new calcs.Division(num1, num2)).resultado();
        default:
            throw new Error("Operation Invalid");
    }
});
const operaciones = () => {
    const testCases = [
        { op: 'suma', args: [5, 2] },
        { op: 'resta', args: [5, 2] },
        { op: '*', args: [5, 2] },
        { op: '/', args: [5, 2] }
    ];
    testCases.forEach((testCase) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(operacion(testCase.op, ...testCase.args));
            console.log(yield operacion(testCase.op, ...testCase.args));
        }
        catch (error) {
            console.log(error);
        }
    }));
};
operaciones();
