interface Loan {
    principal: number;
    interestRate: number;
}

interface ConventionalLoan extends Loan {
    months: number;
}

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest;
    return "The interest only loan payment is " + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({
    principal: 200000,
    interestRate: 8,
});
console.log(interestOnlyPayment);

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan): string {
    // Calculates the monthly payment of a conventional loan
    let interest: number = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment =
        (loanTerms.principal * interest) /
        (1 - Math.pow(1 / (1 + interest), loanTerms.months));
    return "The conventional loan payment is " + payment.toFixed(2);
}

let conventionalPayment = calculateConventionalLoanPayment({
    principal: 200000,
    interestRate: 8,
    months: 180,
});

console.log(conventionalPayment);
