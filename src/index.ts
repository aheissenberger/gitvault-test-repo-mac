import { parseArgs } from "node:util";

export function hello(name: string) {
    return `Hello, ${name}!`;
}

const { values } = parseArgs({
    options: {
        name: {
            type: "string",
            short: "n",
            default: "world"
        }
    }
});

console.log(hello(values.name));
