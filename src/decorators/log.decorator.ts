
export const LogDecorator = (value: any, { kind, name }: any) => {
    console.log(value, kind, name)
    if (kind === "method") {
        return function(this: any,...args: any) {
            console.log(`${name} decorated function called with arguments: ${args}`);
           try {
                const result = value.apply(this, args);
                return result;
           } catch (error) {
                console.log("Error: ", error);
                throw error;
           }
        }
    }
}