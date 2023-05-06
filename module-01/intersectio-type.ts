interface Employee {
    empID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}

type ManagemnetEmployee = Employee & Manager;
let newManager: ManagemnetEmployee = {
    empID: 12345,
    age: 34,
    stockPlan: true,
};

console.log(newManager.empID);
console.log(newManager.age);
console.log(newManager.stockPlan);
