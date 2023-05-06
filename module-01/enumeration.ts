enum ContractStatus {
    Permanet = 1,
    Temp,
    Apprentice,
}

let empStatus: ContractStatus = ContractStatus.Temp;
console.log(empStatus);
console.log(ContractStatus[empStatus]);
