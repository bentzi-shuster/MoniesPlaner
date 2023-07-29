export interface Budget{
    expenses: Expenses
    debt_payments: DebtPayments
    irregular: Irregular
    miscellaneous: string
}

export interface Fixed{
    rent: string
    utilities: string
    internet: string
    insurance: string
    loan_repayment: string
    subscriptions: string
}

export interface Variable{
    groceries: string
    dining_out: string
    transportation: string
    entertainment: string
    clothing: string
    personal_care: string
}

export interface Expenses{
    fixed: Fixed
    varaible: Variable
}

export interface DebtPayments{
    credit_card: string
    personal_loans: string
}

export interface Irregular{
    annual_subscriptions: string,
    property_taxes: string,
    vehicle_maintenance: string
}