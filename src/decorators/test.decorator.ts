

export const TestLogDecorator = (value: Function, context: ClassDecoratorContext) => {
    console.log("value: ", value)
    console.log("context: ", context)
}

export const Authentication = <T extends { new(...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) => {
    console.log("baseClass: ", baseClass)
    console.log("context: ", context)
    return class extends baseClass {
        constructor(...args: any[]) {
            super(...args);
            console.log("Authentication decorator called");
        }
    }
}