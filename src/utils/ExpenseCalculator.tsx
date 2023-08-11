// Hard-coded Car expenses
const carLoanInterestRate: number = 7; // Example car loan interest rate in percent
const carLoanDurationMonths: number = 60; // Example car loan duration in months
const carExpensesPercentage: number = 0.15; // 15% of monthly take-home pay

// Generate random expenses
const groceries = getRandomValue(229, 419); // Average monthly grocery bill in the US
const entertainment = getRandomValue(200, 310); // Average monthly entertainment bill in the US
const personalCare = getRandomValue(100, 206); // Average monthly personal care bill in the US

// Hard-coded House expenses
const mortgageInterestRate: number = 3.5; // Example mortgage interest rate in percent
const mortgageTermYears: number = 30; // Example mortgage term in years

// Function to calculate monthly vehicle payment
function calculateMonthlyCarPayment(totalLoanAmount: number, loanTermMonths: number, totalInterest: number): number {
    return (totalLoanAmount + totalInterest) / loanTermMonths;
}

// Function to estimate monthly car insurance
function estimateMonthlyCarInsurance(carPrice: number): number {
    return (carPrice * 0.05) / 12; // 5% of car's total price annually
}

// Function to estimate monthly take-home pay based on car expenses
function estimateMonthlyTakeHomePay(carExpenses: number): number {
    return carExpenses / carExpensesPercentage;
}

// Function to calculate monthly mortgage payment
function calculateMonthlyMortgage(housePrice: number): number {
    const r = (mortgageInterestRate / 100) / 12;
    const n = mortgageTermYears * 12;
    return (housePrice * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

// Function to calculate monthly property tax
function calculateMonthlyPropertyTax(housePrice: number): number {
    return (housePrice * 0.01) / 12; // 1% of house price annually
}

// Function to generate random values within a range
function getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

// Function to estimate monthly expenses based on the 50/30/20 rule
function estimateMonthlyExpenses(income: number): { needs: number, wants: number, savings: number } {
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;
    return { needs, wants, savings };
}

interface PlanTypes {
    car_payment: number;
    car_insurance: number;
    car_expenses: number;
    income: number;
    take_home_pay: number;
    mortgage: number;
    property_tax: number;
    groceries: number;
    entertainment: number;
    personal_care: number;
    needs: number;
    wants: number;
    savings: number;
}

export function calculatePlan(carPrice: number, housePrice: number): PlanTypes {
    
    const carLoanAmount = carPrice * 0.8; // 80% of car's total price
    const carLoanInterest = (carLoanAmount * (carLoanInterestRate / 100)) / 12; // Monthly car loan interest
    const carPayment = calculateMonthlyCarPayment(carLoanAmount, carLoanDurationMonths, carLoanInterest);
    const carInsurance = estimateMonthlyCarInsurance(carPrice);
    const carExpenses = carPayment + carInsurance;
    const takeHomePay = estimateMonthlyTakeHomePay(carExpenses);
    const mortgage = calculateMonthlyMortgage(housePrice);
    const propertyTax = calculateMonthlyPropertyTax(housePrice);
    const { needs, wants, savings } = estimateMonthlyExpenses(takeHomePay);
    const plan: PlanTypes = {
            car_payment: carPayment,
            car_insurance: carInsurance,
            car_expenses: carExpenses,
            income: takeHomePay,
            take_home_pay: takeHomePay,
            mortgage: mortgage,
            property_tax: propertyTax,
            groceries: groceries,
            entertainment: entertainment,
            personal_care: personalCare,
            needs: needs,
            wants: wants,
            savings: savings
    }
    return plan;
}
