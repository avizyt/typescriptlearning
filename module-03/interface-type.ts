interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

interface Sundae extends IceCream {
    sauce: "choco" | "caramel" | "strawberry";
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: "vanilla",
    scoops: 2,
    sauce: "caramel",
    nuts: true,
    // instructions: "",
};
console.log(myIceCream.flavor);

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops";
    } else {
        return "Your order will be ready soon!";
    }
}
console.log(
    tooManyScoops({
        flavor: "vanilla",
        scoops: 5,
        sauce: "caramel",
        // instructions: "nice scoops",
    })
);
