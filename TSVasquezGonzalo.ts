
const operacion = async (operation: string, num1: number, num2: number): Promise<number> => {
    const calcs = await import('./calc')
    switch(operation) {
        case 'suma':
        case '+':
            return  (new calcs.Suma(num1, num2)).resultado()
        case 'resta':
        case '-':
            return  (new calcs.Resta(num1, num2)).resultado()
        case 'multiplicacion':
        case '*':
            return  (new calcs.Multiplicacion(num1, num2)).resultado()
        case 'division':
        case '/':
            return  (new calcs.Division(num1, num2)).resultado()
        default:
            throw new Error("Operation Invalid")
    }
}

type TestCase = {
    op:string, 
    args: [number, number]
}

const operaciones = (): void => {
    const testCases: TestCase[] = [
        {op: 'suma', args: [5, 2]},
        {op: 'resta', args: [5, 2]},
        {op: '*', args: [5, 2]},
        {op: '/', args: [5, 2]}
    ]

    testCases.forEach(async (testCase) => {
        try {
            // Para mostrar que devuelve Promises
            console.log(operacion(testCase.op, ...testCase.args));
            
            console.log(await operacion(testCase.op, ...testCase.args));
        } catch (error) {
            console.log(error);
        }
    })
}

operaciones();