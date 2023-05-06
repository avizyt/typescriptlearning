let randVal: unknown = 10;

randVal = true;
// randVal = "mateo";

if (typeof randVal === "string") {
    console.log((randVal as string).toUpperCase());
} else {
    console.log("Error - A string was expected!");
}
