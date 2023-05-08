function greet_imp(person: { name: string; age: number }) {
    return "Hello " + person.name;
}

interface Person {
    name: string;
    age: number;
}

const p: Person = {
    name: "Avijit",
    age: 30,
};

function greet(person: Person) {
    return "Hello " + person.name;
}

// console.log(greet_imp(p));
console.log(greet(p));
