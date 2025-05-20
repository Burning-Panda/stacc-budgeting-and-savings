export type Account = {
    id: string;
    account_number: string;
    account_type: "checking" | "savings";
    balance: number;
    currency: string;
    owner: string;
}