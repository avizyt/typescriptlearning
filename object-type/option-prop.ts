interface Home {
    readonly resident: {
        name: string;
        age: number;
    };
}

const h: Home = {
    resident: {
        name: "Avijit",
        age: 30,
    },
};

function visitForBirthday(home: Home) {
    console.log(`Happy birthday ${home.resident.name}`);
    home.resident.age++;
}

console.log(visitForBirthday(h));
